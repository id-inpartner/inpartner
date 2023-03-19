import { breakpoints } from '@components/GlobalStyle'
import styled from '@emotion/styled'
import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { NavDropdown, NavDropdownProps } from 'react-bootstrap'
import DropTitle, { DropTitleProps } from './DropTitle'
import { ItemLink } from './styled'

export interface Sector {
  readonly id: string
  readonly slug: string
  readonly title: string
}

export interface SectorsProps {
  readonly id: string
  readonly onButtonClick: DropTitleProps['onButtonClick']
  readonly onMouseLeave: NavDropdownProps['onMouseLeave']
  readonly onMouseEnter: NavDropdownProps['onMouseEnter']
  readonly show: boolean
}

export const Sectors: FC<SectorsProps> = ({
  id,
  onButtonClick,
  onMouseEnter,
  onMouseLeave,
  show,
}) => {
  const [sectors, setSectors] = useState<ReadonlyArray<Sector>>([])
  useEffect(() => {
    axios
      .get('/api/sector')
      .then(({ data }) => {
        setSectors(data)
      })
      .catch((e) => {
        //
      })
  }, [])
  return (
    <Dropdown
      title={
        <DropTitle
          href="/sector"
          title="Sectors"
          onButtonClick={onButtonClick}
        />
      }
      id={id}
      show={show}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      align="end"
    >
      <div className="items">
        {sectors.map((it) => (
          <ItemLink key={it.id} href={`/sector/${it.slug}`}>
            {it.title}
          </ItemLink>
        ))}
      </div>
    </Dropdown>
  )
}

const Dropdown = styled(NavDropdown)`
  & > .dropdown-menu.show > .items {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    @media (min-width: ${breakpoints.lg}) {
      flex-direction: row;
      flex-wrap: wrap;
      min-width: 726px;
    }
    & > .dropdown-item {
      white-space: normal;
      @media (min-width: ${breakpoints.lg}) {
        flex: 1;
        min-width: 363px;
        white-space: nowrap;
      }
    }
  }
`
