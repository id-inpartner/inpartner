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
            <Table responsive>
              <tbody>
                <tr className="form-row">
                  <td>
                    <Form.Select>
                      <option>Location</option>
                      <option value="1">Jakarta</option>
                      <option value="2">Work Anywhere</option>
                    </Form.Select>
                  </td>
                  <td>
                    <Form.Select>
                      <option>Department</option>
                      <option value="1">Business Consultant</option>
                      <option value="2">HRD</option>
                    </Form.Select>
                  </td>
                  <td>
                    <Form.Select>
                      <option>Work Type</option>
                      <option value="1">Full Time</option>
                      <option value="2">Part Time</option>
                      <option value="3">Internship</option>
                    </Form.Select>
                  </td>
                  <td>
                    <Button>Search</Button>
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <SectionTitle>Jobs Available</SectionTitle>
                  </td>
                </tr>
                <tr>
                  <td>Jakarta / Work Anywhere</td>
                  <td>Junior Consultant</td>
                  <td>Full Time</td>
                  <td>
                    <Link
                      href="https://bit.ly/Rekrutmen-JC"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Detail
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Work Anywhere</td>
                  <td>Research Assistant</td>
                  <td>Internship</td>
                  <td>
                    <Link
                      href="https://bit.ly/Rekrutmen_RA"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Detail
                    </Link>
                  </td>
                </tr>
              </tbody>
            </Table>
          </SearchForm>
        </Inner>
      </Container>
    </>
  )
}

export default Index
