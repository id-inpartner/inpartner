import { color } from '@components/GlobalStyle'
import styled from '@emotion/styled'
import { FC, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

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

const LANGS: ReadonlyArray<Lang> = [
  { label: 'EN', value: '/auto/en' },
  { label: 'KR', value: '/auto/ko' },
]

export const AutoTranslate: FC = () => {
  const [lang, setLang] = useState<Lang>(LANGS[0])
  const [cookie, setCookie, removeCookie] = useCookies(['googtrans'])

  useEffect(() => {
    const ss = document.body.querySelector('#googleTranslateElementInit')
    if (!ss) {
      var addScript = document.createElement('script')
      addScript.setAttribute(
        'src',
        '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
      )
      addScript.setAttribute('id', 'googleTranslateElementInit')
      document.body.appendChild(addScript)
      window.googleTranslateElementInit = googleTranslateElementInit
    }
    if (cookie.googtrans === '/auto/ko') {
      setLang(LANGS[1])
    } else {
      setLang(LANGS[0])
    }
  }, [cookie.googtrans])

  const onSelect = (l: Lang) => {
    if (l.value === lang.value) {
      return
    }
    if (l.value === '/auto/ko') {
      setCookie('googtrans', decodeURI(l.value))
    } else {
      removeCookie('googtrans')
    }
    window.location.reload()
  }

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
        <Item className="notranslate" onClick={() => onSelect(LANGS[0])}>
          EN
        </Item>
        <Divider />
        <Item className="notranslate" onClick={() => onSelect(LANGS[1])}>
          KR
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
