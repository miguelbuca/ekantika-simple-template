import type { NextPage } from 'next'
import Table from '../components/layout/table'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 1rem;
`
import { RegionsProvider, UseRegions } from '../components/context/regions'

/**
 * I did this simply to use the context.
 * @returns context
 */

const TableView: NextPage = () => {

  const { data } = UseRegions()

  return (
    <Table
      title='região'
      limit={4}
      data={data}
      onChange={(e, data) => {
        console.log(e, data)
      }}
    />
  )
}

const Regions: NextPage = () => {
  return (
    <RegionsProvider>
      <Container>
        <TableView/>
      </Container>
    </RegionsProvider>
  )
}

export default Regions
