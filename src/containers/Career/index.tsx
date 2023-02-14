import Banner from '@components/Banner'
import { FC } from 'react'
import banner from './banner.png'
import { Container, SearchForm, Inner, Table } from './styled'
import SectionTitle from '@components/SectionTitle'
import Link from 'next/link'
import { Form } from 'react-bootstrap'
import Button from '@components/Button'

export const Index: FC = () => {
  return (
    <>
      <Banner title="Career" backgroundSrc={banner} />
      <Container>
        <Inner>
          <SearchForm>
            <Form.Select>
              <option>Location</option>
              <option value="1">South Jakarta, Indonesia</option>
              <option value="2">Surabaya, Indonesia</option>
              <option value="3">Bandung, Indonesia</option>
            </Form.Select>
            <Form.Select>
              <option>Department</option>
              <option value="1">Business Consultant</option>
              <option value="2">HRD</option>
            </Form.Select>
            <Form.Select>
              <option>Work Type</option>
              <option value="1">Full Time</option>
              <option value="2">Part Time</option>
              <option value="3">Internship</option>
            </Form.Select>
            <Button>Search</Button>
          </SearchForm>
          <SectionTitle>Jobs Available</SectionTitle>
          <Table responsive>
            <tbody>
              <tr>
                <td>South Jakarta, Indonesia</td>
                <td>Business Consultant</td>
                <td>Full Time</td>
                <td>
                  <Link href="">Detail</Link>
                </td>
              </tr>
              <tr>
                <td>South Jakarta, Indonesia</td>
                <td>Business Consultant</td>
                <td>Full Time</td>
                <td>
                  <Link href="">Detail</Link>
                </td>
              </tr>
              <tr>
                <td>South Jakarta, Indonesia</td>
                <td>Business Consultant</td>
                <td>Full Time</td>
                <td>
                  <Link href="">Detail</Link>
                </td>
              </tr>
              <tr>
                <td>South Jakarta, Indonesia</td>
                <td>Business Consultant</td>
                <td>Full Time</td>
                <td>
                  <Link href="">Detail</Link>
                </td>
              </tr>
              <tr>
                <td>South Jakarta, Indonesia</td>
                <td>Business Consultant</td>
                <td>Full Time</td>
                <td>
                  <Link href="">Detail</Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </Inner>
      </Container>
    </>
  )
}

export default Index
