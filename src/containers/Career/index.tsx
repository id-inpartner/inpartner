import Banner from '@components/Banner'
import { FC } from 'react'
import banner from './banner.png'
import { Container, SearchForm, Inner, Table } from './styled'
import SectionTitle from '@components/SectionTitle'
import Link from 'next/link'
import { Form } from 'react-bootstrap'
import Button from '@components/Button'
import useTranslation from '../../locales/useTranslation'

export const Index: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Banner title={t.careerPage.bannerTitle} backgroundSrc={banner} />
      <Container>
        <Inner>
          <SearchForm>
            <Table responsive>
              <tbody>
                <tr className="form-row">
                  <td>
                    <Form.Select
                      id="career-location"
                      name="location"
                      aria-label={t.careerPage.location}
                    >
                      <option>{t.careerPage.location}</option>
                      <option value="1">{t.careerPage.locJakarta}</option>
                      <option value="2">{t.careerPage.locWorkAnywhere}</option>
                    </Form.Select>
                  </td>
                  <td>
                    <Form.Select
                      id="career-department"
                      name="department"
                      aria-label={t.careerPage.department}
                    >
                      <option>{t.careerPage.department}</option>
                      <option value="1">{t.careerPage.deptConsultant}</option>
                      <option value="2">{t.careerPage.deptHrd}</option>
                    </Form.Select>
                  </td>
                  <td>
                    <Form.Select
                      id="career-work-type"
                      name="workType"
                      aria-label={t.careerPage.workType}
                    >
                      <option>{t.careerPage.workType}</option>
                      <option value="1">{t.careerPage.typeFullTime}</option>
                      <option value="2">{t.careerPage.typePartTime}</option>
                      <option value="3">{t.careerPage.typeInternship}</option>
                    </Form.Select>
                  </td>
                  <td>
                    <Button>{t.careerPage.search}</Button>
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <SectionTitle>{t.careerPage.jobsAvailable}</SectionTitle>
                  </td>
                </tr>
                <tr>
                  <td>{t.careerPage.locJakartaWorkAnywhere}</td>
                  <td>{t.careerPage.job1Title}</td>
                  <td>{t.careerPage.typeFullTime}</td>
                  <td>
                    <Link
                      href="https://bit.ly/Rekrutmen-JC"
                      rel="noreferrer"
                      target="_blank"
                    >
                      {t.careerPage.detail}
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>{t.careerPage.locWorkAnywhere}</td>
                  <td>{t.careerPage.job2Title}</td>
                  <td>{t.careerPage.typeInternship}</td>
                  <td>
                    <Link
                      href="https://bit.ly/Rekrutmen_RA"
                      rel="noreferrer"
                      target="_blank"
                    >
                      {t.careerPage.detail}
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
