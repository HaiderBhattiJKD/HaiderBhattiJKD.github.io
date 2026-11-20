import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color:var(--green);
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }
// New added
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:5rem;
    padding-left:1rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
    }

    a:hover img{
      animation: gx-jump 0.5s ease-out;
    }
  }


  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  /* "press start" pulse ring around the main call to action */
  .press-start::after{
    content: "";
    position: absolute;
    inset: -0.4rem;
    border-radius: inherit;
    border: 0.2rem solid var(--green);
    animation: gx-ring 2s ease-out infinite;
    pointer-events: none;
  }

  @keyframes gx-ring{
    0%{ opacity: 0.8; transform: scale(1); }
    70%, 100%{ opacity: 0; transform: scale(1.18, 1.5); }
  }

  .hero-image{
    img{
      max-width: 500px;
      animation: gx-float 4s ease-in-out infinite;
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
  @media(max-width: 480px){
    margin-top: 45%;
  }
`