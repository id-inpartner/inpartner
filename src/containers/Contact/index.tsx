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
import useTranslation from '../../locales/useTranslation'

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

const ContactH1 = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 26px;
  margin-top: 50px;
  color: #1a1a1a;
  @media (min-width: ${breakpoints.md}) {
    font-size: 36px;
    margin-top: 80px;
  }
`

export const Index = () => {
  const { t } = useTranslation()
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
      alert(t.contactPage.failed)
      dispatch({ type: 'reset' })
    } else if (state.status === 'success') {
      alert(t.contactPage.recorded)
      dispatch({ type: 'reset' })
    }
  }, [state.status, state.error, t])

  const onChange: FormControlProps['onChange'] = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  return (
    <ColumnContainer>
      <ContactH1>{t.contactPage.contactH1}</ContactH1>
      <TitleDescription title={t.contactPage.title}>
        {t.contactPage.desc}
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
              if (err.isAxiosError && err.response) {
                dispatch({ type: 'failed', error: 'Internal Server Error' })
              } else {
                dispatch({ type: 'failed', error: (e as Error).message })
              }
            })
        }}
      >
        <div className="title full mb-4">{t.contactPage.formTitle}</div>
        <Form.Group className="mb-4 half" controlId="name">
          <Form.Label>{t.contactPage.fullName}</Form.Label>
          <Form.Control
            name="name"
            required
            type="text"
            autoComplete="name"
            placeholder={t.contactPage.namePlaceholder}
            disabled={state.status === 'progress'}
            value={values.name}
            onChange={onChange}
            autoCapitalize="words"
          />
        </Form.Group>
        <Form.Group className="mb-4 half" controlId="email">
          <Form.Label>{t.contactPage.email}</Form.Label>
          <Form.Control
            name="email"
            required
            type="email"
            autoComplete="email"
            placeholder={t.contactPage.emailPlaceholder}
            disabled={state.status === 'progress'}
            value={values.email}
            onChange={onChange}
          />
          <Form.Control.Feedback type="invalid">
            {t.contactPage.emailFeedback}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-4 half" controlId="company">
          <Form.Label>{t.contactPage.company}</Form.Label>
          <Form.Control
            name="company"
            required
            type="text"
            autoComplete="organization"
            placeholder={t.contactPage.companyPlaceholder}
            disabled={state.status === 'progress'}
            value={values.company}
            onChange={onChange}
            autoCapitalize="words"
          />
        </Form.Group>
        <Form.Group className="mb-4 half" controlId="subject">
          <Form.Label>{t.contactPage.subject}</Form.Label>
          <Form.Control
            name="subject"
            required
            type="text"
            autoComplete="off"
            placeholder={t.contactPage.subjectPlaceholder}
            disabled={state.status === 'progress'}
            value={values.subject}
            onChange={onChange}
            autoCapitalize="words"
          />
        </Form.Group>
        <Form.Group className="mb-4 full" controlId="message">
          <Form.Label>{t.contactPage.questionProject}</Form.Label>
          <Form.Control
            name="message"
            required
            type="text"
            as="textarea"
            rows={8}
            placeholder={t.contactPage.messagePlaceholder}
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
          {state.status === 'progress'
            ? t.contactPage.submitting
            : t.contactPage.submit}
        </Button>
      </F>
      <WaDescription>{t.contactPage.waPrompt}</WaDescription>
      <WaTitle>INPARTNER</WaTitle>
      <Qr
        src={wa}
        quality={100}
        width={263}
        height={260}
        alt="https://wa.me/6285934548202"
      />
      <WaLink
        href="https://wa.me/6285934548202"
        target="_blank"
        rel="noopener noreferrer"
      >
        +62 859-3454-8202
      </WaLink>
    </ColumnContainer>
  )
}

export default Index
