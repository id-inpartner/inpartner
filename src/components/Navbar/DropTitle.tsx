import { FC, MouseEventHandler } from 'react'
import Link, { LinkProps } from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DropButton } from './styled'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'

export interface DropTitleProps {
  readonly title: string
  readonly onButtonClick: MouseEventHandler<HTMLButtonElement>
  readonly href: LinkProps['href']
}

const TitleLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  flex: 1;
`

export const DropTitle: FC<DropTitleProps> = ({
  title,
  onButtonClick,
  href,
}) => {
  return (
    <>
      <TitleLink href={href} onClick={(e) => e.stopPropagation()}>
        {title}
      </TitleLink>
      <DropButton
        variant="outline-light"
        onClick={(e) => {
          e.stopPropagation()
          onButtonClick(e)
        }}
      >
        <FontAwesomeIcon icon={faCaretDown} />
      </DropButton>
    </>
  )
}

export default DropTitle
