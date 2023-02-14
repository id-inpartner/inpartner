import Button from '@components/Button'
import { breakpoints } from '@components/GlobalStyle'
import TitleDescription from '@components/TitleDescription'
import styled from '@emotion/styled'
import Form from 'react-bootstrap/Form'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: stretch;
  min-width: 100%;
  @media (min-width: 404px) {
    min-width: 380px;
  }
`

const F = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-right: auto;
  margin-left: auto;
  & input,
  textarea {
    padding-top: 11px;
    padding-bottom: 11px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  }
  min-width: 100%;
  @media (min-width: 404px) {
    min-width: 380px;
  }
  @media (min-width: ${breakpoints.md}) {
    min-width: 300px;
  }
  @media (min-width: ${breakpoints.lg}) {
    min-width: 380px;
  }
`

export const Contact = () => {
  return (
    <Root>
      <TitleDescription title="Contact Us">
        Please enter your details
      </TitleDescription>
      <F
        onSubmit={(a) => {
          a.preventDefault()
          alert('submited')
        }}
      >
        <Form.Group className="mb-4" controlId="name">
          <Form.Control
            required
            type="name"
            placeholder="Enter your full name"
          />
          <Form.Control.Feedback type="invalid">
            {`We'll never share your email with anyone else.`}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-4" controlId="email">
          <Form.Control required type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="subject">
          <Form.Control required type="text" placeholder="Enter your subject" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="message">
          <Form.Control
            required
            type="text"
            as="textarea"
            rows={3}
            placeholder="Enter your subject"
          />
        </Form.Group>
        <Button className="mt-3" type="submit">
          Submit
        </Button>
      </F>
    </Root>
  )
}

export default Contact
