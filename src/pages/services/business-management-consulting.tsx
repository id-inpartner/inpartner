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
import business1 from '@containers/Services/business1.png'
import business2 from '@containers/Services/business2.png'
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
    ? '인도네시아 시장 진출 및 경영 전략 컨설팅 | 인파트너'
    : 'Business & Management Consulting Services | Inpartner Jakarta'
  const description = isKo
    ? '한국 기업을 위한 인도네시아 시장 진출 전략, 현지 규제 분석, 시장 조사, 경쟁사 분석 및 현지 법인 운영 최적화 컨설팅을 제공합니다.'
    : "Accelerate enterprise performance with Inpartner's business consulting, corporate strategy formulation, operations redesign, and market entry research."

  return (
    <>
      <SEO title={title} description={description} />
      <Navbar />
      <Banner
        title={
          isKo
            ? '비즈니스 및 경영 전략 컨설팅'
            : 'Business & Management Consulting'
        }
        backgroundSrc={banner}
      />
      <ColumnContainer>
        <PageH1>
          {isKo
            ? '인도네시아 시장 진출 및 경영 전략 컨설팅'
            : 'Business and Management Consulting Services'}
        </PageH1>
        <TitleDescription
          title={isKo ? '전략적 가치 제안' : 'Strategic Value Proposition'}
        >
          {isKo
            ? '인파트너는 기업 전략의 효율성, 조직 성과 및 운영 프로세스를 혁신적으로 개선합니다. 사람, 프로세스, 기술 및 데이터를 비즈니스 목표에 맞추어 현지 시장에서의 성공적인 안착과 지속 가능한 성장을 지원합니다.'
            : 'We bring a fresh perspective to accelerate corporate growth, improve organizational performance, and optimize business processes. We align strategic goals with people, processes, technology, and market intelligence to empower market leaders.'}
        </TitleDescription>
      </ColumnContainer>

      <Container className="my-5">
        <Row className="g-4 align-items-center mb-5">
          <Col md={6}>
            <ImageWrapper>
              <Image
                src={business1}
                alt="Business Strategy Formulation"
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
                src={business2}
                alt="Operational Excellence"
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
                  ? '1. 기업 비즈니스 전략 수립'
                  : '1. Corporate Business Strategy'}
              </h3>
              <p>
                {isKo
                  ? '인도네시아 시장 내 기업의 포지셔닝을 정밀 분석하고, 중장기 성장 로드맵 및 현지 맞춤형 비즈니스 모델을 설계합니다.'
                  : 'Formulate bespoke corporate growth strategies, competitive market positioning, and scalable business models tailored to dynamic market conditions.'}
              </p>
            </FeatureCard>
          </Col>
          <Col md={4}>
            <FeatureCard>
              <h3>
                {isKo
                  ? '2. 운영 및 프로세스 최적화'
                  : '2. Operational Optimization'}
              </h3>
              <p>
                {isKo
                  ? '내부 조직 구조, 업무 프로세스, 공급망 및 운영 비용을 재설계하여 생산성과 수익성을 극대화합니다.'
                  : 'Redesign core workflows, optimize cross-departmental operations, and eliminate procedural bottlenecks to achieve peak operational efficiency.'}
              </p>
            </FeatureCard>
          </Col>
          <Col md={4}>
            <FeatureCard>
              <h3>
                {isKo
                  ? '3. 시장 조사 & 산업 인텔리전스'
                  : '3. Market Research & Intelligence'}
              </h3>
              <p>
                {isKo
                  ? '인도네시아 현지 규제 환경, 소비자 수요 세그먼트, 경쟁 구도에 대한 심층 조사를 통해 확실한 데이터 기반 의사결정을 보장합니다.'
                  : 'In-depth industry analytics, consumer demand segmentation, regulatory compliance mapping, and competitor intelligence in Indonesia.'}
              </p>
            </FeatureCard>
          </Col>
        </Row>

        <CtaSection>
          <h2>
            {isKo
              ? '전문 컨설턴트와의 상담이 필요하십니까?'
              : 'Ready to Transform Your Business?'}
          </h2>
          <Text className="my-3">
            {isKo
              ? '인파트너의 시니어 파트너 팀이 귀사의 비즈니스 도전과제를 함께 분석해 드립니다.'
              : 'Connect with our advisory leadership to formulate actionable solutions for your enterprise.'}
          </Text>
          <Link href="/contact" passHref legacyBehavior>
            <Button>
              {isKo ? '프로젝트 상담 신청' : 'Schedule a Consultation'}
            </Button>
          </Link>
        </CtaSection>
      </Container>
      <Footer />
    </>
  )
}

export default Page
