import React from 'react'
import { HERO } from '../data/portfolio'
import PixelIcon from './PixelIcons'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="hero grid-bg">
      <div className="hero-clouds" aria-hidden="true">
        <div className="cloud cloud-1">☁</div>
        <div className="cloud cloud-2">☁</div>
        <div className="cloud cloud-3">☁</div>
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-badge pixel-text">
            <span className="badge-star"><PixelIcon name="star" size={16} color="#ffd34e" /></span>
            WELCOME TO MY WORLD
          </div>

          <h2 className="hero-name pixel-text">
            <span className="hero-name-cn">王乐</span>
            <span className="hero-name-en">WANG LE</span>
          </h2>

          <div className="hero-role">
            <PixelIcon name="sword" size={22} color="#4de0d0" />
            <span>{HERO.class}</span>
          </div>

          <p className="hero-tagline">
            「{HERO.tagline}」<br />
            <span>从多模态证件识别到 Agent 问答，把前沿 AI 真正落进业务链路。</span>
          </p>

          <div className="hero-actions">
            <button className="pixel-btn" onClick={() => scrollTo('journey')}>
              ▶ 开始冒险
            </button>
            <button className="hero-ghost pixel-text" onClick={() => scrollTo('projects')}>
              查看成就 ▸
            </button>
          </div>

          <div className="hero-stats pixel-text">
            <div><strong>10+</strong><span>YEARS</span></div>
            <div><strong>4</strong><span>LEVELS</span></div>
            <div><strong>6</strong><span>QUESTS</span></div>
          </div>
        </div>

        <div className="hero-art animate-float">
          <div className="art-frame">
            <img
              src="/hero-world.webp"
              alt="像素世界地图中的代码骑士"
              width={1200}
              height={800}
              fetchpriority="high"
              decoding="async"
            />
            <div className="art-corner tl" /><div className="art-corner tr" />
            <div className="art-corner bl" /><div className="art-corner br" />
          </div>
          <div className="art-plaque pixel-text">
            <PixelIcon name="star" size={12} color="#ffd34e" /> LV.{HERO.level} CODE KNIGHT
          </div>
        </div>
      </div>

      <button className="scroll-cue" onClick={() => scrollTo('about')} aria-label="向下滚动">
        <span className="cue-text pixel-text">SCROLL</span>
        <span className="cue-arrow animate-bob">▼</span>
      </button>
    </section>
  )
}
