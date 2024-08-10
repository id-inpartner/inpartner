import Banner from '@components/Banner'
import banner from './banner.png'
import { FC, useMemo } from 'react'
import ProjectComponent, { Dummy, Project } from '@components/Project'
import {
  Container,
  Queries,
  MenuItem,
  MenuTitle,
  Projects,
  SideMenu,
} from './styled'
import { Form, Pagination } from 'react-bootstrap'
import { PageItem } from '@components/Pagination'
import { useSectors } from '../../hooks/useSectors'
import { useRouter } from 'next/router'

export interface IndexProps {
  readonly page: number
  readonly perPage: number
  readonly rows: ReadonlyArray<Project>
  readonly count: number
  readonly categoryId: number
  readonly sectorId?: number | null
}

const Index: FC<IndexProps> = ({
  rows,
  page,
  count,
  categoryId,
  sectorId,
  perPage,
}) => {
  const sectors = useSectors()
  const router = useRouter()
  const pageCount = Math.ceil(count / perPage)
  const pages = useMemo(() => {
    const pp: number[] = []
    for (let i = page - 3; i <= page + 3; i++) {
      if (i >= 1 && i <= pageCount) {
        pp.push(i)
      }
    }
    return pp
  }, [pageCount, page])
  const query = {
    page,
    perPage,
    categoryId,
    sectorId: sectorId ? sectorId : undefined,
  }
  return (
    <>
      <Banner title="Projects" backgroundSrc={banner} />
      <Container id="content">
        <SideMenu>
          <MenuTitle>Projects</MenuTitle>
          <MenuItem
            href={{
              pathname: '/project',
              hash: 'content',
              query: { categoryId: 1 },
            }}
            className={categoryId === 1 ? 'selected' : ''}
          >
            Business and Management Consulting
          </MenuItem>
          <MenuItem
            href={{
              pathname: '/project',
              hash: 'content',
              query: { categoryId: 3 },
            }}
            className={categoryId === 3 ? 'selected' : ''}
          >
            Investment
          </MenuItem>
          <MenuItem
            href={{
              pathname: '/project',
              hash: 'content',
              query: { categoryId: 2 },
            }}
            className={categoryId === 2 ? 'selected' : ''}
          >
            Capacity Building (The Executive Business Program)
          </MenuItem>
        </SideMenu>
        <Projects>
          <Queries>
            <Form.Select
              aria-label="Sector"
              onChange={(e) => {
                const sectorId = e.currentTarget.value
                if (sectorId) {
                  router.replace({
                    pathname: '/project',
                    hash: 'content',
                    query: { ...query, page: 1, sectorId },
                  })
                } else {
                  router.replace({
                    pathname: '/project',
                    hash: 'content',
                    query: { ...query, page: 1, sectorId: undefined },
                  })
                }
              }}
            >
              <option>Sector</option>
              {sectors.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </Form.Select>
            {/* <Form.Control type="date" name="date" placeholder="Date" /> */}
          </Queries>
          {rows.map((r) => (
            <ProjectComponent key={r.id} data={r} />
          ))}
          <Dummy aria-hidden />
          <Pagination>
            <PageItem
              href={{
                pathname: '/project',
                hash: 'content',
                query: { ...query, page: 1 },
              }}
            >
              <span>«</span>
              <span className="visually-hidden">First</span>
            </PageItem>
            <PageItem
              href={{
                pathname: '/project',
                hash: 'content',
                query: { ...query, page: Math.max(1, page - 1) },
              }}
            >
              <span>‹</span>
              <span className="visually-hidden">Prev</span>
            </PageItem>
            {pages.map((p) => (
              <PageItem
                key={p}
                href={{
                  pathname: '/project',
                  hash: 'content',
                  query: { ...query, page: p },
                }}
              >
                {p}
              </PageItem>
            ))}
            <PageItem
              href={{
                pathname: '/project',
                hash: 'content',
                query: { ...query, page: Math.min(pageCount, page + 1) },
              }}
            >
              <span>›</span>
              <span className="visually-hidden">Next</span>
            </PageItem>
            <PageItem
              href={{
                pathname: '/project',
                hash: 'content',
                query: { ...query, page: pageCount },
              }}
            >
              <span>»</span>
              <span className="visually-hidden">Last</span>
            </PageItem>
          </Pagination>
        </Projects>
      </Container>
    </>
  )
}

export default Index
