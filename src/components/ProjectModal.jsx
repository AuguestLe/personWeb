import React, { useEffect, useRef } from 'react'
import PixelIcon from './PixelIcons'

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)
  const previouslyFocused = useRef(null)

  useEffect(() => {
    previouslyFocused.current = document.activeElement
    closeRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      // 焦点圈在弹窗内，避免 Tab 跑到背景内容
      if (e.key === 'Tab') {
        const modal = closeRef.current?.closest('.modal')
        if (!modal) return
        const focusables = modal.querySelectorAll(
          'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusables.length) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      previouslyFocused.current?.focus?.()
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal pixel-box"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-bar pixel-text">
          <span><PixelIcon name="chest" size={14} color="#ffd34e" /> QUEST DETAILS</span>
          <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="关闭详情">✕</button>
        </div>
        <div className="modal-body">
          <div className="modal-heading">
            <div className="modal-medal"><PixelIcon name={project.icon} size={44} color="#ffd34e" /></div>
            <div>
              <h4 id="modal-title">{project.name}</h4>
              <div className="modal-year pixel-text">{project.year}</div>
            </div>
          </div>

          <div className="modal-section">
            <div className="modal-label pixel-text">TECH STACK · 装备</div>
            <p className="modal-stack">{project.stack}</p>
          </div>

          <div className="modal-section">
            <div className="modal-label pixel-text">QUEST LOG · 通关记录</div>
            <p className="modal-desc">{project.desc}</p>
          </div>

          <div className="modal-trophy">
            <PixelIcon name="star" size={20} color="#1a1c2c" />
            <span>{project.trophy}</span>
          </div>

          {project.demo && (
            <a className="pixel-btn modal-demo" href="https://auguestle.github.io/permit-route-planner/" target="_blank" rel="noreferrer">
              ▶ 查看在线 DEMO
            </a>
          )}

          <button className="modal-done pixel-text" onClick={onClose}>◀ 返回成就殿堂</button>
        </div>
      </div>
    </div>
  )
}
