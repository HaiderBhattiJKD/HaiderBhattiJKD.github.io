import { Container } from "./styles";
import playStoreIcon from "../../assets/PlayStoreIcon.svg"
import ScrollAnimation from "react-animate-on-scroll";
import rider3dIcon from "../../assets/Rider3D.png"
import bikeStuntIcon from "../../assets/BikeStunt.png"
import urbanBusIcon from "../../assets/UBS.png"
import springLancerIcon from "../../assets/Lancer.png"
import bikeRacingMasterIcon from "../../assets/BRM.png"
import formulaRacingIcon from "../../assets/F1Racing.png"
import animalBikeStuntIcon from "../../assets/AnimalBikeStunt.png"

const projects = [
  {
    title: "Rider 3D",
    icon: rider3dIcon,
    link: "https://play.google.com/store/apps/details?id=com.ffgames.motoercycle.traffic.racer.bikegames.rider.motobikeracing3d&hl=en",
    description: "Highway Bike Racing - Experience the rush as you weave through traffic, hit insane speeds with NOS, and push your limits to dominate the highway in this adrenaline-packed 3D bike racing game!",
    tech: ["Unity 3D", "C#"],
  },
  {
    title: "Bike Stunt Legends",
    icon: bikeStuntIcon,
    link: "https://play.google.com/store/apps/details?id=com.kn.bikestunt3.racing.driving.games&hl=en",
    description: "Extreme Stunt Rider - Master daring stunts, soar through the air, and conquer extreme tracks as you push your skills to the limit in this action-packed 3D bike stunt game!",
    tech: ["Unity 3D", "C#"],
  },
  {
    title: "Urban Bus Simulator",
    icon: urbanBusIcon,
    link: "https://play.google.com/store/apps/details?id=com.ffg.offline.games.driving.city.bus.simulator.busgames&hl=en",
    description: "Urban Bus Simulator - Navigate busy city streets, manage realistic traffic, and keep passengers on schedule as you experience the life of a pro bus driver in this immersive urban simulation!",
    tech: ["Unity 3D", "C#"],
  },
  {
    title: "Lancer Strike",
    icon: springLancerIcon,
    link: "https://play.google.com/store/apps/details?id=com.tf.springbolt.smash&hl=en",
    description: "Lancer Strike - Aim, throw, and smash your way through enemies in this fast-paced spear-flinging action game! Master precision shots, break obstacles, and conquer challenging levels as you rise to become the ultimate lancer warrior.",
    tech: ["Unity 3D", "C#"],
  },
  {
    title: "Bike Racing Master",
    icon: bikeRacingMasterIcon,
    link: "https://play.google.com/store/apps/details?id=com.tf.ride.master.bike.race.game&hl=en",
    description: "Bike Racing Master - Hit the throttle, soar off ramps, dodge wild obstacles and race your way to victory! Unlock high-performance bikes, master challenging tracks and feel the rush of speed in this addictive stunt-racing adventure.",
    tech: ["Unity 3D", "C#"],
  },
  {
    title: "Formula Car Racing Pro",
    icon: formulaRacingIcon,
    link: "https://play.google.com/store/apps/details?id=com.tf.formularacing.pro.drivinggame&hl=en",
    description: "Formula Racing Pro - Strap in, hit the throttle, and dominate the asphalt in this adrenaline-charged open–wheel racing adventure! Pilot ultra-fast formula machines, navigate sharp corners at break-neck speed, and race past rivals to become the ultimate champion on the world’s deadliest circuits.",
    tech: ["Unity 3D", "C#"],
  },
  {
    title: "Animal Bike Stunt",
    icon: animalBikeStuntIcon,
    link: "https://play.google.com/store/apps/details?id=com.frolics.bike.stunt.racinggames&hl=en",
    description: "Animal Bike Stunt Racing - Take on wild stunt tracks as you ride powerful animal-themed bikes! Perform crazy flips, soar over extreme ramps, and conquer challenging obstacle courses in this adrenaline-packed bike stunt adventure. Master each animal bike and prove yourself as the ultimate stunt rider!",
    tech: ["Unity 3D", "C#"],
  },
]

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <ScrollAnimation animateIn="flipInX" key={project.title}>
            <div className="project">
              <header>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img src={playStoreIcon} alt={`${project.title} on Google Play`} />
                  </a>
                </div>
              </header>
              <div className="body" style={{ textAlign: "center" }}>
                <img src={project.icon} alt={`${project.title} icon`} style={{ height: '100px' }} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
