import Link, { LinkProps } from 'next/link'
import { FC, ReactNode } from 'react'

export interface PaginationProps {
  readonly className?: string
  readonly page: number
  readonly count: number
  readonly visibleCount?: number
}

export interface PageItemProps {
  readonly href: LinkProps['href']
  readonly as?: LinkProps['as']
  readonly children?: ReactNode
  readonly tabIndex?: number
}

export const PageItem: FC<PageItemProps> = ({
  href,
  as,
  children,
  tabIndex,
}) => {
  return (
    <li className="page-item">
      <Link
        href={href}
        as={as}
        className="page-link"
        role="button"
        tabIndex={tabIndex}
      >
        {children}
      </Link>
    </li>
  )
}
