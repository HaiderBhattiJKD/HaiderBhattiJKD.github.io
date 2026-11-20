import styled from "styled-components";


export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;
  
  background-color: #21212150;
  
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
      color: #FFFF;
      padding: 0.6rem;
      font-family: 'Red Hat Display', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      transition: filter 0.25s;

      &.button{
        padding: 0.6rem 2rem;
      }

      &:hover{
        filter: brightness(0.6);
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
    background: #FFFF;
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
    background: #FFFF;
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
    outline: 2px solid #FFFF;
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

  /* XP bar: fills along the bottom edge of the header as you scroll */
  .xp-bar{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.3rem;
    background-color: rgba(128, 128, 128, 0.2);
    pointer-events: none;
  }

  .xp-fill{
    height: 100%;
    background: linear-gradient(90deg, var(--green), #7dffb0, var(--pink));
    box-shadow: 0 0 0.8rem rgba(35, 206, 107, 0.7);
    transform: scaleX(0);
    transform-origin: left;
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
      background: var(--blue);
      top: 0;
      left: 0;
      transition: opacity 0.25s;
      background-color: var(--green);

      a.button{
        background-color: var(--pink);
      }

      &.active{
        opacity: 1;
        visibility: visible;
      }
    }
  }
  
`