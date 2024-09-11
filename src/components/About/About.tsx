import { Container } from "./styles";
import HaiderAliBhatti from "../../assets/HaiderAliBhatti.png";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import unityIcon from "../../assets/Unity.png";
import cSharpIcon from "../../assets/C#.png";
import unrealIcon from "../../assets/Unreal.png";
import cPlusPlusIcon from "../../assets/C++.png";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Im a passionate Game Developer with 3+ years of experience working in Unity using C#. I have a strong foundation in creating immersive Gameplay Mechanics, Optimized Performance, and Visually Captivating Experiences.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          Additionally, I have basic knowledge of Unreal Engine and C++, allowing me to explore a wider range of game development tools and techniques.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          I thrive in turning ideas into engaging, high-quality games, and I continuously aim to push the boundaries of interactive entertainment.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={unityIcon} alt="Unity" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={cSharpIcon} alt="C#" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={unrealIcon} alt="UnReal" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={cPlusPlusIcon} alt="C++" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={HaiderAliBhatti} alt="Haider Ali Bhatti" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
