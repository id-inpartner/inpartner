import { ReactNode, forwardRef } from 'react'
import {
  Dropdown as BsDropdown,
  DropdownProps as BsDropdownProps,
} from 'react-bootstrap'

export interface NavDropdownProps extends Omit<BsDropdownProps, 'title'> {
  id: string
  title: ReactNode
  children: ReactNode
  className?: string
  align?: BsDropdownProps['align']
}

export const NavDropdown = forwardRef<HTMLDivElement, NavDropdownProps>(
  ({ id, title, children, className = '', align, ...props }, ref) => {
    return (
      <BsDropdown
        ref={ref}
        {...props}
        className={`nav-item ${className}`.trim()}
        align={align}
      >
        <BsDropdown.Toggle as="div" id={id} className="nav-link">
          {title}
        </BsDropdown.Toggle>
        <BsDropdown.Menu>{children}</BsDropdown.Menu>
      </BsDropdown>
    )
  }
)

NavDropdown.displayName = 'NavDropdown'
export default NavDropdown
