import { FC, useState } from 'react'
import Link, { LinkProps } from 'next/link'
import styled from '@emotion/styled'
import Button from '@components/Button'
import {
  NavDropdown,
  Navbar as NavBar,
  Nav as Nv,
  Container as C,
} from 'react-bootstrap'
import logo from '@images/logo.png'
import Image from '@components/Image'
import { breakpoints, color } from '@components/GlobalStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Nav = styled(Nv)`
  & > .nav-link,
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
    &#nav-services-dropdown {
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

const DropButton = styled(Button)`
  padding-top: 4px;
  padding-bottom: 4px;
  @media (min-width: ${breakpoints.lg}) {
    display: none;
  }
`

const Container = styled(C)`
  max-width: calc(100% - 12px - 12px);
  @media (min-width: ${breakpoints.lg}) {
    max-width: calc(100% - 24px - 24px);
  }
`

const N = styled(NavBar)`
  background-color: #ffffff;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.3);
  & > .container {
    overflow: visible;
  }
`

const Brand = styled(Link)`
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

const Space = styled.div`
  flex: 1;
`

const GetInTouch = styled(Button)`
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

const ItemLink: FC<ItemLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} passHref className="dropdown-item" scroll>
      {children}
    </Link>
  )
}

export const Navbar: FC = () => {
  const [menu, setMenu] = useState('')
  const mouseEnter = (id: string) => () => setMenu(id)
  const mouseLeave = (id: string) => () => {
    if (menu === id) {
      setMenu('')
    }
  }
  const click = (id: string) => () => {
    if (menu === id) {
      setMenu('')
    } else {
      setMenu(id)
    }
  }
  return (
    <N expand="lg" sticky="top">
      <Container>
        <Brand href="/">
          <div>
            <Image
              src={logo}
              alt="INPARTNER"
              fill
              quality={100}
              sizes={`(min-width: ${breakpoints.xxl}) 256px, (min-width: ${breakpoints.xl}) 200px, 120px`}
            />
          </div>
        </Brand>
        <NavBar.Toggle aria-controls="inpartner-menus" />
        <NavBar.Collapse id="inpartner-menus">
          <Space />
          <Nav>
            <NavDropdown
              title={
                <>
                  <Link href="/about">About Us</Link>
                  <DropButton
                    variant="outline-light"
                    onClick={click('nav-about-dropdown')}
                  >
                    <FontAwesomeIcon icon={faCaretDown} />
                  </DropButton>
                </>
              }
              id="nav-about-dropdown"
              show={menu === 'nav-about-dropdown'}
              onMouseLeave={mouseLeave('nav-about-dropdown')}
              onMouseEnter={mouseEnter('nav-about-dropdown')}
            >
              <ItemLink href={{ pathname: '/about', hash: 'vision' }}>
                Vision
              </ItemLink>
              <ItemLink href={{ pathname: '/about', hash: 'missions' }}>
                Missions
              </ItemLink>
              <ItemLink href={{ pathname: '/about', hash: 'history' }}>
                History
              </ItemLink>
              <ItemLink href={{ pathname: '/about', hash: 'values' }}>
                Values
              </ItemLink>
              <ItemLink href={{ pathname: '/about', hash: 'diversity' }}>
                Diversity
              </ItemLink>
              <ItemLink href={{ pathname: '/about', hash: 'sustainability' }}>
                Sustainability
              </ItemLink>
              <ItemLink href={{ pathname: '/about', hash: 'team' }}>
                Team
              </ItemLink>
            </NavDropdown>
            <NavDropdown
              title={
                <>
                  <Link href="/services">Services</Link>
                  <DropButton
                    variant="outline-light"
                    onClick={click('nav-services-dropdown')}
                  >
                    <FontAwesomeIcon icon={faCaretDown} />
                  </DropButton>
                </>
              }
              id="nav-services-dropdown"
              show={menu === 'nav-services-dropdown'}
              onMouseLeave={mouseLeave('nav-services-dropdown')}
              onMouseEnter={mouseEnter('nav-services-dropdown')}
            >
              <ItemLink
                href={{
                  pathname: '/services',
                  hash: 'business-and-management',
                }}
              >
                Business and Management
              </ItemLink>
              <ItemLink href={{ pathname: '/services', hash: 'investment' }}>
                Investment
              </ItemLink>
              <ItemLink
                href={{ pathname: '/services', hash: 'capacity-building' }}
              >
                Capacity Building
              </ItemLink>
            </NavDropdown>
            <Link className="nav-link" href="/sector">
              Sectors
            </Link>
            <Link className="nav-link" href="/project">
              Projects
            </Link>
            <Link className="nav-link" href="/career">
              Career
            </Link>
            <Link className="nav-link" href="/blog">
              Blog
            </Link>
            <GetInTouch href="https://wa.me/6281389285475">
              Get in Touch
            </GetInTouch>
          </Nav>
        </NavBar.Collapse>
      </Container>
    </N>
  )
}

export default Navbar
