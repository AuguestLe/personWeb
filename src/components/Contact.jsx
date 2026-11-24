import React from 'react'
import { CONTACTS, HERO } from '../data/portfolio'
import PixelIcon from './PixelIcons'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  useReveal()
  return (
    <section id="contact" className="contact section-wrap">
      <div className="section-head reveal">
        <span className="section-label">GUILD · 05</span>
        <h3 className="section-title">联络驿站 / CONTACT</h3>
        <p className="section-desc">旅程的终点，也是新冒险的起点。留下署名，组队开黑。</p>
      </div>

      <div className="contact-grid">
        <div className="npc-scene pixel-box reveal">
          <div className="npc-dialogue">
            <div className="npc-avatar">
              <div className="npc-face"><i /><i /></div>
            </div>
            <div className="npc-speech">
              <div className="npc-name pixel-text">GUILD MASTER</div>
              <p>嘿，冒险者！想一起打造下一个 AI 产品吗？<br />我随时准备响应召唤 —— 发个信号吧！</p>
              <span className="npc-cursor animate-blink">▮</span>
            </div>
          </div>
          <div className="npc-links">
            {CONTACTS.map((c) => (
              <a
                key={c.label}
                className="contact-btn pixel-text"
                href={c.url}
                target={c.url.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <PixelIcon name={c.icon} size={18} color="#ffd34e" />
                <span className="cb-label">{c.label}</span>
                <span className="cb-value">{c.value}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-aside reveal">
          <div className="sign-board pixel-box">
            <div className="sign-title pixel-text">✦ PLAYER CARD ✦</div>
            <div className="sign-name">{HERO.name}</div>
            <div className="sign-class">{HERO.class}</div>
            <div className="sign-line" />
            <div className="sign-quote">「{HERO.tagline}」</div>
            <div className="sign-sub pixel-text">{HERO.subtitle}</div>
          </div>
          <div className="contact-decor animate-float" aria-hidden="true">
            <PixelIcon name="heart" size={40} color="#ff6b9d" />
            <PixelIcon name="star" size={28} color="#ffd34e" />
            <PixelIcon name="sword" size={32} color="#4de0d0" />
          </div>
        </div>
      </div>
    </section>
  )
}
