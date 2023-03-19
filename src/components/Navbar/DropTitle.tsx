import { FC, MouseEventHandler } from 'react'
import Link, { LinkProps } from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DropButton } from './styled'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export interface DropTitleProps {
  readonly title: string
  readonly onButtonClick: MouseEventHandler<HTMLButtonElement>
  readonly href: LinkProps['href']
}

export const DropTitle: FC<DropTitleProps> = ({
  title,
  onButtonClick,
  href,
}) => {
  return (
    <>
      <Link href={href}>{title}</Link>
      <DropButton variant="outline-light" onClick={onButtonClick}>
        <FontAwesomeIcon icon={faCaretDown} />
      </DropButton>
    </>
  )
}

export default DropTitle
