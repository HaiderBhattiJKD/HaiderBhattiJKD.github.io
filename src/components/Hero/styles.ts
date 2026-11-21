import styled from "styled-components";

export const Container = styled.section`
  /* text on the left, handheld console on the right */
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  align-items: center;
  gap: 6rem;
  padding-top: 16rem;
  padding-bottom: 4rem;

  .hero-text{
    p{
      font-size: 1.8rem;
    }

    h1{
      font-size: clamp(4.4rem, 5.2vw, 7.6rem);
      line-height: 1.05;
      margin: 0.6rem 0;
    }

    h3{
      color: var(--primary);
      text-shadow: var(--heading-glow);
      font-size: 2.2rem;
      margin: 1rem 0 2.4rem;
    }

    /* keep the typing cursor on the same line as the title */
    .gx-typewriter{
      white-space: nowrap;
    }
  }

  /* ----- stat chips, like a game HUD ----- */
  .stats{
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;

    li > div{
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      padding: 1rem 1.6rem;
      border-radius: 1rem;
      background-color: rgba(var(--bg-rgb), 0.55);
      border: 1px solid rgba(var(--primary-rgb), 0.35);
      box-shadow: inset 0 0 1.6rem rgba(var(--primary-rgb), 0.08);
    }

    .value{
      font-size: 2.2rem;
      font-weight: 700;
      color: var(--primary);
      text-shadow: var(--heading-glow);
      white-space: nowrap;
    }

    .label{
      font-size: 1.1rem;
      font-weight: 500;
      letter-spacing: 0.12rem;
      text-transform: uppercase;
      color: var(--text-dim);
    }
  }

  /* ----- "Shipped on" platform badges ----- */
  .platforms{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem 1.2rem;
    margin-top: 1.6rem;

    .platforms-label{
      font-family: 'Press Start 2P', monospace;
      font-size: 0.9rem;
      text-transform: uppercase;
      color: var(--text-dim);
    }

    ul{
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
    }

    li{
      font-size: 1.3rem;
      font-weight: 700;
      letter-spacing: 0.04rem;
      padding: 0.5rem 1.2rem;
      border-radius: 2rem;
      color: var(--secondary);
      background-color: rgba(var(--secondary-rgb), 0.1);
      border: 1px solid rgba(var(--secondary-rgb), 0.45);
      white-space: nowrap;
    }
  }

  /* ----- buttons ----- */
  .actions{
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    margin-top: 3.6rem;

    .button{
      padding: 1.4rem 3.2rem;
      font-size: 1.6rem;
    }

    /* outlined second button */
    .button.secondary{
      background-color: transparent;
      color: var(--primary);
      box-shadow: inset 0 0 0 0.2rem var(--primary), 0 0.5rem 0 rgba(var(--primary-rgb), 0.25);

      &:hover{
        background-color: rgba(var(--primary-rgb), 0.1);
        box-shadow: inset 0 0 0 0.2rem var(--primary), 0 0.7rem 0 rgba(var(--primary-rgb), 0.25), 0 0 2rem rgba(var(--primary-rgb), 0.3);
      }

      &:active{
        box-shadow: inset 0 0 0 0.2rem var(--primary), 0 0 0 rgba(var(--primary-rgb), 0.25);
      }
    }
  }

  /* "press start" pulse ring around the main call to action */
  .press-start::after{
    content: "";
    position: absolute;
    inset: -0.4rem;
    border-radius: inherit;
    border: 0.2rem solid var(--primary);
    animation: gx-ring 2s ease-out infinite;
    pointer-events: none;
  }

  @keyframes gx-ring{
    0%{ opacity: 0.8; transform: scale(1); }
    70%, 100%{ opacity: 0; transform: scale(1.12, 1.5); }
  }

  .social-media{
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    padding-top: 3.6rem;
    padding-left: 0.4rem;

    img{
      width: 3.5rem;
    }

    a:hover img{
      animation: gx-jump 0.5s ease-out;
    }
  }

  .hero-image{
    display: flex;
    justify-content: center;

    & > div{
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  /* not enough room side by side: console goes under the text */
  @media (max-width: 1100px){
    grid-template-columns: minmax(0, 1fr);
    gap: 6rem;
    padding-top: 14rem;
  }

  @media (max-width: 600px){
    padding-top: 12rem;

    /* three stat chips side by side */
    .stats{
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 0.8rem;

      li > div{
        padding: 0.9rem 1rem;
      }

      .value{
        font-size: 1.7rem;
      }

      .label{
        font-size: 0.95rem;
        letter-spacing: 0.06rem;
      }
    }

    .actions .button{
      flex: 1 1 auto;
      text-align: center;
    }
  }
`
