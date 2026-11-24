import React, { useState } from 'react'
import { JOURNEY } from '../data/portfolio'
import PixelIcon from './PixelIcons'
import { useReveal } from '../hooks/useReveal'

export default function Journey() {
  const [open, setOpen] = useState(0)
  useReveal()

  const job = JOURNEY[open]

  return (
    <section id="journey" className="journey section-wrap">
      <div className="section-head reveal">
        <span className="section-label">ADVENTURE MAP · 02</span>
        <h3 className="section-title">冒险地图 / JOURNEY</h3>
        <p className="section-desc">十年四段冒险旅程，从车商服务平台一路打到 AI 应用前线。点击关卡查看通关记录。</p>
      </div>

      <div className="journey-map reveal">
        <div className="map-path" aria-hidden="true">
          <svg viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path d="M0 50 Q 125 10 250 50 T 500 50 T 750 50 T 1000 50" fill="none" stroke="#1a1c2c" strokeWidth="6" strokeDasharray="2 8" strokeLinecap="round" />
          </svg>
        </div>

        <div className="level-nodes" role="tablist" aria-label="工作经历关卡">
          {JOURNEY.map((item, i) => (
            <button
              key={item.company}
              role="tab"
              aria-selected={open === i}
              aria-controls="journey-panel"
              id={`journey-tab-${i}`}
              className={`level-node ${open === i ? 'active' : ''}`}
              onClick={() => setOpen(i)}
            >
              <div className="node-marker">
                <PixelIcon name={item.landmark} size={38} color={open === i ? '#ffd34e' : '#fff4d6'} />
              </div>
              <div className="node-level pixel-text">{item.level}</div>
              <div className="node-company">{item.company.replace('北京', '').replace('有限公司', '')}</div>
              <div className="node-year pixel-text">{item.year.split(' — ')[0]}</div>
              {open === i && <div className="node-flag" aria-hidden="true">▼</div>}
            </button>
          ))}
        </div>
      </div>

      {/* 固定容器 + 只替换内容：避免 key 变更导致 DOM 重建后丢失 visible 状态 */}
      <div
        className="journey-detail pixel-box reveal"
        id="journey-panel"
        role="tabpanel"
        aria-labelledby={`journey-tab-${open}`}
      >
        <div className="detail-head">
          <div className="detail-badge pixel-text" key={`badge-${open}`}>{job.level} CLEARED</div>
          <div key={`head-${open}`}>
            <h4>{job.title}</h4>
            <p>{job.company} · {job.role} · {job.year}</p>
          </div>
        </div>
        <p className="detail-desc deep-fade" key={`desc-${open}`}>{job.desc}</p>
        <ul className="feat-list deep-fade" key={`feat-${open}`}>
          {job.feats.map((f, i) => (
            <li key={i}><PixelIcon name="star" size={13} color="#ffd34e" /><span>{f}</span></li>
          ))}
        </ul>
        <div className="detail-xp pixel-text">+ XP GAINED &nbsp; ████████████████ 100%</div>
      </div>
    </section>
  )
}
