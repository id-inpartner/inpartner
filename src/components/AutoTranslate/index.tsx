import { color } from '@components/GlobalStyle'
import styled from '@emotion/styled'
import { FC, useEffect, useState } from 'react'
import { getCookie, setCookie, deleteCookie } from 'cookies-next'

interface Lang {
  readonly label: string
  readonly value: '/auto/en' | '/auto/ko'
}

const googleTranslateElementInit = () => {
  new window.google.translate.TranslateElement(
    {
      pageLanguage: 'auto',
      autoDisplay: false,
      includedLanguages: 'en,ko', // If you remove it, by default all google supported language will be included
      layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    'google_translate_element'
  )
}

const LANGS = {
  '/auto/en': { label: 'EN', value: '/auto/en' },
  '/auto/ko': { label: 'KR', value: '/auto/ko' },
} as const

export const AutoTranslate: FC = () => {
  const cookie = getCookie('googtrans')
  const [lang, setLang] = useState<Lang>(LANGS[cookie] || LANGS['/auto/en'])

  useEffect(() => {
    const ss = document.body.querySelector('#googleTranslateElementInit')
    if (cookie === '/auto/ko') {
      setLang(LANGS['/auto/ko'])
      if (!ss) {
        var addScript = document.createElement('script')
        addScript.setAttribute(
          'src',
          'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
        )
        addScript.setAttribute('id', 'googleTranslateElementInit')
        document.body.appendChild(addScript)
      }
      window.googleTranslateElementInit = googleTranslateElementInit
    } else {
      setLang(LANGS['/auto/en'])
      window.googleTranslateElementInit = undefined
      if (ss) {
        document.body.removeChild(ss)
      }
    }
  }, [cookie])

  const onSelect = (l: Lang) => {
    if (l.value === '/auto/ko') {
      setCookie('googtrans', l.value, { sameSite: true, secure: false })
      window.googleTranslateElementInit = googleTranslateElementInit
    } else {
      setCookie('googtrans', '', { sameSite: true, secure: false, maxAge: 0 })
      window.googleTranslateElementInit = undefined
    }
    setTimeout(() => window.location.reload())
  }

  useEffect(() => {
    console.log(cookie)
    console.log(lang)
  }, [cookie, lang])

  return (
    <>
      <div
        id="google_translate_element"
        style={{
          width: '0px',
          height: '0px',
          position: 'absolute',
          left: '50%',
          zIndex: -99999,
          opacity: 0,
          display: 'hidden',
        }}
      />
      <RadioGroup className="notranslate">
        <Item
          disabled={lang === LANGS['/auto/en']}
          className="notranslate"
          onClick={() => onSelect(LANGS['/auto/en'])}
        >
          {LANGS['/auto/en'].label}
        </Item>
        <Divider />
        <Item
          disabled={lang === LANGS['/auto/ko']}
          className="notranslate"
          onClick={() => onSelect(LANGS['/auto/ko'])}
        >
          {LANGS['/auto/ko'].label}
        </Item>
      </RadioGroup>
    </>
  )
}

const RadioGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  align-self: center;
`

const Item = styled.button`
  background: none;
  border: none;
`

const Divider = styled.div`
  width: 1px;
  background-color: ${color.primary.dark};
`

export default AutoTranslate
