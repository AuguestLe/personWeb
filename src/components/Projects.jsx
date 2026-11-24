import React, { useState } from 'react'
import { ACHIEVEMENTS } from '../data/portfolio'
import PixelIcon from './PixelIcons'
import ProjectModal from './ProjectModal'
import { useReveal } from '../hooks/useReveal'

const RARITY = {
  legendary: { label: 'LEGENDARY', color: '#ffd34e', glow: 'rgba(255,211,78,0.5)' },
  epic: { label: 'EPIC', color: '#c08cff', glow: 'rgba(192,140,255,0.5)' },
  rare: { label: 'RARE', color: '#4db8e8', glow: 'rgba(77,184,232,0.5)' },
}

export default function Projects() {
  const [selected, setSelected] = useState(null)
  useReveal()

  return (
    <section id="projects" className="projects section-wrap">
      <div className="section-head reveal">
        <span className="section-label">ACHIEVEMENT HALL · 04</span>
        <h3 className="section-title">成就殿堂 / PROJECTS</h3>
        <p className="section-desc">六枚成就徽章，记录从低代码底座到 AI 落地的每一次通关。点击徽章查看完整战绩。</p>
      </div>

      <div className="achievement-grid">
        {ACHIEVEMENTS.map((a, i) => {
          const rarity = RARITY[a.rarity]
          return (
            <button
              className={`achievement reveal ${a.rarity}`}
              key={a.name}
              style={{ transitionDelay: `${i * 0.06}s`, '--rarity': rarity.color, '--glow': rarity.glow }}
              onClick={() => setSelected(a)}
            >
              <div className="ach-top">
                <span className="ach-rarity pixel-text">{rarity.label}</span>
                <span className="ach-stars">{'★'.repeat(a.rarity === 'legendary' ? 5 : a.rarity === 'epic' ? 4 : 3)}</span>
              </div>
              <div className="ach-medal">
                <div className="medal-ring animate-shine">
                  <PixelIcon name={a.icon} size={42} color={rarity.color} />
                </div>
              </div>
              <div className="ach-name">{a.name}</div>
              <div className="ach-year pixel-text">{a.year.split(' — ')[0]}</div>
              <div className="ach-trophy">
                <PixelIcon name="chest" size={14} color="#ffd34e" />
                <span>{a.trophy}</span>
              </div>
              <div className="ach-more pixel-text">查看战绩 ▸</div>
            </button>
          )
        })}
      </div>

      <div className="hall-footer pixel-box reveal">
        <PixelIcon name="chest" size={26} color="#ffd34e" />
        <div>
          <div className="hf-title pixel-text">ALL ACHIEVEMENTS UNLOCKED</div>
          <p>量化战绩：包体 300MB → 100MB · 支付链路缩短约一半 · 渠道接入 3 天 → 半天 · 报表秒级 → 百毫秒级</p>
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
