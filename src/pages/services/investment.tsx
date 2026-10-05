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
import investment from '@containers/Services/Investment/investment.png'
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
  height: 340px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 30px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  @media (min-width: ${breakpoints.md}) {
    height: 420px;
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
    ? '인도네시아 기업 투자 자문 및 타당성 조사(FS) | 인파트너'
    : 'Investment Advisory & Feasibility Study Services | Inpartner'
  const description = isKo
    ? '인도네시아 인프라, 신재생에너지, M&A 실사(Due Diligence), 사업 타당성 조사(FS) 및 투자 티저 작성을 전문으로 하는 종합 투자 자문 서비스입니다.'
    : 'Comprehensive investment advisory in Indonesia: financial modeling, feasibility studies (FS), valuation analysis, and private equity transaction advisory.'

  return (
    <>
      <SEO title={title} description={description} />
      <Navbar />
      <Banner
        title={
          isKo ? '투자 자문 및 금융 솔루션' : 'Investment Advisory & Solutions'
        }
        backgroundSrc={banner}
      />
      <ColumnContainer>
        <PageH1>
          {isKo
            ? '인도네시아 투자 자문 및 자본 솔루션'
            : 'Investment Advisory & Capital Solutions in Indonesia'}
        </PageH1>
        <TitleDescription
          title={isKo ? '전문 투자 자문 서비스' : 'Strategic Capital Advisory'}
        >
          {isKo
            ? '인파트너의 전문 투자 자문팀은 고객의 투자 목표와 리스크 프로파일을 정밀하게 분석하여 맞춤형 자본 조달 및 가치평가 솔루션을 제공합니다. 인프라, 신재생에너지, M&A 실사 및 사모펀드 투자를 종합적으로 지원합니다.'
            : 'Our experienced investment advisors work closely with institutional investors, multinational corporations, and sovereign entities to structure bankable projects, assess risk-adjusted returns, and unlock alternative investment opportunities in Indonesia.'}
        </TitleDescription>
      </ColumnContainer>

      <Container className="my-5">
        <Row className="justify-content-center mb-5">
          <Col md={8}>
            <ImageWrapper>
              <Image
                src={investment}
                alt="Investment Advisory Solutions"
                fill
                quality={100}
                sizes="(min-width: 768px) 66vw, 100vw"
                style={{ objectFit: 'contain' }}
              />
            </ImageWrapper>
          </Col>
        </Row>

        <Row className="g-4">
          <Col md={4}>
            <FeatureCard>
              <h3>
                {isKo
                  ? '1. 사업 타당성 조사 (FS)'
                  : '1. Project Feasibility Studies (FS)'}
              </h3>
              <p>
                {isKo
                  ? '유료도로(BUJT), 광역 교통(BRT), 신재생에너지 발전 등 대형 프로젝트에 대한 은행 제출용(Bankable) 사업 타당성 조사 및 재무 모델링을 수행합니다.'
                  : 'Rigorous economic viability reviews, sensitivity analyses, and bankable Feasibility Studies (FS) across toll roads, public transit, and industrial ventures.'}
              </p>
            </FeatureCard>
          </Col>
          <Col md={4}>
            <FeatureCard>
              <h3>
                {isKo
                  ? '2. 기업 가치평가 & 투자 티저'
                  : '2. Valuation & Investment Teasers'}
              </h3>
              <p>
                {isKo
                  ? 'DCF 및 배수 평가 기반의 정밀 기업 가치평가, 투자 유치용 티저(Teaser) 작성, 정보기억서(IM) 패키징을 제공합니다.'
                  : 'Enterprise valuation modeling, investment teaser preparation, and investor pitch decks designed for private equity placement and strategic partnerships.'}
              </p>
            </FeatureCard>
          </Col>
          <Col md={4}>
            <FeatureCard>
              <h3>
                {isKo
                  ? '3. 대체 투자 & 실사 (DD)'
                  : '3. Alternative Investment & DD'}
              </h3>
              <p>
                {isKo
                  ? '인도네시아 시장 진출 기업을 위한 상업적·재무적 실사(Due Diligence), 현지 합작법인(JV) 파트너십 발굴 및 리스크 평가를 지원합니다.'
                  : 'Commercial due diligence, FDI structuring, partner sourcing, and financial risk assessment for private equity and institutional investors.'}
              </p>
            </FeatureCard>
          </Col>
        </Row>

        <CtaSection>
          <h2>
            {isKo
              ? '투자 프로젝트 검토를 시작하십시오'
              : 'Discuss Your Investment Roadmap'}
          </h2>
          <Text className="my-3">
            {isKo
              ? '인파트너의 금융 자문 전문가가 귀사의 투자 프로젝트를 철저하게 검토해 드립니다.'
              : 'Engage with Inpartner to evaluate feasibility, structure capital, and execute transactions.'}
          </Text>
          <Link href="/contact" passHref legacyBehavior>
            <Button>
              {isKo ? '투자 상담 문의' : 'Request Investment Consultation'}
            </Button>
          </Link>
        </CtaSection>
      </Container>
      <Footer />
    </>
  )
}

export default Page
