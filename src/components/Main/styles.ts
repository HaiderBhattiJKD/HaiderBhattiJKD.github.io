import styled from "styled-components";


export const Container = styled.main`
  position: relative;
  z-index: 0;
  padding: 0 10rem 4rem;
  /* stop sideways overflow without cutting off things at the bottom edge
     ("hidden" would also clip vertically, e.g. the Submit button's shadow) */
  overflow-x: hidden;
  overflow-x: clip;
  #tsparticles{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  @media (max-width: 740px){
    padding: 0 2.4rem 4rem;
  }

  @media(max-width: 360px){
    padding: 0 1.6rem 4rem;
  }
`