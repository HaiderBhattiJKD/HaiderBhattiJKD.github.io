import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 4rem;
  }

  /* vertical line with a dot for each job */
  .timeline{
    position: relative;
    max-width: 80rem;
    margin: 0 auto;
    padding-left: 4rem;

    /* empty track */
    &::before{
      content: "";
      position: absolute;
      left: 0.9rem;
      top: 0.6rem;
      bottom: 0.6rem;
      width: 0.2rem;
      background-color: rgba(128, 128, 128, 0.25);
    }

    /* glowing fill that grows as you scroll (--fill is 0 to 1) */
    &::after{
      content: "";
      position: absolute;
      left: 0.9rem;
      top: 0.6rem;
      bottom: 0.6rem;
      width: 0.2rem;
      background: linear-gradient(var(--green), #7dffb0);
      box-shadow: 0 0 0.8rem rgba(35, 206, 107, 0.8);
      transform: scaleY(var(--fill, 0));
      transform-origin: top;
    }
  }

  .entry{
    position: relative;
    padding-bottom: 3rem;

    &:last-child{
      padding-bottom: 0;
    }

    /* the dot: grey and locked until it scrolls into view */
    &::before{
      content: "";
      position: absolute;
      left: -4rem;
      top: 2.4rem;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: var(--black);
      border: 0.3rem solid rgba(128, 128, 128, 0.6);
      box-sizing: border-box;
      z-index: 1;
      transition: border-color 0.3s, background-color 0.3s;
    }

    /* ring that bursts outward when the dot unlocks */
    &::after{
      content: "";
      position: absolute;
      left: -4rem;
      top: 2.4rem;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      border: 0.2rem solid var(--green);
      box-sizing: border-box;
      opacity: 0;
      z-index: 1;
      pointer-events: none;
    }

    &.unlocked::before{
      border-color: var(--green);
      animation: gx-dot-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    &.unlocked::after{
      animation: gx-burst 0.7s ease-out;
    }

    &.current.unlocked::before{
      background-color: var(--green);
      animation: gx-dot-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), gx-dot-pulse 2s 0.5s ease-out infinite;
    }

    &.education.unlocked::before{
      border-color: var(--blue);
    }

    &.education::after{
      border-color: var(--blue);
    }

    &.education .period{
      background-color: rgba(1, 111, 185, 0.25);
      color: #5fb4f0;
    }
  }

  @keyframes gx-dot-pop{
    0%{ transform: scale(1); }
    50%{ transform: scale(1.5); }
    100%{ transform: scale(1); }
  }

  @keyframes gx-burst{
    0%{ opacity: 1; transform: scale(1); }
    100%{ opacity: 0; transform: scale(3); }
  }

  @keyframes gx-dot-pulse{
    0%{ box-shadow: 0 0 0 0 rgba(35, 206, 107, 0.6); }
    100%{ box-shadow: 0 0 0 1.2rem rgba(35, 206, 107, 0); }
  }

  .card{
    position: relative;
    background-color: #2b2b2b;
    color: #FFF;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 1.2rem;
    padding: 2.4rem;
    /* --rx/--ry are set by the mouse (useTilt) */
    transform: perspective(1200px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
    transition: transform 0.2s ease-out, border-color 0.25s, box-shadow 0.25s;

    &::after{
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      background: radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(255, 255, 255, 0.1), transparent 55%);
      opacity: 0;
      transition: opacity 0.3s;
    }

    &:hover{
      border-color: var(--green);
      box-shadow: 0 1.2rem 3rem rgba(0, 0, 0, 0.3), 0 0 2rem rgba(35, 206, 107, 0.15);

      &::after{
        opacity: 1;
      }
    }

    .period{
      display: inline-block;
      font-size: 1.3rem;
      font-weight: 500;
      padding: 0.4rem 1rem;
      border-radius: 2rem;
      background-color: rgba(35, 206, 107, 0.15);
      color: var(--green);
      margin-bottom: 1rem;
    }

    h3{
      font-size: 2.4rem;
    }

    .company{
      font-size: 1.6rem;
      font-weight: 500;
      opacity: 0.85;
      margin-top: 0.4rem;

      a{
        color: inherit;
        border-bottom: 1px solid var(--green);
        &:hover{
          color: var(--green);
        }
      }

      .location{
        font-weight: 400;
        opacity: 0.7;
      }
    }

    .length{
      opacity: 0.8;
    }
  }

  .highlights{
    margin-top: 1.6rem;
  }

  .highlights li{
    position: relative;
    padding-left: 2rem;
    font-size: 1.5rem;
    line-height: 1.5;
    margin-bottom: 0.6rem;

    &::before{
      content: "▸";
      position: absolute;
      left: 0;
      color: var(--green);
    }
  }

  .games{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.8rem;
    margin-top: 1.6rem;

    .label{
      font-size: 1.3rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      opacity: 0.6;
      margin-right: 0.4rem;
    }

    ul{
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
    }

    li{
      font-size: 1.3rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 2rem;
      padding: 0.3rem 1rem;

      a{
        color: inherit;
        &:hover{
          color: var(--green);
        }
      }
    }
  }

  .tech-list{
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    margin-top: 1.6rem;
    padding-top: 1.4rem;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 1.4rem;
    opacity: 0.6;
  }

  @media (max-width: 480px){
    .timeline{
      padding-left: 3rem;
      &::before, &::after{
        left: 0.6rem;
      }
    }

    .entry::before, .entry::after{
      left: -3rem;
      width: 1.6rem;
      height: 1.6rem;
    }

    .card{
      padding: 1.8rem;
    }
  }
`
