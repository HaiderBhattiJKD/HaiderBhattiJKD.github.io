import { useEffect } from "react"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import { NavHashLink } from "react-router-hash-link"
import { GameScreen } from '../../fx/GameScreen'
import { projects } from '../../data/projects'
import { experience } from '../../data/experience'
import { yearsSince } from '../../data/dates'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import { RevealText } from '../../fx/RevealText'
import { Typewriter } from '../../fx/Typewriter'

export function Hero() {
  // The scroll-animation library only checks positions on mount and on scroll. If the
  // first check runs before layout settles, the hero would stay invisible until the
  // visitor scrolls, so nudge it again shortly after load.
  useEffect(() => {
    const recheck = () => window.dispatchEvent(new Event('scroll'))
    const timer = window.setTimeout(recheck, 300)
    window.addEventListener('load', recheck)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('load', recheck)
    }
  }, [])

  // game-style stat chips; the numbers come from the games list and the experience timeline
  const stats = [
    { value: String(projects.length), label: 'Games shipped' },
    { value: `${yearsSince(experience.map((job) => job.start))}+`, label: 'Years XP' },
    { value: 'Unity · C#', label: 'Main stack' },
  ]

  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation offset={0} animateIn="gx-glitch-in" duration={0.6}>
          <p>Hello <img src={Hello} alt="Waving hand" width={20} />, I'm</p>
        </ScrollAnimation>
        <h1>
          <RevealText text="Haider Ali Bhatti" delay={150} stagger={45} />
        </h1>
        <h3>
          <Typewriter text="Game Developer" after="👨🏻‍💻 🎮" delay={1000} />
        </h3>
        <ul className="stats">
          {stats.map((stat, i) => (
            <li key={stat.label}>
              <ScrollAnimation offset={0} animateIn="gx-pop" delay={(1.1 + i * 0.12) * 1000} duration={0.6}>
                <span className="value">{stat.value}</span>
                <span className="label">{stat.label}</span>
              </ScrollAnimation>
            </li>
          ))}
        </ul>
        <ScrollAnimation offset={0} animateIn="gx-pop" delay={1.5 * 1000} duration={0.7}>
          <div className="actions">
            <NavHashLink smooth to="#project" className="button press-start">▶ Play my games</NavHashLink>
            <NavHashLink smooth to="#contact" className="button secondary">Contact</NavHashLink>
          </div>
        </ScrollAnimation>
        <ScrollAnimation offset={0} animateIn="gx-pop" delay={1.6 * 1000} duration={0.7}>
      <div className="social-media"><a
        href="https://www.linkedin.com/in/haider-bhatti-38680819b/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="LinkedIn" />
      </a>
        <a
          href="https://github.com/HaiderBhattiJKD"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B923320077253&text=Hello+Haider"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="WhatsApp" />
        </a></div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation offset={0} animateIn="gx-pop" delay={0.6 * 1000} duration={0.8}>
          <GameScreen />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
