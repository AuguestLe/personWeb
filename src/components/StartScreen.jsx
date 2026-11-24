import React, { useEffect, useRef, useState } from 'react'
import { HERO } from '../data/portfolio'

export default function StartScreen({ onStart }) {
  const [leaving, setLeaving] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const handleStart = () => {
    if (leaving) return
    setLeaving(true)
    timerRef.current = setTimeout(onStart, 480)
  }

  return (
    <div className={`start-screen ${leaving ? 'leaving' : ''}`}>
      <div className="start-stars" aria-hidden="true">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              animationDelay: `${(i % 7) * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="start-inner">
        <div className="start-player pixel-text">PLAYER 1</div>

        <div className="start-knight animate-bob" aria-hidden="true">
          <KnightSprite />
        </div>

        <h1 className="start-title pixel-text">
          <span className="title-main">CODE KNIGHT</span>
          <span className="title-sub">王乐的像素冒险世界</span>
        </h1>

        <div className="start-meta pixel-text">
          <span>AI 应用前端 / 全栈开发</span>
          <span className="meta-dot">◆</span>
          <span>LV.{HERO.level}</span>
        </div>

        <button className="press-start pixel-text" onClick={handleStart}>
          <span className="ps-glow">▶</span> PRESS START
        </button>

        <div className="start-hint">
          <span className="animate-blink">▮</span> 点击进入个人世界
        </div>
      </div>

      <div className="crt-line" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
    </div>
  )
}

// 纯 CSS 像素骑士（4:3 网格）
function KnightSprite() {
  return (
    <div className="knight-sprite">
      <div className="k-helm"><i /><i /></div>
      <div className="k-body"><span className="k-sword" /></div>
      <div className="k-legs"><i /><i /></div>
      <div className="k-shadow" />
    </div>
  )
}
