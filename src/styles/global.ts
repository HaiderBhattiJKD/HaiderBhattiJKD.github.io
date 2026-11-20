import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --pink: #E31F71;
    --black: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
    scroll-padding-top: 10rem;

    &.light{

      body{
        transition: 0.5s;
        background-color: #f5f5f5;
        color: var(--black);
      }

      .logo{
        color: var(--black);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: #f5f5f550;
        a{
          transition: 0.5s;
          color: black;
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--black); 
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(0,0,0,0.1);
        color: var(--black);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--black);
          &::placeholder{
            transition: 0.5s;
            color: var(--black);
          }
        }
      }

    }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--black);
    color: #FFFF;
  }

  body, input, textarea, button{
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 3rem;
    color: #FFFF;
    // &::first-letter{
    //   color: var(--green);
    // }
    &:hover span{
      animation: gx-glitch 0.35s steps(2) 2;
    }
  }

  .sr-only{
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* ---------- title reveal (RevealText) ---------- */
  .gx-reveal{
    display: inline-block;
  }

  .gx-word{
    display: inline-block;
    white-space: nowrap;
  }

  .gx-letter{
    display: inline-block;
    opacity: 0;
  }

  .gx-reveal.play .gx-letter{
    animation: gx-letter-drop 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  }

  @keyframes gx-letter-drop{
    0%{ opacity: 0; transform: translateY(-0.7em) scale(0.4) rotate(-12deg); }
    60%{ opacity: 1; transform: translateY(0.08em) scale(1.12, 0.9) rotate(0); }
    80%{ transform: translateY(-0.04em) scale(0.97, 1.03); }
    100%{ opacity: 1; transform: none; }
  }

  /* loading bar that fills under a heading once its letters land */
  .gx-underline{
    display: block;
    height: 0.4rem;
    margin-top: 0.8rem;
    border-radius: 0.2rem;
    background: linear-gradient(90deg, var(--green), #7dffb0, var(--pink));
    box-shadow: 0 0 0.8rem rgba(35, 206, 107, 0.5);
    transform: scaleX(0);
    transform-origin: left;
  }

  .gx-reveal.play .gx-underline{
    animation: gx-bar-fill 0.7s cubic-bezier(0.65, 0, 0.35, 1) both;
  }

  @keyframes gx-bar-fill{
    0%{ transform: scaleX(0); }
    70%{ transform: scaleX(1.03); }
    100%{ transform: scaleX(1); }
  }

  .gx-cursor{
    display: inline-block;
    width: 0.55em;
    height: 1em;
    margin-left: 0.15em;
    vertical-align: -0.12em;
    background-color: currentColor;
    animation: gx-blink 1s infinite;
  }

  .gx-after{
    display: inline-block;
    margin-left: 0.3em;
    animation: gx-level-up 0.4s ease-out;
  }

  /* ---------- arcade buttons: they press down like a real button ---------- */
  .button{
    position: relative;
    box-shadow: 0 0.5rem 0 rgba(0, 0, 0, 0.35);
    transition: filter 0.2s, transform 0.1s, box-shadow 0.1s;
    &:hover{
      filter: brightness(1.1);
      transform: translateY(-0.2rem);
      box-shadow: 0 0.7rem 0 rgba(0, 0, 0, 0.35);
    }
    &:active{
      transform: translateY(0.5rem);
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.35);
    }
  }

  /* ---------- scroll-in animations (used as animateIn names) ---------- */
  .gx-pop{ animation-name: gx-pop; animation-timing-function: ease-out; }
  .gx-glitch-in{ animation-name: gx-glitch-in; }
  .gx-coin{ animation-name: gx-coin; }

  /* card spawns small, overshoots, settles */
  @keyframes gx-pop{
    0%{ opacity: 0; transform: translateY(3rem) scale(0.7); }
    55%{ opacity: 1; transform: translateY(-0.6rem) scale(1.04); }
    75%{ transform: translateY(0.2rem) scale(0.99); }
    100%{ opacity: 1; transform: none; }
  }

  /* text slides in with a short skew/jitter, like a corrupted frame */
  @keyframes gx-glitch-in{
    0%{ opacity: 0; transform: translateX(-2rem) skewX(-14deg); clip-path: inset(0 100% 0 0); }
    35%{ opacity: 1; transform: translateX(0.8rem) skewX(8deg); clip-path: inset(0 0 0 0); }
    50%{ transform: translateX(-0.4rem) skewX(-4deg); }
    65%{ transform: translateX(0.2rem) skewX(0); }
    100%{ opacity: 1; transform: none; clip-path: inset(0 0 0 0); }
  }

  /* drops in spinning like a collectible coin, then bounces */
  @keyframes gx-coin{
    0%{ opacity: 0; transform: translateY(-5rem) rotateY(0deg); }
    45%{ opacity: 1; transform: translateY(0) rotateY(540deg); }
    65%{ transform: translateY(-1.4rem) rotateY(680deg); }
    80%{ transform: translateY(0) rotateY(720deg); }
    90%{ transform: translateY(-0.4rem) rotateY(720deg); }
    100%{ opacity: 1; transform: translateY(0) rotateY(720deg); }
  }

  @keyframes gx-jump{
    0%, 100%{ transform: translateY(0) scale(1, 1); }
    20%{ transform: translateY(0) scale(1.15, 0.85); }
    50%{ transform: translateY(-1.2rem) scale(0.92, 1.08); }
    80%{ transform: translateY(0) scale(1.08, 0.92); }
  }

  @keyframes gx-float{
    0%, 100%{ transform: translateY(0); }
    50%{ transform: translateY(-1.4rem); }
  }

  @keyframes gx-glitch{
    0%{ text-shadow: 0.2rem 0 #ff2a6d, -0.2rem 0 #05d9e8; transform: translateX(0.1rem); }
    50%{ text-shadow: -0.2rem 0 #ff2a6d, 0.2rem 0 #05d9e8; transform: translateX(-0.1rem); }
    100%{ text-shadow: none; transform: none; }
  }

  @keyframes gx-blink{
    0%, 49%{ opacity: 1; }
    50%, 100%{ opacity: 0; }
  }

  @keyframes gx-level-up{
    0%{ transform: scale(0.6); opacity: 0; }
    60%{ transform: scale(1.15); opacity: 1; }
    100%{ transform: scale(1); }
  }

  /* respect "reduce motion": everything appears instantly */
  @media (prefers-reduced-motion: reduce){
    *, *::before, *::after{
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`