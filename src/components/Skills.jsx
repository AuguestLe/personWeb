import React, { useCallback, useState } from 'react'
import { SKILL_TREE } from '../data/portfolio'
import PixelIcon from './PixelIcons'
import { useReveal } from '../hooks/useReveal'

// 触屏设备没有真正的 hover，mouseenter 会"粘住"，
// 因此仅在支持 hover 的设备上启用悬停预览。
const canHover =
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(hover: hover)').matches

export default function Skills() {
  // selected：点击/触摸锁定；hovered：桌面端临时预览
  const [selected, setSelected] = useState(null)
  const [hovered, setHovered] = useState(null)

  useReveal()

  // 悬停优先（临时预览），否则回落到已选中的分支
  const highlighted = hovered ?? selected

  const toggle = useCallback((index) => {
    setSelected((prev) => (prev === index ? null : index))
  }, [])

  const onKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle(index)
    }
    if (e.key === 'Escape') setSelected(null)
  }

  const onEnter = canHover ? (i) => setHovered(i) : undefined
  const onLeave = canHover ? () => setHovered(null) : undefined

  return (
    <section id="skills" className="skills section-wrap">
      <div className="section-head reveal">
        <span className="section-label">SKILL TREE · 03</span>
        <h3 className="section-title">技能树 / SKILLS</h3>
        <p className="section-desc">
          四大技能分支全部点亮 —— 前端跨端、AI 应用、工程服务端、团队与架构。
        </p>
      </div>

      <div className="skill-tree">
        <div className="skill-root reveal">
          <div className="root-core animate-shine">
            <PixelIcon name="sword" size={34} color="#1a1c2c" />
          </div>
          <div className="root-label pixel-text">CODE KNIGHT</div>
        </div>

        {/* 连接线：与下方 4 列网格共用列宽，保证对齐 */}
        <div className="tree-connector reveal" aria-hidden="true">
          <span /><span /><span /><span />
        </div>

        <div className={`skill-branches ${selected !== null ? 'has-selection' : ''}`}>
          {SKILL_TREE.map((branch, bi) => {
            const isActive = selected === bi
            const isLit = highlighted === bi
            return (
              <div
                key={branch.branch}
                id={`branch-${bi}`}
                className={`skill-branch reveal ${isLit ? 'highlight' : ''} ${isActive ? 'active' : ''}`}
                style={{
                  '--branch-color': branch.color,
                  '--stagger': `${bi * 0.08}s`,
                }}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                aria-label={`${branch.branch}，共 ${branch.skills.length} 项技能，点击${isActive ? '收起' : '展开'}详情`}
                onClick={() => toggle(bi)}
                onKeyDown={(e) => onKeyDown(e, bi)}
                onMouseEnter={onEnter ? () => onEnter(bi) : undefined}
                onMouseLeave={onLeave}
              >
                <div className="branch-head">
                  <div className="branch-icon">
                    <PixelIcon name={branch.icon} size={22} color={branch.color} />
                  </div>
                  <h4>{branch.branch}</h4>
                  <span className="branch-count pixel-text">
                    {String(branch.skills.length).padStart(2, '0')}
                  </span>
                  <span className={`branch-state pixel-text ${isActive ? 'on' : ''}`}>
                    {isActive ? 'ON' : 'OFF'}
                  </span>
                </div>

                <div className="skill-nodes">
                  {branch.skills.map((skill, si) => (
                    <div
                      className="skill-node"
                      key={skill}
                      style={{ '--node-index': si }}
                    >
                      <span className="node-gem" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>

                <div className="branch-foot pixel-text">
                  {isActive ? '◆ EQUIPPED' : '▸ 点击装备'}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="skill-banner pixel-box reveal">
        <PixelIcon name="star" size={22} color="#ffd34e" />
        <p>
          从 <strong>Vue 为主</strong> 到 <strong>React 生态</strong>，组织 React / React Native / Taro
          培训，推动 8 人团队完成技术栈转型 —— 技能树不是一个人的加法，是一支队伍的升级。
        </p>
      </div>
    </section>
  )
}
