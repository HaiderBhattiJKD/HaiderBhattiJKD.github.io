import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .projects{
    display: grid;
    /* as many 30rem+ columns as fit; one column on phones */
    grid-template-columns: repeat(auto-fill, minmax(min(30rem, 100%), 1fr));
    gap: 2.4rem;
    padding: 1rem;
    overflow: hidden;

    .project{
      position: relative;
      background-color: #2b2b2b;
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 1.2rem;
      overflow: hidden;
      /* --rx/--ry are set by the mouse (useTilt) */
      transform: perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) translateY(var(--lift, 0));
      transition: transform 0.2s ease-out, border-color 0.25s, box-shadow 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;

      /* light glare that follows the mouse */
      &::after{
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        pointer-events: none;
        background: radial-gradient(circle at var(--gx, 50%) var(--gy, 50%), rgba(255, 255, 255, 0.16), transparent 55%);
        opacity: 0;
        transition: opacity 0.3s;
      }

      &:hover{
        --lift: -0.6rem;
        border-color: var(--green);
        box-shadow: 0 1.6rem 3rem rgba(0, 0, 0, 0.35), 0 0 2.4rem rgba(35, 206, 107, 0.2);

        &::after{
          opacity: 1;
        }

        .media.placeholder img{
          animation: gx-jump 0.6s ease-out;
        }
      }
    }

    /* 16:9 gameplay area */
    .media{
      position: relative;
      aspect-ratio: 16 / 9;
      background-color: #000;
      overflow: hidden;

      video{
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .media-icon{
        position: absolute;
        left: 1.2rem;
        bottom: 1.2rem;
        width: 4.8rem;
        height: 4.8rem;
        border-radius: 1rem;
        box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.5);
      }

      /* no clip yet: icon over a blurred copy of itself */
      &.placeholder{
        display: flex;
        align-items: center;
        justify-content: center;

        &::before{
          content: "";
          position: absolute;
          inset: -2rem;
          background: var(--cover) center / cover no-repeat;
          filter: blur(2rem) brightness(0.55);
        }

        img{
          position: relative;
          width: 10rem;
          height: 10rem;
          border-radius: 2rem;
          box-shadow: 0 0.8rem 2.4rem rgba(0, 0, 0, 0.5);
        }
      }
    }

    .body{
      padding: 2rem 2rem 0;

      h3{
        font-size: 2.4rem;
        margin-bottom: 1.2rem;
      }

      h4{
        font-size: 1.4rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        color: var(--green);
        margin: 1.6rem 0 0.8rem;
      }

      p{
        font-size: 1.5rem;
        line-height: 1.5;
        opacity: 0.8;
        margin-bottom: 2rem;
      }
    }

    .stats{
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;

      li{
        font-size: 1.3rem;
        font-weight: 500;
        padding: 0.4rem 1rem;
        border-radius: 2rem;
        background-color: rgba(35, 206, 107, 0.15);
        color: var(--green);
      }
    }

    .highlights{
      margin-bottom: 2rem;

      li{
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
    }

    footer{
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1.4rem 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.08);

      .tech-list{
        display: flex;
        flex-wrap: wrap;
        gap: 1.2rem;
        font-size: 1.4rem;
        opacity: 0.6;
      }

      .store-link{
        display: flex;
        transition: transform 0.2s;

        &:hover{
          transform: scale(1.1);
        }

        img{
          width: 3.2rem;
          height: 3.2rem;
        }
      }
    }
  }
`
