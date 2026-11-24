import React, { useState } from 'react'
import StartScreen from './components/StartScreen'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import EasterEgg from './components/EasterEgg'

export default function App() {
  const [entered, setEntered] = useState(false)

  return (
    <>
      {!entered && <StartScreen onStart={() => setEntered(true)} />}
      {entered && (
        <>
          <NavBar />
          <main>
            <Hero />
            <About />
            <Journey />
            <Skills />
            <Projects />
            <Contact />
            <EasterEgg />
          </main>
          <footer className="site-footer">
            <div className="footer-logo pixel-text">◆ CODE KNIGHT ◆</div>
            <div className="footer-text">
              王乐 · AI 应用前端 / 全栈开发工程师<br />
              「Coding the Future, One Pixel at a Time.」
            </div>
            <div className="footer-pixel" aria-hidden="true">
              <span /><span /><span /><span />
            </div>
            <div>
              <button className="footer-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                ▲ BACK TO TOP
              </button>
            </div>
            <div className="footer-text" style={{ marginTop: 20, fontSize: 10, opacity: 0.6 }}>
              © 2026 WANG LE · Built with React + Vite · Pixel World
            </div>
          </footer>
        </>
      )}
    </>
  )
}
