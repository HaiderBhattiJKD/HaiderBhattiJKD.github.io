import { Container, ContainerSucces } from './styles'
import { useForm, ValidationError } from '@formspree/react'


export function Form() {
  const [state, handleSubmit] = useForm('xknkpqry')
  
  
  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Back to the top
        </button>
        
      </ContainerSucces>
    )
  }
  return (
    <Container>
      
      <form onSubmit={handleSubmit}>
        
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        
      </form>
      
    </Container>
  )
}
