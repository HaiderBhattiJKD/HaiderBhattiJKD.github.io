import styled from "styled-components";


export const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  place-items: center;
  h2{
    text-align: center;
    margin-bottom: 2rem;
  }
  form{
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    input, textarea{
      width: 60rem;
      padding: 1rem 2rem;
      border-radius: 1.6rem;
      outline: none;
      background-color: rgba(var(--bg-rgb), 0.6);
      border: 1px solid var(--border-strong);
      color: var(--text);
      font-weight: 600;
      transition: border-color 0.2s, box-shadow 0.2s;
      &::placeholder{
        color: var(--text-dim);
      }
      &:focus{
        border-color: var(--primary);
        box-shadow: 0 0 0 0.3rem rgba(var(--primary-rgb), 0.2), 0 0 1.6rem rgba(var(--primary-rgb), 0.35);
      }
    }

    textarea{
      height: 20rem;
      overflow-y: auto;
      resize: none;
    }

    button{
      padding: 1rem 6rem;
      text-transform: uppercase;
    }
  
  }

  @media (max-width: 740px){
    form{
      width: 100%;
      
      input,textarea{
        width: 100%;
      }
    }
  }
`


export const ContainerSucces = styled.div`
  margin-top: 10rem;
  text-align: center;

  .quest{
    font-family: 'Press Start 2P', monospace;
    font-size: 1.6rem;
    color: var(--green);
    margin-bottom: 1.6rem;
    animation: gx-level-up 0.6s ease-out;
  }

  button{
    border-radius: 0.6rem;
    padding: 1rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    color: var(--on-primary);
  }
`