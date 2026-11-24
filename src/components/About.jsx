import React, { useEffect, useRef, useState } from 'react'
import { STATS, ADVANTAGES, HERO, EDUCATION } from '../data/portfolio'
import PixelIcon from './PixelIcons'
import { useReveal } from '../hooks/useReveal'

function StatBar({ stat, start }) {
  const [w, setW] = useState(0)
  useEffect(() => {
    if (!start) return
    const t = setTimeout(() => setW(stat.value), 120)
    return () => clearTimeout(t)
  }, [start, stat.value])
  return (
    <div className="stat-row">
      <div className="stat-icon"><PixelIcon name={stat.icon} size={20} color={stat.color} /></div>
      <div className="stat-info">
        <div className="stat-label">
          <span className="pixel-text stat-key">{stat.key}</span>
          <span className="stat-cn">{stat.label}</span>
          <span className="pixel-text stat-num">{w}%</span>
        </div>
        <div className="stat-track">
          <div className="stat-fill" style={{ width: `${w}%`, background: stat.color }} />
        </div>
      </div>
    </div>
  )
}

export default function About() {
  const [start, setStart] = useState(false)
  const ref = useRef(null)
  useReveal()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // 已有可见状态时直接触发，避免矮屏下 threshold 永远达不到
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setStart(true)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setStart(true)),
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="about section-wrap">
      <div className="section-head reveal">
        <span className="section-label">PLAYER PROFILE · 01</span>
        <h3 className="section-title">角色档案 / ABOUT</h3>
        <p className="section-desc">认识这位手持代码之剑的工程师 —— 属性、装备与来历。</p>
      </div>

      <div className="about-grid">
        <div className="about-card pixel-box reveal" ref={ref}>
          <div className="card-title-bar pixel-text">
            <PixelIcon name="shield" size={16} color="#ffd34e" /> CHARACTER
          </div>
          <div className="about-card-body">
            <div className="avatar-frame">
              <img
                src="/character-card.webp"
                alt="代码骑士角色卡"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
              />
              <div className="avatar-level pixel-text">LV.{HERO.level}</div>
            </div>
            <div className="about-identity">
              <div className="id-name pixel-text">{HERO.nameEn}</div>
              <div className="id-class">{HERO.class}</div>
              <div className="id-tags">
                <span className="tag">React</span><span className="tag">Vue3</span>
                <span className="tag">AI</span><span className="tag">TS</span>
              </div>
            </div>
          </div>
          <div className="stat-list">
            {STATS.map((s) => <StatBar key={s.key} stat={s} start={start} />)}
          </div>
          <div className="card-footer pixel-text">
            <PixelIcon name="heart" size={14} color="#ff6b9d" /> × 5 &nbsp;&nbsp; HP FULL
          </div>
        </div>

        <div className="about-content">
          <div className="advantage-list">
            {ADVANTAGES.map((a, i) => (
              <div className="advantage reveal" key={a.title} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="adv-icon"><PixelIcon name={a.icon} size={26} color="#ffd34e" /></div>
                <div className="adv-text">
                  <h4>{a.title}</h4>
                  <p>{a.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="education pixel-box reveal">
            <div className="edu-title pixel-text"><PixelIcon name="tower" size={16} color="#4de0d0" /> EDUCATION</div>
            {EDUCATION.map((e) => (
              <div className="edu-row" key={e.school}>
                <div className="edu-school">{e.school}<span className="edu-degree"> · {e.degree}</span></div>
                <div className="edu-meta">{e.major} <span>{e.year}</span></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
