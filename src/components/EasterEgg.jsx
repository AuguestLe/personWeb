import React, { useEffect, useRef, useState } from 'react'
import PixelIcon from './PixelIcons'

const W = 480
const H = 260

export default function EasterEgg() {
  const canvasRef = useRef(null)
  const [score, setScore] = useState(0)
  const [best, setBest] = useState(() => Number(localStorage.getItem('ck_best') || 0))
  const [running, setRunning] = useState(false)

  const runningRef = useRef(false)
  const bestRef = useRef(best)
  const gameRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.imageSmoothingEnabled = false

    const s = {
      player: { x: W / 2, y: H - 24, w: 44, h: 12 },
      items: [],
      keys: {},
      score: 0,
      frame: 0,
    }
    gameRef.current = s

    // 仅在游戏运行时、且事件来自画布/游戏区域时才拦截方向键与空格，
    // 避免全局劫持空格导致整页无法滚动。
    const shouldCapture = (e) => {
      if (!runningRef.current) return false
      const target = e.target
      return target === canvas || canvas.contains(target) || target?.closest?.('.game-shell')
    }

    const keyDown = (e) => {
      if (!shouldCapture(e)) return
      if (['ArrowLeft', 'ArrowRight', ' '].includes(e.key)) e.preventDefault()
      s.keys[e.key] = true
    }
    const keyUp = (e) => {
      s.keys[e.key] = false
    }
    window.addEventListener('keydown', keyDown)
    window.addEventListener('keyup', keyUp)

    // 焦点离开游戏区域时清空按键，防止"按键粘住"
    const clearKeys = () => {
      s.keys = {}
    }
    canvas.addEventListener('blur', clearKeys)
    window.addEventListener('blur', clearKeys)

    const spawn = () => {
      const types = [
        { color: '#4de0d0', pts: 10, kind: 'code' },
        { color: '#ffd34e', pts: 20, kind: 'star' },
        { color: '#ff6b9d', pts: -15, kind: 'bug' },
      ]
      const t = types[Math.floor(Math.random() * types.length)]
      s.items.push({ x: 20 + Math.random() * (W - 40), y: -12, vy: 1.4 + Math.random() * 1.2, ...t })
    }

    const draw = () => {
      ctx.fillStyle = '#14162b'; ctx.fillRect(0, 0, W, H)
      ctx.fillStyle = '#2b3060'
      for (let y = 0; y < H; y += 26) ctx.fillRect(0, y, W, 1)
      ctx.fillStyle = '#4a8f29'; ctx.fillRect(0, H - 12, W, 12)
      ctx.fillStyle = '#7cbc3a'; ctx.fillRect(0, H - 12, W, 3)

      const p = s.player
      ctx.fillStyle = '#1a1c2c'; ctx.fillRect(p.x - p.w / 2 - 2, p.y - 2, p.w + 4, p.h + 4)
      ctx.fillStyle = '#aab6cc'; ctx.fillRect(p.x - p.w / 2, p.y, p.w, p.h)
      ctx.fillStyle = '#cdd6e6'; ctx.fillRect(p.x - 8, p.y - 12, 16, 12)
      ctx.fillStyle = '#1a1c2c'; ctx.fillRect(p.x - 5, p.y - 8, 3, 3); ctx.fillRect(p.x + 2, p.y - 8, 3, 3)
      ctx.fillStyle = '#c8503c'; ctx.fillRect(p.x - p.w / 2 - 5, p.y, 5, p.h)
      ctx.fillStyle = '#4de0d0'; ctx.fillRect(p.x + p.w / 2 + 2, p.y - 14, 4, 16)

      s.items.forEach((it) => {
        ctx.fillStyle = it.color; ctx.fillRect(it.x - 7, it.y - 7, 14, 14)
        ctx.fillStyle = '#14162b'
        if (it.kind === 'code') { ctx.fillRect(it.x - 3, it.y - 3, 4, 4); ctx.fillRect(it.x + 1, it.y - 1, 3, 4) }
        else if (it.kind === 'star') { ctx.fillRect(it.x - 1, it.y - 5, 2, 10); ctx.fillRect(it.x - 5, it.y - 1, 10, 2) }
        else { ctx.fillRect(it.x - 4, it.y - 1, 8, 2); ctx.fillRect(it.x - 1, it.y - 4, 2, 8) }
      })

      ctx.fillStyle = '#fff4d6'; ctx.font = '14px monospace'; ctx.fillText(`SCORE ${s.score}`, 12, 22)
      ctx.fillStyle = '#ffd34e'; ctx.fillText(`BEST ${Math.max(bestRef.current, s.score)}`, W - 108, 22)
    }

    let raf
    const tick = () => {
      s.frame++
      if (runningRef.current) {
        if (s.keys.ArrowLeft || s.keys.a || s.keys.A) s.player.x -= 5.5
        if (s.keys.ArrowRight || s.keys.d || s.keys.D) s.player.x += 5.5
        s.player.x = Math.max(s.player.w / 2, Math.min(W - s.player.w / 2, s.player.x))
        if (s.frame % 42 === 0) spawn()
        s.items = s.items.filter((it) => {
          it.y += it.vy
          if (it.y > H + 10) return false
          if (it.y + 7 >= s.player.y - 12 && it.y - 7 <= s.player.y + s.player.h &&
              it.x >= s.player.x - s.player.w / 2 - 7 && it.x <= s.player.x + s.player.w / 2 + 7) {
            s.score = Math.max(0, s.score + it.pts)
            setScore(s.score)
            if (s.score > bestRef.current) {
              bestRef.current = s.score
              setBest(s.score)
              localStorage.setItem('ck_best', String(s.score))
            }
            return false
          }
          return true
        })
      }
      draw()
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('keydown', keyDown)
      window.removeEventListener('keyup', keyUp)
      canvas.removeEventListener('blur', clearKeys)
      window.removeEventListener('blur', clearKeys)
    }
  }, [])

  const toggle = () => {
    const next = !runningRef.current
    runningRef.current = next
    setRunning(next)
    if (next) canvasRef.current?.focus()
  }

  const reset = () => {
    if (!gameRef.current) return
    gameRef.current.score = 0
    gameRef.current.items = []
    setScore(0)
  }

  // 触屏/鼠标长按移动：按下即开始，松开停止
  const setMove = (dir) => {
    const s = gameRef.current
    if (!s) return
    s.keys.ArrowLeft = dir === 'L'
    s.keys.ArrowRight = dir === 'R'
    if (dir === 'STOP') {
      s.keys.ArrowLeft = false
      s.keys.ArrowRight = false
    }
  }

  return (
    <section id="eggshell" className="eggshell section-wrap">
      <div className="section-head reveal">
        <span className="section-label">SECRET LEVEL · ★</span>
        <h3 className="section-title">隐藏关卡 / MINI GAME</h3>
        <p className="section-desc">致敬完美世界教育「像素种子」—— 用 ← → 或 A / D 移动骑士，接住代码与星星，躲开 BUG！</p>
      </div>

      <div className="game-shell pixel-box reveal">
        <div className="game-topbar pixel-text">
          <span><PixelIcon name="star" size={14} color="#ffd34e" /> CODE CATCHER</span>
          <span className="game-score">SCORE: {score} &nbsp; BEST: {best}</span>
        </div>
        <div className="game-screen">
          <canvas
            ref={canvasRef}
            width={W}
            height={H}
            tabIndex={0}
            role="application"
            aria-label="接代码小游戏：使用方向键或 A / D 键移动角色，接住代码与星星，躲开 bug"
          />
          {!running && (
            <div className="game-overlay">
              <div className="go-title pixel-text">{score > 0 ? 'PAUSED' : 'READY?'}</div>
              <button className="pixel-btn" onClick={toggle}>{score > 0 ? '▶ 继续' : '▶ 开始游戏'}</button>
            </div>
          )}
        </div>
        <div className="game-controls">
          <div className="ctrl-hint pixel-text">◀ → MOVE &nbsp;·&nbsp; 接 CODE(+10) / STAR(+20) / 躲 BUG(-15)</div>
          <div className="ctrl-buttons">
            <button className="pixel-btn mini" onClick={toggle}>{running ? '❚❚ 暂停' : '▶ 开始'}</button>
            <button className="pixel-btn mini ghost-btn" onClick={reset}>↺ 重来</button>
            <button
              className="pixel-btn mini ghost-btn pad-btn"
              onPointerDown={() => setMove('L')}
              onPointerUp={() => setMove('STOP')}
              onPointerLeave={() => setMove('STOP')}
              aria-label="按住向左移动"
            >◀</button>
            <button
              className="pixel-btn mini ghost-btn pad-btn"
              onPointerDown={() => setMove('R')}
              onPointerUp={() => setMove('STOP')}
              onPointerLeave={() => setMove('STOP')}
              aria-label="按住向右移动"
            >▶</button>
          </div>
        </div>
      </div>
    </section>
  )
}
