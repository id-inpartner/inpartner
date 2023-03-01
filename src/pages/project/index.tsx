import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Container, { IndexProps } from '@containers/Projects'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import { jsonify } from '@utils/json'

const Page: NextPage<IndexProps> = (props) => {
  return (
    <>
      <Head>
        <title>Project & tender Inpartner</title>
        <meta
          name="description"
          content="Inpartner involves the planning, organizing, and overseeing of resources to achieve a specific goal or objective within a defined timeline and budget"
        />
      </Head>
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
