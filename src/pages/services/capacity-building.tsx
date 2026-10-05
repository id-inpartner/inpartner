import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import Banner from '@components/Banner'
import SEO from '@components/SEO'
import ColumnContainer from '@components/ColumnContainer'
import TitleDescription from '@components/TitleDescription'
import Text from '@components/Text'
import Button from '@components/Button'
import Image from '@components/Image'
import { Container, Row, Col } from 'react-bootstrap'
import styled from '@emotion/styled'
import { breakpoints } from '@components/GlobalStyle'
import banner from '@containers/Services/banner.png'
import capacity1 from '@containers/Services/capacity1.png'
import capacity2 from '@containers/Services/capacity2.png'
import Link from 'next/link'

const PageH1 = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 26px;
  margin-top: 50px;
  color: #1a1a1a;
  @media (min-width: ${breakpoints.md}) {
    font-size: 36px;
    margin-top: 80px;
  }
`

const FeatureCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 32px 24px;
  height: 100%;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-4px);
  }
  & h3 {
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 16px;
  }
  & p {
    color: #555555;
    font-size: 15px;
    line-height: 1.6;
    margin: 0;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 30px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  @media (min-width: ${breakpoints.md}) {
    height: 380px;
  }
`

const CtaSection = styled.div`
  text-align: center;
  padding: 60px 0;
  margin-top: 40px;
  background: #f8f9fa;
  border-radius: 16px;
`

const Page: NextPage = () => {
  const router = useRouter()
  const isKo = router.locale === 'ko'

  const title = isKo
    ? '기업 역량 강화 및 임원 교육 프로그램 | 인파트너 아카데미'
    : 'Executive Capacity Building & Business Programs | Inpartner'
  const description = isKo
    ? '인파트너 아카데미의 맞춤형 C-Level 임원 코칭, 비즈니스 플랜 실행력 강화, 조직 생산성 혁신 및 기업 거버넌스 교육 프로그램을 확인하십시오.'
    : "Enhance executive leadership and workforce productivity with Inpartner Academy's tailored corporate training and organizational development programs."

  return (
    <>
      <SEO title={title} description={description} />
      <Navbar />
      <Banner
        title={
          isKo
            ? '기업 역량 강화 (인파트너 아카데미)'
            : 'Capacity Building (Inpartner Academy)'
        }
        backgroundSrc={banner}
      />
      <ColumnContainer>
        <PageH1>
          {isKo
            ? '기업 역량 강화 및 리더십 교육 프로그램'
            : 'Executive Capacity Building & Leadership Programs'}
        </PageH1>
        <TitleDescription
          title={isKo ? '인재 및 조직 개발' : 'Human Capital Development'}
        >
          {isKo
            ? '인파트너의 역량 강화 사업부는 임원 멘토링, 기업 교육, 조직 문화 및 생산성 개발 프로그램을 종합적으로 제공합니다. 리더십 팀이 실행 가능한 비즈니스 계획을 수립하고 급변하는 글로벌 경쟁 환경에 선제적으로 대응할 수 있도록 지원합니다.'
            : "Inpartner's capacity building division delivers executive mentoring, corporate training, and organizational development. We empower client leadership to formulate actionable business plans, accelerate operational efficiency, and forge resilient institutional partnerships."}
        </TitleDescription>
      </ColumnContainer>

      <Container className="my-5">
        <Row className="g-4 align-items-center mb-5">
          <Col md={6}>
            <ImageWrapper>
              <Image
                src={capacity1}
                alt="Executive Mentoring"
                fill
                quality={100}
                sizes="(min-width: 768px) 50vw, 100vw"
                style={{ objectFit: 'cover' }}
              />
            </ImageWrapper>
          </Col>
          <Col md={6}>
            <ImageWrapper>
              <Image
                src={capacity2}
                alt="Corporate Training Programs"
                fill
                quality={100}
                sizes="(min-width: 768px) 50vw, 100vw"
                style={{ objectFit: 'cover' }}
              />
            </ImageWrapper>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={4}>
            <FeatureCard>
              <h3>
                {isKo
                  ? '1. C-Level 임원 멘토링 & 코칭'
                  : '1. Executive Mentoring & Coaching'}
              </h3>
              <p>
                {isKo
                  ? '기업 경영진을 위한 1:1 전략 코칭 및 리더십 의사결정 프레임워크를 제공하여 조직의 방향성을 확립합니다.'
                  : 'Targeted leadership coaching for C-suite executives and board members to sharpen strategic decision-making and cross-functional leadership.'}
              </p>
            </FeatureCard>
          </Col>
          <Col md={4}>
            <FeatureCard>
              <h3>
                {isKo
                  ? '2. 조직 생산성 & 거버넌스'
                  : '2. Productivity & Governance'}
              </h3>
              <p>
                {isKo
                  ? '기업 지배구조(Governance), 준법 윤리경영, 조직 KPI 정렬 및 부서 간 협업 체계를 고도화합니다.'
                  : 'Establish robust corporate governance structures, transparent internal controls, and goal-oriented KPI frameworks to maximize productivity.'}
              </p>
            </FeatureCard>
          </Col>
          <Col md={4}>
            <FeatureCard>
              <h3>
                {isKo
                  ? '3. 맞춤형 기업 직무 교육'
                  : '3. Tailored Corporate Training'}
              </h3>
              <p>
                {isKo
                  ? '재무, 프로젝트 관리, 디지털 전환 및 ESG 기준 등 실무 부서의 핵심 역량을 높이는 실무 중심 교육을 설계합니다.'
                  : 'Hands-on training modules across financial modeling, project execution, ESG stewardship, and digital business operations.'}
              </p>
            </FeatureCard>
          </Col>
        </Row>

        <CtaSection>
          <h2>
            {isKo
              ? '조직 역량 강화를 시작하십시오'
              : 'Elevate Your Organization'}
          </h2>
          <Text className="my-3">
            {isKo
              ? '귀사 임직원을 위한 맞춤형 역량 강화 프로그램을 제안해 드립니다.'
              : 'Consult with Inpartner Academy to tailor a leadership development roadmap for your team.'}
          </Text>
          <Link href="/contact" passHref legacyBehavior>
            <Button>
              {isKo ? '교육 프로그램 문의' : 'Inquire About Programs'}
            </Button>
          </Link>
        </CtaSection>
      </Container>
      <Footer />
    </>
  )
}

export default Page
