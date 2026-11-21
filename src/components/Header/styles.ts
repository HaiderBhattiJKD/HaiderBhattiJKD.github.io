import styled from "styled-components";


export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;
  
  background-color: rgba(var(--bg-rgb), 0.75);
  
  backdrop-filter: blur(6px);

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;

  nav{
    display: flex;
    align-items: center;
    gap: 1.8rem;
    a{
      color: var(--text);
      padding: 0.6rem;
      font-family: 'Red Hat Display', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      transition: color 0.2s;

      &:hover{
        color: var(--primary);
      }

      /* the Resume button keeps dark text on cyan, and its own press effect */
      &.button{
        padding: 0.6rem 2rem;
        color: var(--on-primary);
        font-weight: 700;
        transition: filter 0.2s, transform 0.1s, box-shadow 0.1s;

        &:hover{
          color: var(--on-primary);
        }
      }
    }

  }

  .menu-container{
    cursor: pointer;
    padding: 0.6rem 0;
  }

  .menu{
    width: 2rem;
    height: 0.2rem;
    background: var(--text);
    position: relative;
    cursor: pointer;
    display: none;
    padding: 0;
    border-radius: 0;
    /* keep the button's clickable area larger than the thin bar */
    box-sizing: content-box;
    background-clip: content-box;
    border: 0.9rem solid transparent;
    margin: -0.9rem;

    &:focus-visible{
      outline: 2px solid var(--green);
      outline-offset: 0.4rem;
    }

    &:before{
      bottom: 0.5rem;
    }
    &:after{
      top: 0.5rem;
    }


    &.active:before{
      bottom: 0;
      transform: rotate(45deg);
    }

    &.active:after{
      top: 0;
      transform: rotate(135deg);
    }

    &.active{
      background-color: rgba(0, 0, 0, 0);
    }

  }

  .menu:before, .menu:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background: var(--text);
    cursor: pointer;
    transition: .6s;
  }


  /* visually hidden, but still focusable with the keyboard */
  input[type=checkbox] {
    position: absolute;
    height: 1px;
    width: 1px;
    opacity: 0;
    overflow: hidden;
  }

  input[type=checkbox]:focus-visible + label {
    outline: 2px solid var(--text);
    outline-offset: 2px;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 55px;
    height: 30px;
    background: var(--green);
    display: block;
    justify-content: center;
    align-items: center;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    position: relative;
    margin-left: auto;
    right: 10px;
  }

  @media only screen and (max-width: 800px) {
    label {
    position: relative;
   }
  }

  label:after {
    content: '';
    background: #FFF;
    width: 20px;
    height: 20px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    top: 5px;
    left: 4px;
   transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
  }

  input:checked + label {
    background: var(--pink);
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  .logo, nav a{
    white-space: nowrap;
  }

  /* XP bar: a segmented bar along the bottom edge of the header that fills as you scroll */
  .xp-bar{
    position: absolute;
    left: 0;
    right: 0;
    bottom: -0.2rem;
    height: 0.4rem;
    pointer-events: none;
    /* glow on the wrapper so the segment mask below doesn't clip it */
    filter: drop-shadow(0 0 0.4rem rgba(var(--primary-rgb), 0.8));
  }

  .xp-track{
    position: absolute;
    inset: 0;
    background-color: rgba(var(--primary-rgb), 0.12);
  }

  .xp-fill{
    position: absolute;
    inset: 0;
    /* gradient spans the whole page width; clip-path (set from XpBar) reveals it */
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    clip-path: inset(0 100% 0 0);
  }

  @media (max-width: 1280px){
    padding: 1.8rem 4rem;
  }

  /* below this the links don't fit on one line, so use the hamburger menu */
  @media (max-width: 1100px){
    padding: 1.8rem 3rem;

    .menu{
      display: block;
    }

    nav {
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      transition: opacity 0.25s;
      background:
        radial-gradient(50rem 30rem at 50% 0%, rgba(var(--secondary-rgb), 0.18), transparent 70%),
        rgba(var(--bg-rgb), 0.97);

      a{
        font-size: 2rem;
        &:not(.button):hover{
          color: var(--primary);
          filter: none;
        }
      }

      &.active{
        opacity: 1;
        visibility: visible;
      }
    }
  }
  
`