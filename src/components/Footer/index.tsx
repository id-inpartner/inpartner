import Link from 'next/link'
import { FC } from 'react'
import {
  Col,
  Copyright,
  Divider,
  Menu,
  Menus,
  MenuTitle,
  Root,
  Row,
  Properties,
} from './styled'
import logo from './logo.png'
import Image from 'next/image'

export const Footer: FC = () => {
  return (
    <Root>
      <Row>
        <Link href="/">
          <Image
            src={logo}
            alt="INPARTNER"
            quality={100}
            width={198}
            height={24}
          />
        </Link>
      </Row>
      <Row>
        <Properties>
          <div>
            <div className="name">Phone</div>
            <div className="c">:</div>
            <div className="value">
              <a href="tel:+6289628310192">0896 2831 0192</a>
            </div>
          </div>
          <div>
            <div className="name">Email</div>
            <div className="c">:</div>
            <div className="value">
              <a href="mailto:corporatesecretary@inpartner.id">
                corporatesecretary@inpartner.id
              </a>
            </div>
          </div>
          <div>
            <div className="name">Address</div>
            <div className="c">:</div>
            <div className="value">
              <div>
                <a href="https://goo.gl/maps/Jn7pdGFG1Q5j6McL8">
                  Pakuwon Tower Lantai 10, Jl. Raya Casablanca Kav.88, Menteng
                  Dalam, Tebet, Jakarta Selatan.
                </a>
              </div>
              <div>
                <a href="https://goo.gl/maps/VZKExdeS4SheESnX6">
                  Jemur Sari Street V No.10, Surabaya
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="name">Website</div>
            <div className="c">:</div>
            <div className="value">
              <Link href="/" passHref>
                inpartner.id
              </Link>
            </div>
          </div>
          <div className="social">
            <div className="name">Follow Us</div>
            <div className="c">:</div>
            <div className="value social">
              <a
                href="https://www.instagram.com/inpartnerconsulting"
                target="_blank"
                rel="noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <title>instagram</title>
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@inpartnerconsulting"
                target="_blank"
                rel="noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <title>TikTok</title>
                  <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/inpartner"
                target="_blank"
                rel="noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <title>linkedin</title>
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/inpartnerconsultant"
                target="_blank"
                rel="noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <title>facebook</title>
                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                </svg>
              </a>
            </div>
          </div>
        </Properties>
        <Menus>
          <Col>
            <MenuTitle href="/">About Us</MenuTitle>
            <Menu href={{ pathname: '/about', hash: 'vision' }}>Vision</Menu>
            <Menu href={{ pathname: '/about', hash: 'missions' }}>
              Missions
            </Menu>
            <Menu href={{ pathname: '/about', hash: 'history' }}>History</Menu>
            <Menu href={{ pathname: '/about', hash: 'values' }}>Values</Menu>
            <Menu href={{ pathname: '/about', hash: 'diversity' }}>
              Diversity
            </Menu>
            <Menu href={{ pathname: '/about', hash: 'sustainability' }}>
              Sustainability
            </Menu>
            <Menu href={{ pathname: '/about', hash: 'team' }}>Team</Menu>
          </Col>
          <Col>
            <MenuTitle href="/services">Services</MenuTitle>
            <Menu
              href={{ pathname: '/services', hash: 'business-and-management' }}
            >
              Business and Management Consulting
            </Menu>
            <Menu href={{ pathname: '/services', hash: 'investment' }}>
              Investment
            </Menu>
            <Menu href={{ pathname: '/services', hash: 'capacity-building' }}>
              Capacity Building
            </Menu>
          </Col>
          <Col>
            <MenuTitle href="/project">Projects</MenuTitle>
            <MenuTitle href="/sector">Sectors</MenuTitle>
            <MenuTitle href="/career">Career</MenuTitle>
            <MenuTitle href="/blog">Insight & Update</MenuTitle>
            <MenuTitle href="https://btf.inpartner.id/public">
              ICT-BTF
            </MenuTitle>
          </Col>
        </Menus>
      </Row>
      <Divider />
      <Row>
        <Copyright>
          {`Copyright © ${new Date().getFullYear()} `}
          <Link passHref href="/">
            INPARTNER
          </Link>
        </Copyright>
      </Row>
    </Root>
  )
}

export default Footer
