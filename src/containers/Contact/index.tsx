import Button from '@components/Button'
import ColumnContainer from '@components/ColumnContainer'
import { breakpoints } from '@components/GlobalStyle'
import Image from '@components/Image'
import TitleDescription, {
  Description,
  Title,
} from '@components/TitleDescription'
import styled from '@emotion/styled'
import axios, { AxiosError } from 'axios'
import Link from 'next/link'
import { useReducer, useState, useEffect } from 'react'
import { Container, FormControlProps } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { reducer, Values } from './reducer'
import wa from './wa.png'

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
  flex-wrap: wrap;
  align-items: stretch;
  margin-right: auto;
  margin-left: auto;
  & input,
  & textarea {
    &::placeholder {
      color: #cccccc;
      font-style: italic;
    }
  }
  & .half,
  & .full {
    min-width: 100%;
    flex: 1;
  }
  & > button {
    min-width: 184px;
  }
  @media (min-width: ${breakpoints.sm}) {
    margin-left: -8px;
    margin-right: -8px;
    & .half {
      min-width: calc(50% - 8px - 8px);
      flex: 1;
    }
    & .full {
      min-width: calc(100% - 8px - 8px);
      flex: 1;
    }
    & .half,
    & .full,
    & button {
      margin-left: 8px;
      margin-right: 8px;
    }
  }
  @media (min-width: ${breakpoints.md}) {
    margin-left: -16px;
    margin-right: -16px;
    & .half {
      min-width: calc(50% - 16px - 16px);
    }
    & .full {
      min-width: calc(100% - 16px - 16px);
    }
    & .half,
    & .full,
    & button {
      margin-left: 16px;
      margin-right: 16px;
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    margin-left: -24px;
    margin-right: -24px;
    & .half {
      min-width: calc(50% - 24px - 24px);
    }
    & .full {
      min-width: calc(100% - 24px - 24px);
    }
    & .half,
    & .full,
    & button {
      margin-left: 24px;
      margin-right: 24px;
    }
  }
  justify-content: flex-end;
  & input,
  textarea {
    padding-top: 11px;
    padding-bottom: 11px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
  }
  min-width: 100%;
  & > .title {
    font-weight: 600;
    font-size: 16px;
    @media (min-width: ${breakpoints.md}) {
      font-size: 20px;
    }
  }
`

const WaDescription = styled(Description)`
  margin-top: 32px;
  @media (min-width: ${breakpoints.md}) {
    margin-top: 56px;
    margin-bottom: 0;
  }
  margin-bottom: 0;
`

const WaTitle = styled(Title)`
  margin-top: 32px;
  @media (min-width: ${breakpoints.md}) {
    margin-top: 56px;
  }
`

const Qr = styled(Image)`
  align-self: center;
  margin-top: 16px;
  @media (min-width: ${breakpoints.md}) {
    margin-top: 24px;
  }
`

const WaLink = styled(Link)`
  display: block;
  align-self: center;
  font-weight: 500;
  margin-top: 16px;
  font-size: 20px;
  @media (min-width: ${breakpoints.md}) {
    margin-top: 24px;
    font-size: 28px;
  }
  margin-bottom: 50px;
  @media (min-width: ${breakpoints.md}) {
    margin-bottom: 90px;
  }
`

export const Index = () => {
  const [state, dispatch] = useReducer(reducer, { status: 'idle' })
  const [values, setValues] = useState<Values>({
    email: '',
    name: '',
    company: '',
    subject: '',
    message: '',
  })

  useEffect(() => {
    if (state.error) {
      alert(state.error)
      dispatch({ type: 'reset' })
    } else if (state.status === 'success') {
      alert('Message recorded!')
      dispatch({ type: 'reset' })
    }
  }, [state.status, state.error])

  const onChange: FormControlProps['onChange'] = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  return (
    <ColumnContainer>
      <TitleDescription title="What Can We Help?">
        Thank you for your interest in INPARTNER. Your inquiry is important to
        us. To help us route your request to the appropriate team or person, we
        need a bit of information about you and the nature of your question or
        project.
      </TitleDescription>
      <F
        onSubmit={(a) => {
          a.preventDefault()
          dispatch({ type: 'submit', values })
          axios
            .post('/api/contact', values)
            .then(() => {
              dispatch({ type: 'success' })
            })
            .catch((e) => {
              const err = e as AxiosError
              if (err.isAxiosError) {
                if (err.response) {
                  dispatch({ type: 'failed', error: 'Internal Server Error' })
                }
              }
              dispatch({ type: 'failed', error: (e as Error).message })
            })
        }}
      >
        <div className="title full mb-4">Contact Information</div>
        <Form.Group className="mb-4 half" controlId="name">
          <Form.Label>Full Name*</Form.Label>
          <Form.Control
            name="name"
            required
            type="name"
            placeholder="Enter your full name"
            disabled={state.status === 'progress'}
            value={values.name}
            onChange={onChange}
            autoCapitalize="words"
          />
        </Form.Group>
        <Form.Group className="mb-4 half" controlId="email">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            name="email"
            required
            type="email"
            placeholder="Enter your email"
            disabled={state.status === 'progress'}
            value={values.email}
            onChange={onChange}
          />
          <Form.Control.Feedback type="invalid">
            {`We'll never share your email with anyone else.`}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-4 half" controlId="subject">
          <Form.Label>Company Name*</Form.Label>
          <Form.Control
            name="company"
            required
            type="text"
            placeholder="Enter your company name"
            disabled={state.status === 'progress'}
            value={values.company}
            onChange={onChange}
            autoCapitalize="words"
          />
        </Form.Group>
        <Form.Group className="mb-4 half" controlId="subject">
          <Form.Label>Subject*</Form.Label>
          <Form.Control
            name="subject"
            required
            type="text"
            placeholder="Enter your subject"
            disabled={state.status === 'progress'}
            value={values.subject}
            onChange={onChange}
            autoCapitalize="words"
          />
        </Form.Group>
        <Form.Group className="mb-4 full" controlId="message">
          <Form.Label>Question or Project*</Form.Label>
          <Form.Control
            name="message"
            required
            type="text"
            as="textarea"
            rows={8}
            placeholder="Enter your question or project"
            disabled={state.status === 'progress'}
            value={values.message}
            onChange={onChange}
            autoCapitalize="on"
          />
        </Form.Group>
        <Button
          className="mb-4"
          type="submit"
          disabled={state.status === 'progress'}
        >
          Submit
        </Button>
      </F>
      <WaDescription>
        To contact us for customer service questions or any other matter, please
        use QR Code.
      </WaDescription>
      <WaTitle>INPARTNER</WaTitle>
      <Qr
        src={wa}
        quality={100}
        width={263}
        height={260}
        alt="https://wa.me/6281389285475"
      />
      <WaLink href="https://wa.me/6281389285475">+62 813-8928-5475</WaLink>
    </ColumnContainer>
  )
}

export default Index
