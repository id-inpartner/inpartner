import { color } from '@components/GlobalStyle'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { FC } from 'react'
import Link from 'next/link'

export const AutoTranslate: FC = () => {
  const router = useRouter()
  const currentLocale = router.locale || 'en'
  const isEn = currentLocale === 'en'
  const isKo = currentLocale === 'ko'

  return (
    <RadioGroup>
      <Item
        href={router.asPath}
        locale="en"
        disabled={isEn}
        aria-current={isEn ? 'true' : undefined}
      >
        EN
      </Item>
      <Divider />
      <Item
        href={router.asPath}
        locale="ko"
        disabled={isKo}
        aria-current={isKo ? 'true' : undefined}
      >
        KR
      </Item>
    </RadioGroup>
  )
}

const RadioGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
`

const Item = styled(Link)<{ disabled?: boolean }>`
  background: none;
  border: none;
  padding: 4px 8px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  font-weight: ${(props) => (props.disabled ? '700' : '400')};
  color: ${(props) => (props.disabled ? color.primary.normal : '#666666')};
  text-decoration: none;
  font-size: 14px;
  &:hover {
    color: ${color.primary.normal};
    text-decoration: none;
  }
`

const Divider = styled.div`
  width: 1px;
  height: 14px;
  background-color: ${color.primary.dark};
  margin: 0 4px;
`

export default AutoTranslate
