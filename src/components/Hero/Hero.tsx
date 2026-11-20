import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import { RevealText } from '../../fx/RevealText'
import { Typewriter } from '../../fx/Typewriter'

export function Hero() {
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
        <ScrollAnimation offset={0} animateIn="gx-glitch-in" delay={1.2 * 1000} duration={0.6}>
          <p className="small-resume">5+ Years of Experience</p>
        </ScrollAnimation>
        <ScrollAnimation offset={0} animateIn="gx-pop" delay={1.4 * 1000} duration={0.7}>
          <NavHashLink smooth to="#contact" className="button press-start">Contact</NavHashLink>
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
          <img src={Illustration} alt="Developer illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
