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
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          aria-label="Email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          placeholder="Send me a message to get started."
          id="message"
          name="message"
          aria-label="Message"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>

    </Container>
  )
}
