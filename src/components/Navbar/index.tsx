import { FC, useState } from 'react'
import Link from 'next/link'
import { NavDropdown, Navbar as NavBar } from 'react-bootstrap'
import logo from '@images/logo.png'
import Image from '@components/Image'
import { breakpoints } from '@components/GlobalStyle'
import { Brand, Container, GetInTouch, ItemLink, N, Nav, Space } from './styled'
import DropTitle from './DropTitle'
import { Sectors } from './Sectors'
import Button from '@components/Button'

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
                <DropTitle
                  href="/about"
                  title="About Us"
                  onButtonClick={click('nav-about-dropdown')}
                />
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
                <DropTitle
                  href="/services"
                  title="Services"
                  onButtonClick={click('nav-services-dropdown')}
                />
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
            <Sectors
              id="nav-sectors-dropdown"
              show={menu === 'nav-sectors-dropdown'}
              onButtonClick={click('nav-sectors-dropdown')}
              onMouseLeave={mouseLeave('nav-sectors-dropdown')}
              onMouseEnter={mouseEnter('nav-sectors-dropdown')}
            />
            {/* <Link className="nav-link" href="/sector">
              Sectors
            </Link> */}
            <Link className="nav-link" href="/project">
              Projects
            </Link>
            <Link className="nav-link" href="/career">
              Career
            </Link>
            <Link className="nav-link" href="/blog">
              Blog
            </Link>
            <GetInTouch href="/contact">
              <Button>Get in Touch</Button>
            </GetInTouch>
          </Nav>
        </NavBar.Collapse>
      </Container>
    </N>
  )
}

export default Navbar
