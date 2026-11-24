import { useEffect } from 'react'

// 全局共享的滚动进入动画观察器。
//
// 关键设计：完成状态写在 data-revealed 属性上，而不是 class 上。
// React 每次重渲染都会用 className 字符串整体覆盖元素，
// 会把观察器通过 classList.add('visible') 添加的类抹掉，
// 导致元素在交互（hover/点击）重渲染后突然退回 opacity:0。
// 属性不会被 className 覆盖，因此更稳妥。
let observer = null
let mutationObserver = null
let refCount = 0

const OBSERVER_OPTIONS = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }

function markRevealed(el) {
  el.setAttribute('data-revealed', 'true')
}

function getObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          markRevealed(entry.target)
          observer.unobserve(entry.target)
        }
      })
    },
    OBSERVER_OPTIONS
  )
  return observer
}

function observeAll() {
  const obs = getObserver()
  document.querySelectorAll('.reveal:not([data-revealed])').forEach((el) => {
    // 已经在视口内的元素直接标记，避免矮屏/首屏元素一直等不到回调
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      markRevealed(el)
      obs.unobserve(el)
      return
    }
    obs.observe(el)
  })
}

/**
 * 让当前页面所有 .reveal 元素在进入视口时播放动画。
 * 动态新增的节点也会被自动纳入观察，避免出现"切换后内容隐形"的 bug。
 */
export function useReveal() {
  useEffect(() => {
    refCount += 1
    observeAll()

    if (!mutationObserver && typeof MutationObserver !== 'undefined') {
      mutationObserver = new MutationObserver((mutations) => {
        const hasNewNodes = mutations.some(
          (m) => m.type === 'childList' && m.addedNodes.length > 0
        )
        if (hasNewNodes) observeAll()
      })
      mutationObserver.observe(document.body, { childList: true, subtree: true })
    }

    // 兜底：滚动时主动复查未被标记的节点。
    // IntersectionObserver 在节点被 React 重建、或首屏布局变化时可能漏掉回调，
    // 这里用 rAF 节流保证最终状态一定正确。
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        observeAll()
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      refCount -= 1
      if (refCount <= 0) {
        refCount = 0
        observer?.disconnect()
        observer = null
        mutationObserver?.disconnect()
        mutationObserver = null
      }
    }
  }, [])
}
