import { Container } from "./styles";
import HaiderAliBhatti from "../../assets/HaiderAliBhatti.png";
import ScrollAnimation from "react-animate-on-scroll";
import unityIcon from "../../assets/Unity.png";
import cSharpIcon from "../../assets/C#.png";
import unrealIcon from "../../assets/Unreal.png";
import cPlusPlusIcon from "../../assets/C++.png";
import { RevealText } from "../../fx/RevealText";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <h2>
          <RevealText text="About me" underline />
        </h2>
        <ScrollAnimation animateIn="gx-glitch-in" duration={0.6} delay={0.1 * 1000}>
          <p>
          I'm a passionate Game Developer with 5+ years of experience working in Unity using C#. I have a strong foundation in creating immersive Gameplay Mechanics, Optimized Performance, and Visually Captivating Experiences.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="gx-glitch-in" duration={0.6} delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          Additionally, I have basic knowledge of Unreal Engine and C++, allowing me to explore a wider range of game development tools and techniques.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="gx-glitch-in" duration={0.6} delay={0.3 * 1000}>
          <p>
          I thrive in turning ideas into engaging, high-quality games, and I continuously aim to push the boundaries of interactive entertainment.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="gx-glitch-in" duration={0.6} delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="ability">
            <ScrollAnimation animateIn="gx-coin" duration={1.1} delay={0.1 * 1000}>
              <img src={unityIcon} alt="Unity" />
            </ScrollAnimation>
          </div>
          <div className="ability">
            <ScrollAnimation animateIn="gx-coin" duration={1.1} delay={0.3 * 1000}>
              <img src={cSharpIcon} alt="C#" />
            </ScrollAnimation>
          </div>
          <div className="ability">
            <ScrollAnimation animateIn="gx-coin" duration={1.1} delay={0.5 * 1000}>
              <img src={unrealIcon} alt="Unreal Engine" />
            </ScrollAnimation>
          </div>
          <div className="ability">
            <ScrollAnimation animateIn="gx-coin" duration={1.1} delay={0.7 * 1000}>
              <img src={cPlusPlusIcon} alt="C++" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="gx-pop" duration={0.8} delay={0.20 * 1000}>
          <img src={HaiderAliBhatti} alt="Haider Ali Bhatti" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
