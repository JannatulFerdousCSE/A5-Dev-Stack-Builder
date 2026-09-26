import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="hamburger" aria-label="Open menu" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </button>

        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark">DS</span>
          <span>Dev Stack</span>
        </a>

        <nav className={open ? 'main-nav open' : 'main-nav'}>
          <a href="#top" onClick={closeMenu}>Home</a>
          <a href="#technologies" onClick={closeMenu}>Technologies</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="header-actions">
          <button className="signin">Sign In</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </header>
  )
}
