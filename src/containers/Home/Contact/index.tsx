import Button from '@components/Button'
import { breakpoints } from '@components/GlobalStyle'
import TitleDescription from '@components/TitleDescription'
import styled from '@emotion/styled'
import { useReducer, useState, useEffect } from 'react'
import { FormControlProps } from 'react-bootstrap'
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

interface Values {
  readonly name: string
  readonly email: string
  readonly subject: string
  readonly message: string
}

interface State {
  readonly status: 'idle' | 'progress' | 'success'
  readonly error?: string
}

interface SubmitAction {
  readonly type: 'submit'
  readonly values: Values
}

interface SuccessAction {
  readonly type: 'success'
}

interface FailedActionn {
  readonly type: 'failed'
  readonly error?: string
}

interface ResetAction {
  readonly type: 'reset'
}

const reducer = (
  state: State,
  action: SubmitAction | SuccessAction | FailedActionn | ResetAction
): State => {
  switch (action.type) {
    case 'submit':
      return { ...state, status: 'progress' }
    case 'success':
      return { ...state, status: 'success' }
    case 'failed':
      return { ...state, status: 'idle', error: action.error }
    case 'reset':
      return { ...state, status: 'idle', error: undefined }
    default:
      return state
  }
}

export const Contact = () => {
  const [state, dispatch] = useReducer(reducer, { status: 'idle' })
  const [values, setValues] = useState<Values>({
    email: '',
    name: '',
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
    <Root>
      <TitleDescription title="Contact Us">
        Please enter your details
      </TitleDescription>
      <F
        onSubmit={(a) => {
          a.preventDefault()
          dispatch({ type: 'submit', values })
          fetch('/api/contact', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(values),
          })
            .then((res) => {
              if (res.ok) {
                dispatch({ type: 'success' })
              } else {
                dispatch({ type: 'failed', error: 'Internal Server Error' })
              }
            })
            .catch((e) => {
              dispatch({ type: 'failed', error: (e as Error).message })
            })
        }}
      >
        <Form.Group className="mb-4" controlId="name">
          <Form.Control
            name="name"
            required
            type="name"
            placeholder="Enter your full name"
            disabled={state.status === 'progress'}
            value={values.name}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="email">
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
        <Form.Group className="mb-4" controlId="subject">
          <Form.Control
            name="subject"
            required
            type="text"
            placeholder="Enter your subject"
            disabled={state.status === 'progress'}
            value={values.subject}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="message">
          <Form.Control
            name="message"
            required
            type="text"
            as="textarea"
            rows={3}
            placeholder="Enter your subject"
            disabled={state.status === 'progress'}
            value={values.message}
            onChange={onChange}
          />
        </Form.Group>
        <Button
          className="mt-3"
          type="submit"
          disabled={state.status === 'progress'}
        >
          Submit
        </Button>
      </F>
    </Root>
  )
}

export default Contact
