import { Container } from "./styles";
import playStoreIcon from "../../assets/PlayStoreIcon.svg"
// import DownloadApp from '../../assets/download.png'
import ScrollAnimation from "react-animate-on-scroll";
import rider3dIcon from "../../assets/Rider3D.png"
import bikeStuntIcon from "../../assets/BikeStunt.png"
import urbanBusIcon from "../../assets/UBS.png"
import springLancerIcon from "../../assets/Lancer.png"
import bikeRacingMasterIcon from "../../assets/BRM.png"
import formulaRacingIcon from "../../assets/F1Racing.png"
import animalBikeStuntIcon from "../../assets/AnimalBikeStunt.png"

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project"> 
            <header>
              <div className="project-links" >
                <a href="https://play.google.com/store/apps/details?id=com.ffgames.motoercycle.traffic.racer.bikegames.rider.motobikeracing3d&hl=en" target="_blank" rel="noreferrer">
                  <img src={playStoreIcon} alt="Visit site" /></a>
                 </div>
            </header>
            <div className="body" style={{ textAlign: "center" }}>
            <img src={rider3dIcon} style={{ alignItems:"center", height: '100px' }} />
              <h3>
                Rider 3D
              </h3>
              <p> Highway Bike Racing - Experience the rush as you weave through traffic, hit insane speeds with NOS, and push your limits to dominate the highway in this adrenaline-packed 3D bike racing game! </p>
            </div>
            <footer> <ul className="tech-list"> <li>Unity 3D</li> <li>C#</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project" >
            <header>
              
              <div className="project-links">
                <a href="https://play.google.com/store/apps/details?id=com.kn.bikestunt3.racing.driving.games&hl=en" target="_blank" rel="noreferrer">
                  <img src={playStoreIcon} alt="Visit site" /> </a>
                
              </div>
            </header>
            <div className="body"style={{ textAlign: "center" }}>
            <img src={bikeStuntIcon} style={{ alignItems:"center", height: '100px' }} />
              <h3>Bike Stunt Legends</h3>
              <p> Extreme Stunt Rider - Master daring stunts, soar through the air, and conquer extreme tracks as you push your skills to the limit in this action-packed 3D bike stunt game! </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Unity 3D</li>
                <li>C#</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project" >
            <header>
              
              <div className="project-links">
                <a href="https://play.google.com/store/apps/details?id=com.ffg.offline.games.driving.city.bus.simulator.busgames&hl=en" target="\_blank" rel="noreferrer">
                  <img src={playStoreIcon} alt="Visit site" />
                </a>
                
              </div>
            </header>
            <div className="body"style={{ textAlign: "center" }}>
            <img src={urbanBusIcon} style={{ alignItems:"center", height: '100px' }} />
              <h3>Urban Bus Simulator</h3>
              <p>
              Urban Bus Simulator - Navigate busy city streets, manage realistic traffic, and keep passengers on schedule as you experience the life of a pro bus driver in this immersive urban simulation!
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Unity 3D</li>
                <li>C#</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project" >
            <header>
              
              <div className="project-links">
                <a href="https://play.google.com/store/apps/details?id=com.tf.springbolt.smash&hl=en" target="_blank" rel="noreferrer">
                  <img src={playStoreIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body"style={{ textAlign: "center" }}>
            <img src={springLancerIcon} style={{ alignItems:"center", height: '100px' }} />
              <h3>Lancer Strike</h3>
              <p> Lancer Strike - Aim, throw, and smash your way through enemies in this fast-paced spear-flinging action game! Master precision shots, break obstacles, and conquer challenging levels as you rise to become the ultimate lancer warrior. </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Unity 3D</li>
                <li>C#</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project" >
            <header>
              
              <div className="project-links">
                <a href="https://play.google.com/store/apps/details?id=com.tf.ride.master.bike.race.game&hl=en" target="_blank" rel="noreferrer">
                  <img src={playStoreIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body"style={{ textAlign: "center" }}>
            <img src={bikeRacingMasterIcon} style={{ alignItems:"center", height: '100px' }} />
              <h3>Bike Racing Master</h3>
              <p> Bike Racing Master - Hit the throttle, soar off ramps, dodge wild obstacles and race your way to victory! Unlock high-performance bikes, master challenging tracks and feel the rush of speed in this addictive stunt-racing adventure. </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Unity 3D</li>
                <li>C#</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project" >
            <header>
              
              <div className="project-links">
                <a href="https://play.google.com/store/apps/details?id=com.tf.formularacing.pro.drivinggame&hl=en" target="_blank" rel="noreferrer">
                  <img src={playStoreIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body"style={{ textAlign: "center" }}>
            <img src={formulaRacingIcon} style={{ alignItems:"center", height: '100px' }} />
              <h3>Formula Car Racing Pro</h3>
              <p> Formula Racing Pro - Strap in, hit the throttle, and dominate the asphalt in this adrenaline-charged open–wheel racing adventure! Pilot ultra-fast formula machines, navigate sharp corners at break-neck speed, and race past rivals to become the ultimate champion on the world’s deadliest circuits. </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Unity 3D</li>
                <li>C#</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>  
        
        <ScrollAnimation animateIn="flipInX">
          <div className="project" >
            <header>
              
              <div className="project-links">
                <a href="https://play.google.com/store/apps/details?id=com.frolics.bike.stunt.racinggames&hl=en" target="_blank" rel="noreferrer">
                  <img src={playStoreIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body"style={{ textAlign: "center" }}>
            <img src={animalBikeStuntIcon} style={{ alignItems:"center", height: '100px' }} />
              <h3>Animal Bike Stunt</h3>
              <p> Animal Bike Stunt Racing - Take on wild stunt tracks as you ride powerful animal-themed bikes! Perform crazy flips, soar over extreme ramps, and conquer challenging obstacle courses in this adrenaline-packed bike stunt adventure. Master each animal bike and prove yourself as the ultimate stunt rider! </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Unity 3D</li>
                <li>C#</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>  

      </div>
    </Container>
  );
}