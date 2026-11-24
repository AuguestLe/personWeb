import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// 全局样式（顺序：全局 → 各模块）
import './styles/global.css'
import './styles/start.css'
import './styles/nav.css'
import './styles/sections.css'
import './styles/journey.css'
import './styles/skills.css'
import './styles/projects.css'
import './styles/contact.css'
import './styles/game.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
