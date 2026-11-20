import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* ---------- Neon Arcade theme ----------
     Every colour on the site comes from these variables. The *-rgb versions
     are for see-through glows: rgba(var(--primary-rgb), 0.3). */
  :root{
    --bg: #0b0b1a;
    --bg-rgb: 11, 11, 26;
    --surface: #15152e;
    --surface-2: #1d1d3d;
    --text: #ececff;
    --text-dim: rgba(236, 236, 255, 0.65);
    --border: rgba(0, 229, 255, 0.12);
    --border-strong: rgba(236, 236, 255, 0.35);

    --primary: #00e5ff;        /* cyan: buttons, links, active things */
    --primary-rgb: 0, 229, 255;
    --primary-shade: #0090a8;  /* the "side" of arcade buttons */
    --on-primary: #0b0b1a;     /* text on cyan */
    --secondary: #ff2bd6;      /* magenta: highlights, current job */
    --secondary-rgb: 255, 43, 214;
    --accent: #ffd23f;         /* yellow: spare highlight colour */
    --accent-rgb: 255, 210, 63;
    --tertiary: #8b5cff;       /* purple: education */
    --tertiary-rgb: 139, 92, 255;

    --heading-glow: 0 0 1.6rem rgba(var(--primary-rgb), 0.45);
    --card-glow: 0 0 2.4rem rgba(var(--primary-rgb), 0.25);

    /* older names still used around the code */
    --green: var(--primary);
    --pink: var(--secondary);
    --black: var(--bg);
    --blue: var(--tertiary);

    scroll-padding-top: 10rem;
    scrollbar-color: var(--primary) var(--bg);

    /* light mode: same neon family, darker so it reads on a light background */
    &.light{
      --bg: #eef0fa;
      --bg-rgb: 238, 240, 250;
      --surface: #ffffff;
      --surface-2: #f4f5fc;
      --text: #14142b;
      --text-dim: rgba(20, 20, 43, 0.65);
      --border: rgba(20, 20, 43, 0.1);
      --border-strong: rgba(20, 20, 43, 0.3);
      --primary: #0088a8;
      --primary-rgb: 0, 136, 168;
      --primary-shade: #005f75;
      --on-primary: #ffffff;
      --secondary: #c4129a;
      --secondary-rgb: 196, 18, 154;
      --accent: #b88a00;
      --accent-rgb: 184, 138, 0;
      --tertiary: #6a3fe0;
      --tertiary-rgb: 106, 63, 224;
      --heading-glow: none;
      --card-glow: 0 1rem 2.4rem rgba(20, 20, 43, 0.12);
    }
  }

  ::selection{
    background-color: var(--secondary);
    color: #fff;
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
    color: var(--text);
    /* neon haze in two corners over a faint arcade grid */
    background:
      radial-gradient(70rem 45rem at 90% 0%, rgba(var(--secondary-rgb), 0.14), transparent 60%),
      radial-gradient(70rem 45rem at 0% 100%, rgba(var(--primary-rgb), 0.12), transparent 60%),
      linear-gradient(rgba(var(--primary-rgb), 0.035) 1px, transparent 1px) 0 0 / 4rem 4rem,
      linear-gradient(90deg, rgba(var(--primary-rgb), 0.035) 1px, transparent 1px) 0 0 / 4rem 4rem,
      var(--bg);
    background-attachment: fixed;
    transition: color 0.4s, background-color 0.4s;
  }

  h1, h2{
    text-shadow: var(--heading-glow);
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
    background-color: var(--primary);
    color: var(--on-primary);
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
    color: var(--text);
    span:last-child{
      color: var(--primary);
    }
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

  /* segmented, health-bar style fill. Put it on an element and give that
     element a background; the mask cuts it into blocks with small gaps. */
  .gx-segments{
    -webkit-mask: repeating-linear-gradient(90deg, #000 0 1rem, transparent 1rem 1.3rem);
    mask: repeating-linear-gradient(90deg, #000 0 1rem, transparent 1rem 1.3rem);
  }

  /* bar under a heading: empty blocks, then filled block by block once the letters land */
  .gx-underline{
    position: relative;
    display: block;
    height: 0.7rem;
    margin-top: 1rem;
    /* the glow sits on the wrapper so the segment mask doesn't cut it off */
    filter: drop-shadow(0 0 0.5rem rgba(var(--primary-rgb), 0.7));

    &::before, &::after{
      content: "";
      position: absolute;
      inset: 0;
      -webkit-mask: repeating-linear-gradient(90deg, #000 0 1rem, transparent 1rem 1.3rem);
      mask: repeating-linear-gradient(90deg, #000 0 1rem, transparent 1rem 1.3rem);
    }

    /* empty slots */
    &::before{
      background-color: rgba(var(--primary-rgb), 0.15);
    }

    /* the fill */
    &::after{
      background: linear-gradient(90deg, var(--primary), var(--secondary));
      clip-path: inset(0 100% 0 0);
    }
  }

  .gx-reveal.play .gx-underline::after{
    animation: gx-bar-fill 0.8s steps(8, end) var(--bar-delay, 0ms) both;
  }

  @keyframes gx-bar-fill{
    from{ clip-path: inset(0 100% 0 0); }
    to{ clip-path: inset(0 0 0 0); }
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
    font-weight: 700;
    box-shadow: 0 0.5rem 0 var(--primary-shade), 0 0 1.6rem rgba(var(--primary-rgb), 0.35);
    transition: filter 0.2s, transform 0.1s, box-shadow 0.1s;
    &:hover{
      filter: brightness(1.1);
      transform: translateY(-0.2rem);
      box-shadow: 0 0.7rem 0 var(--primary-shade), 0 0 2.4rem rgba(var(--primary-rgb), 0.55);
    }
    &:active{
      transform: translateY(0.5rem);
      box-shadow: 0 0 0 var(--primary-shade), 0 0 1.2rem rgba(var(--primary-rgb), 0.35);
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