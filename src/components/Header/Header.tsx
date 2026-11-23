import { Container } from './styles'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useEffect, useState } from 'react'
import Resume from '../../assets/Resume.pdf'
import { XpBar } from '../../fx/XpBar'

const THEME_KEY = 'theme'

function getSavedTheme(): boolean {
  try {
    return localStorage.getItem(THEME_KEY) === 'light'
  } catch {
    return false
  }
}

export function Header() {
  const [isActive, setActive] = useState(false)
  const [isLight, setLight] = useState(getSavedTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('light', isLight)
    try {
      localStorage.setItem(THEME_KEY, isLight ? 'light' : 'dark')
    } catch {
      // Storage can be blocked (e.g. private mode); the theme still works for this visit.
    }
  }, [isLight])

  function closeMenu() {
    setActive(false)
  }
  return (
    <Container className="header-fixed">
      <HashLink smooth to="#home" className="logo">
        <span>{"<Haider "}</span>
        <span>{" Bhatti/>"}</span>
      </HashLink>
      <input
        onChange={(e) => setLight(e.target.checked)}
        checked={isLight}
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
      />
      <label htmlFor="switch">Light mode</label>
      <nav id="main-nav" className={isActive ? 'active' : ''}>
        <NavHashLink smooth to="#home" onClick={closeMenu}>
          Home
        </NavHashLink>
        <NavHashLink smooth to="#about" onClick={closeMenu}>
          About me
        </NavHashLink>
        <NavHashLink smooth to="#experience" onClick={closeMenu}>
          Experience
        </NavHashLink>
        <NavHashLink smooth to="#project" onClick={closeMenu}>
          Games
        </NavHashLink>
        <NavHashLink smooth to="#contact" onClick={closeMenu}>
          Contact
        </NavHashLink>
        <a href={Resume} download="Haider_Bhatti_Resume.pdf" className="button">
          Resume
        </a>
      </nav>
      <button
        type="button"
        aria-expanded={isActive}
        aria-controls="main-nav"
        aria-label={isActive ? 'Close menu' : 'Open menu'}
        className={isActive ? 'menu active' : 'menu'}
        onClick={() => {
          setActive(!isActive)
        }}
      ></button>
      <XpBar />
    </Container>
  )
}
