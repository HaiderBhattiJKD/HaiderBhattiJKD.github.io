import styled from "styled-components";


export const Container = styled.footer`
  background-color: rgba(var(--bg-rgb), 0.85);
  border-top: 1px solid rgba(var(--primary-rgb), 0.35);
  box-shadow: 0 -1rem 3rem rgba(var(--primary-rgb), 0.08);
  padding: 3rem 15rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  .logo{
    font-size: 2.8rem;
  }

  p{
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img{
      width: 2.6rem;
      animation: spinning 5s infinite linear;
    }
  }
  .social-media{
    display: flex;
    align-items: center;
    margin-top: 2rem;
    justify-content: center;
    gap: 1rem;

    img,span{
      font-size: 3rem;
      width: 3rem;
    }
  }


  @keyframes spinning {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  @media(max-width: 800px){
    padding: 4rem 10rem;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  @media(max-width: 600px){
    padding: 4rem 1rem;
    p{
      font-size: 1.2rem;
    }
  }
`