import { FC, useState } from 'react'
import Link from 'next/link'
import { Navbar as NavBar } from 'react-bootstrap'
import NavDropdown from './NavDropdown'
import logo from '@images/logo.png'
import Image from '@components/Image'
import { breakpoints } from '@components/GlobalStyle'
import { Brand, Container, GetInTouch, ItemLink, N, Nav, Space } from './styled'
import DropTitle from './DropTitle'
import { Sectors } from './Sectors'
import Button from '@components/Button'
import dynamic from 'next/dynamic'
import useTranslation from '../../locales/useTranslation'

const AutoTranslate = dynamic(() => import('@components/AutoTranslate'))

export const Navbar: FC = () => {
  const { t } = useTranslation()
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
                  title={t.navbar.about}
                  onButtonClick={click('nav-about-dropdown')}
                />
              }
              id="nav-about-dropdown"
              show={menu === 'nav-about-dropdown'}
              onMouseLeave={mouseLeave('nav-about-dropdown')}
              onMouseEnter={mouseEnter('nav-about-dropdown')}
            >
              <ItemLink href={{ pathname: '/about', hash: 'vision' }}>
                {t.navbar.vision}
              </ItemLink>
              <ItemLink href={{ pathname: '/about', hash: 'missions' }}>
                {t.footer.missions}
              </ItemLink>
              <ItemLink href={{ pathname: '/about', hash: 'history' }}>
                {t.navbar.history}
              </ItemLink>
              <ItemLink href={{ pathname: '/about', hash: 'values' }}>
                {t.footer.values}
              </ItemLink>
              <ItemLink href={{ pathname: '/about', hash: 'diversity' }}>
                {t.footer.diversity}
              </ItemLink>
              <ItemLink href={{ pathname: '/about', hash: 'sustainability' }}>
                {t.footer.sustainability}
              </ItemLink>
              <ItemLink href={{ pathname: '/about', hash: 'team' }}>
                {t.navbar.team}
              </ItemLink>
            </NavDropdown>
            <NavDropdown
              title={
                <DropTitle
                  href="/services"
                  title={t.navbar.services}
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
                {t.navbar.business}
              </ItemLink>
              <ItemLink href={{ pathname: '/services', hash: 'investment' }}>
                {t.navbar.investment}
              </ItemLink>
              <ItemLink
                href={{ pathname: '/services', hash: 'capacity-building' }}
              >
                {t.navbar.capacity}
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
              {t.navbar.projects}
            </Link>
            <Link className="nav-link" href="/career">
              {t.navbar.career}
            </Link>
            <Link className="nav-link" href="/blog">
              {t.navbar.blog}
            </Link>
            <GetInTouch href="/contact">
              <Button as="span">{t.navbar.getInTouch}</Button>
            </GetInTouch>
            <AutoTranslate />
          </Nav>
        </NavBar.Collapse>
      </Container>
    </N>
  )
}

export default Navbar
