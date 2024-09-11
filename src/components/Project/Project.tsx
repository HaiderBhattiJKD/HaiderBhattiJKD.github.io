import { Container } from "./styles";
import playStoreIcon from "../../assets/PlayStoreIcon.svg"
// import DownloadApp from '../../assets/download.png'
import ScrollAnimation from "react-animate-on-scroll";
import rider3dIcon from "../../assets/Rider3D.png"
import bikeStuntIcon from "../../assets/BikeStunt.png"
import urbanBusIcon from "../../assets/UBS.png"
import cityGangsterIcon from "../../assets/CityGangster.png"

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project"> 
            <header>
              <div className="project-links" >
                <a href="https://github.com/CodeVinayak/Serverless-Voting-Application" target="_blank" rel="noreferrer">
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
                <a href="https://github.com/CodeVinayak/AI-Chatbot-Assistant" target="_blank" rel="noreferrer">
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
                <a href="https://github.com/CodeVinayak/Jupyter-Notebook/tree/main/Credit%20Risk%20Analysis" target="\_blank" rel="noreferrer">
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
                <a href="https://github.com/CodeVinayak/MediBook-Medical-Appointment-Scheduler-with-Health-History" target="_blank" rel="noreferrer">
                  <img src={playStoreIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body"style={{ textAlign: "center" }}>
            <img src={cityGangsterIcon} style={{ alignItems:"center", height: '100px' }} />
              <h3>City Gangster</h3>
              <p> City Gangster - Dominate the urban jungle, complete high-stakes heists, and outsmart rival gangs as you carve your path to power in this thrilling open-world crime adventure! </p>
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