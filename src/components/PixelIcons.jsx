import React from 'react'

// 所有图标基于 16x16 像素网格，shapeRendering=crispEdges 保证像素锐利
const Svg = ({ children, size = 24, color = 'currentColor', ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    shapeRendering="crispEdges"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    {children}
  </svg>
)

const ICONS = {
  robot: (
    <>
      <rect x="3" y="2" width="10" height="9" />
      <rect x="6" y="0" width="4" height="2" />
      <rect x="7" y="1" width="2" height="1" fill="#1a1c2c" />
      <rect x="5" y="5" width="2" height="2" fill="#1a1c2c" />
      <rect x="9" y="5" width="2" height="2" fill="#1a1c2c" />
      <rect x="6" y="8" width="4" height="1" fill="#1a1c2c" />
      <rect x="6" y="11" width="4" height="2" />
      <rect x="1" y="5" width="2" height="4" />
      <rect x="13" y="5" width="2" height="4" />
    </>
  ),
  tower: (
    <>
      <rect x="3" y="5" width="10" height="10" />
      <rect x="2" y="3" width="3" height="3" />
      <rect x="7" y="1" width="2" height="4" />
      <rect x="11" y="3" width="3" height="3" />
      <rect x="6" y="9" width="4" height="6" fill="#1a1c2c" />
      <rect x="4" y="7" width="2" height="2" fill="#1a1c2c" />
      <rect x="10" y="7" width="2" height="2" fill="#1a1c2c" />
    </>
  ),
  layers: (
    <>
      <rect x="2" y="2" width="12" height="3" />
      <rect x="2" y="6" width="12" height="3" opacity="0.75" />
      <rect x="2" y="10" width="12" height="3" opacity="0.5" />
    </>
  ),
  gear: (
    <>
      <rect x="6" y="1" width="4" height="14" />
      <rect x="1" y="6" width="14" height="4" />
      <rect x="6" y="6" width="4" height="4" fill="#1a1c2c" />
    </>
  ),
  sword: (
    <>
      <rect x="7" y="0" width="2" height="9" />
      <rect x="5" y="9" width="6" height="2" />
      <rect x="7" y="11" width="2" height="4" />
    </>
  ),
  shield: (
    <>
      <rect x="3" y="2" width="10" height="3" />
      <rect x="3" y="5" width="10" height="5" />
      <rect x="5" y="10" width="6" height="2" />
      <rect x="7" y="12" width="2" height="2" />
      <rect x="7" y="5" width="2" height="5" fill="#1a1c2c" />
    </>
  ),
  eye: (
    <>
      <rect x="1" y="6" width="4" height="4" />
      <rect x="5" y="4" width="6" height="8" />
      <rect x="11" y="6" width="4" height="4" />
      <rect x="7" y="6" width="2" height="4" fill="#1a1c2c" />
    </>
  ),
  desktop: (
    <>
      <rect x="1" y="2" width="14" height="10" />
      <rect x="2" y="3" width="12" height="8" fill="#1a1c2c" />
      <rect x="3" y="4" width="10" height="6" opacity="0.5" />
      <rect x="6" y="12" width="4" height="2" />
      <rect x="3" y="14" width="10" height="2" />
    </>
  ),
  puzzle: (
    <>
      <rect x="2" y="2" width="5" height="5" />
      <rect x="9" y="2" width="5" height="5" />
      <rect x="2" y="9" width="5" height="5" />
      <rect x="9" y="9" width="3" height="3" />
      <rect x="8" y="7" width="3" height="2" />
    </>
  ),
  grid: (
    <>
      <rect x="1" y="1" width="6" height="6" />
      <rect x="9" y="1" width="6" height="6" />
      <rect x="1" y="9" width="6" height="6" />
      <rect x="9" y="9" width="6" height="6" />
    </>
  ),
  github: (
    <>
      <rect x="4" y="1" width="8" height="2" />
      <rect x="2" y="3" width="12" height="6" />
      <rect x="1" y="5" width="2" height="5" />
      <rect x="13" y="5" width="2" height="5" />
      <rect x="3" y="9" width="10" height="4" />
      <rect x="5" y="6" width="2" height="2" fill="#1a1c2c" />
      <rect x="9" y="6" width="2" height="2" fill="#1a1c2c" />
    </>
  ),
  mail: (
    <>
      <rect x="1" y="3" width="14" height="10" />
      <rect x="2" y="4" width="12" height="2" fill="#1a1c2c" />
      <rect x="3" y="6" width="2" height="2" fill="#1a1c2c" />
      <rect x="11" y="6" width="2" height="2" fill="#1a1c2c" />
      <rect x="6" y="8" width="4" height="3" fill="#1a1c2c" />
    </>
  ),
  link: (
    <>
      <rect x="1" y="6" width="5" height="3" />
      <rect x="2" y="4" width="3" height="2" />
      <rect x="10" y="6" width="5" height="3" />
      <rect x="11" y="10" width="3" height="2" />
      <rect x="6" y="7" width="4" height="2" />
    </>
  ),
  phone: (
    <>
      <rect x="4" y="1" width="8" height="14" />
      <rect x="5" y="2" width="6" height="10" fill="#1a1c2c" />
      <rect x="7" y="13" width="2" height="1" />
    </>
  ),
  castle: (
    <>
      <rect x="2" y="5" width="3" height="9" />
      <rect x="11" y="5" width="3" height="9" />
      <rect x="5" y="3" width="6" height="11" />
      <rect x="1" y="3" width="3" height="2" />
      <rect x="12" y="3" width="3" height="2" />
      <rect x="7" y="9" width="2" height="5" fill="#1a1c2c" />
    </>
  ),
  village: (
    <>
      <rect x="1" y="7" width="6" height="7" />
      <rect x="0" y="5" width="8" height="2" />
      <rect x="9" y="8" width="6" height="6" />
      <rect x="8" y="6" width="8" height="2" />
      <rect x="3" y="10" width="2" height="4" fill="#1a1c2c" />
      <rect x="11" y="10" width="2" height="4" fill="#1a1c2c" />
    </>
  ),
  cave: (
    <>
      <rect x="1" y="6" width="14" height="8" />
      <rect x="4" y="8" width="8" height="6" fill="#1a1c2c" />
      <rect x="2" y="5" width="3" height="2" />
      <rect x="11" y="5" width="3" height="2" />
    </>
  ),
  star: (
    <>
      <rect x="7" y="1" width="2" height="4" />
      <rect x="7" y="11" width="2" height="4" />
      <rect x="1" y="7" width="4" height="2" />
      <rect x="11" y="7" width="4" height="2" />
      <rect x="5" y="5" width="6" height="6" />
    </>
  ),
  chest: (
    <>
      <rect x="1" y="6" width="14" height="8" />
      <rect x="1" y="4" width="14" height="3" />
      <rect x="7" y="7" width="2" height="4" fill="#1a1c2c" />
      <rect x="2" y="10" width="12" height="1" fill="#1a1c2c" />
    </>
  ),
  heart: (
    <>
      <rect x="2" y="3" width="4" height="2" />
      <rect x="10" y="3" width="4" height="2" />
      <rect x="1" y="5" width="14" height="3" />
      <rect x="3" y="8" width="10" height="2" />
      <rect x="5" y="10" width="6" height="2" />
      <rect x="7" y="12" width="2" height="2" />
    </>
  ),
}

export default function PixelIcon({ name, size = 24, color, ...rest }) {
  const glyph = ICONS[name] || ICONS.star
  return <Svg size={size} color={color || 'currentColor'} {...rest}>{glyph}</Svg>
}
