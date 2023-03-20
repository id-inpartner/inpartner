import { FC } from 'react'
import Link, { LinkProps } from 'next/link'
import styled from '@emotion/styled'
import Button from '@components/Button'
import { Navbar as NavBar, Nav as Nv, Container as C } from 'react-bootstrap'
import { breakpoints, color } from '@components/GlobalStyle'

export const Nav = styled(Nv)`
  & > .nav-link,
  & > .dropdown-center > .nav-link,
  & > .dropdown > .nav-link {
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 18px;
    color: black;
    padding-top: var(--bs-nav-link-padding-y);
    padding-bottom: var(--bs-nav-link-padding-y);
    &:hover {
      color: ${color.primary.normal};
    }
    @media (min-width: ${breakpoints.lg}) {
      padding-top: 1rem;
      padding-bottom: 1rem;
      font-size: 14px;
    }
    position: relative;
    &:before {
      content: '';
      position: absolute;
      width: calc(100% - 32px);
      bottom: 0;
      left: 16px;
      height: 0.25rem;
      transform: scaleX(0);
      transform-origin: right bottom 0;
      transition: transform 0.2s ease-in-out;
      background-color: ${color.primary.normal};
    }
    &.show,
    &:hover {
      &:before {
        transform: scaleX(1);
        transform-origin: left bottom 0;
      }
    }
  }
  & > .nav-item.dropdown > .dropdown-toggle.nav-link {
    &:after {
      display: none;
    }
    &#nav-about-dropdown,
    &#nav-services-dropdown,
    &#nav-sectors-dropdown {
      display: flex;
      justify-content: space-between;
      padding-top: 0;
      padding-bottom: 0;
      align-items: center;
      @media (min-width: ${breakpoints.lg}) {
        padding-top: 1rem;
        padding-bottom: 1rem;
      }
    }
    & svg {
      transition: transform 0.3s ease-in-out;
      height: 16px;
      width: 10px;
    }
    &.show {
      & svg {
        transform: rotate(180deg);
      }
    }
  }
`

export const DropButton = styled(Button)`
  padding-top: 4px;
  padding-bottom: 4px;
  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`

export const Container = styled(C)`
  max-width: calc(100% - 12px - 12px);
  @media (min-width: ${breakpoints.lg}) {
    max-width: calc(100% - 24px - 24px);
  }
`

export const N = styled(NavBar)`
  background-color: #ffffff;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.3);
  & > .container {
    overflow: visible;
  }
`

export const Brand = styled(Link)`
  position: relative;
  & > div {
    position: relative;
    padding-top: ${30 / 2.56}%;
    width: 120px;
    @media (min-width: ${breakpoints.xl}) {
      width: 198px;
    }
    & > img {
      object-fit: contain;
    }
  }
`

export const Space = styled.div`
  flex: 1;
`

export const GetInTouch = styled(Link)`
  margin-top: var(--bs-nav-link-padding-y);
  @media (min-width: 992px) {
    margin-left: 2rem;
    align-self: center;
    margin-top: 0;
  }
`

interface ItemLinkProps {
  readonly href: LinkProps['href']
  readonly children: string
}

export const ItemLink: FC<ItemLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} passHref className="dropdown-item" scroll>
      {children}
    </Link>
  )
}
