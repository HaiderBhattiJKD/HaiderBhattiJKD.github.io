import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'
import discordIcon from '../../assets/Discord.png'

function GetYear(){
  const date = new Date();
  const year = date.getFullYear();
  return(
    <>
      {year}
    </>
  )
}

export function Footer() {
  return (
    <Container className="footer">
      
      <div>
        <p>
        © Haider Ali Bhatti | Crafting immersive experiences with Unity & C# | {GetYear()}
          
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/haider-bhatti-38680819b/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
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
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        
        <a
          href="https://www.instagram.com/haider_bhatti_jkd/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
