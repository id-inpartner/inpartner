import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import Container, { IndexProps } from '@containers/Projects'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import SEO from '@components/SEO'
import { jsonify } from '@utils/json'

const Page: NextPage<IndexProps> = (props) => {
  const router = useRouter()
  const isKo = router.locale === 'ko'

  const title = isKo
    ? '주요 프로젝트 실적 및 포트폴리오 | 인파트너 인도네시아'
    : 'Portfolio & Completed Advisory Projects | Inpartner Indonesia'
  const description = isKo
    ? '인도네시아 고속도로(BUJT) 실사, BRT 타당성 조사, 신재생에너지 재무 모델링, 투자 티저 등 인파트너가 성공적으로 완수한 공공·민간 프로젝트 실적입니다.'
    : "Review Inpartner's delivered advisory track record: feasibility studies for toll roads, BRT transportation, renewable energy, and investment teasers."

  return (
    <>
      <SEO title={title} description={description} />
      <Navbar />
      <Container {...props} />
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}) => {
  if (!req?.ctx?.sequelize) {
    return {
      props: {
        rows: [],
        count: 0,
        page: 1,
        perPage: 20,
        categoryId: 1,
        sectorId: null,
      },
    }
  }
  const { sequelize, Op } = req.ctx

  const { Project } = sequelize.models

  let categoryId = parseInt(query.categoryId as string, 10)

  if (!categoryId) {
    categoryId = 1
  }

  const sectorId =
    query.sectorId && query.sectorId !== ''
      ? parseInt(query.sectorId as string, 10)
      : undefined
  const date =
    query.date && query.date !== '' ? new Date(query.date as string) : undefined
  const page = parseInt(query.page as string, 10) || 1
  const perPage = parseInt(query.perPage as string, 10) || 20

  try {
    const { rows, count } = await Project.findAndCountAll({
      limit: perPage,
      offset: ((page || 1) - 1) * perPage,
      order: [['id', 'ASC']],
      where: date
        ? {
            startAt: { [Op.lte]: date },
            endAt: { [Op.gte]: date },
          }
        : undefined,
      include: [
        {
          association: 'category',
          where: categoryId ? { id: categoryId } : undefined,
          attributes: ['id', 'title', 'name'],
          required: !!categoryId,
        },
        {
          association: 'sector',
          where: sectorId ? { id: sectorId } : undefined,
          attributes: ['id', 'title', 'name'],
          required: !!sectorId,
        },
      ],
    })
    return {
      props: {
        rows: JSON.parse(JSON.stringify(jsonify(rows))),
        count,
        page,
        perPage,
        sectorId: sectorId ? sectorId : null,
        categoryId: categoryId ? categoryId : null,
      },
    }
  } catch (e) {
    return {
      props: {
        rows: [],
        count: 0,
        page,
        perPage,
        sectorId: sectorId ? sectorId : null,
        categoryId: categoryId ? categoryId : null,
      },
    }
  }
}

export default Page
