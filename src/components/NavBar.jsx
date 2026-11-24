import React, { useEffect, useState } from 'react'
import PixelIcon from './PixelIcons'

const NAV = [
  { id: 'home', label: 'HOME', icon: 'castle' },
  { id: 'about', label: 'ABOUT', icon: 'shield' },
  { id: 'journey', label: 'JOURNEY', icon: 'tower' },
  { id: 'skills', label: 'SKILLS', icon: 'star' },
  { id: 'projects', label: 'PROJECTS', icon: 'chest' },
  { id: 'contact', label: 'CONTACT', icon: 'mail' },
]

export default function NavBar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    // section 节点与 NavBar 同批挂载，用 rAF 等一帧确保 DOM 就绪
    let observer
    const raf = requestAnimationFrame(() => {
      const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean)
      if (!sections.length) return
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(e.target.id)
          })
        },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      sections.forEach((s) => observer.observe(s))
    })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      observer?.disconnect()
    }
  }, [])

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="主导航">
      <button className="nav-brand pixel-text" onClick={() => go('home')} aria-label="返回首页">
        <span className="brand-mark"><PixelIcon name="sword" size={18} color="#1a1c2c" /></span>
        <span className="brand-text">WANG.LE</span>
      </button>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`} id="nav-menu">
        {NAV.map((item) => (
          <button
            key={item.id}
            className={`nav-link pixel-text ${active === item.id ? 'active' : ''}`}
            onClick={() => go(item.id)}
            aria-current={active === item.id ? 'true' : undefined}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="nav-status pixel-text">
        <span className="status-dot" /> ONLINE
      </div>

      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
        aria-expanded={menuOpen}
        aria-controls="nav-menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
