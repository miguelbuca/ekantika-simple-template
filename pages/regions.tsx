import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Table from '../components/layout/table'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 1rem;
`

const Clients: NextPage = () => {

  const [ regions, setRegions ] = useState<Regions[]>([])

  useEffect(() => {

    const tmpData: Regions[] = [
      {
        idRegion: 1,
        nameRegion: '1'
      },
      {
        idRegion: 2,
        nameRegion: '2'
      },
      {
        idRegion: 3,
        nameRegion: '3'
      },
      {
        idRegion: 4,
        nameRegion: '4'
      },
      {
        idRegion: 5,
        nameRegion: '5'
      },
      {
        idRegion: 6,
        nameRegion: '6'
      },
      {
        idRegion: 3,
        nameRegion: '7'
      },
      {
        idRegion: 4,
        nameRegion: '8'
      },
      {
        idRegion: 1,
        nameRegion: '9'
      },
      {
        idRegion: 2,
        nameRegion: '10'
      },
      {
        idRegion: 3,
        nameRegion: '11'
      },
      {
        idRegion: 4,
        nameRegion: '12'
      },
      {
        idRegion: 5,
        nameRegion: '13'
      },
      {
        idRegion: 6,
        nameRegion: '14'
      },
      {
        idRegion: 3,
        nameRegion: '15'
      },
      {
        idRegion: 4,
        nameRegion: '16'
      },
      {
        idRegion: 6,
        nameRegion: '17'
      },
      {
        idRegion: 3,
        nameRegion: '18'
      },
      {
        idRegion: 4,
        nameRegion: '19'
      }
    ]

    axios.get('https://hmg-dev-brf-backend.profitmais.com.br/region/list')
      .then(({ data }) => setRegions(data?.regions || []))
      .catch(error => {
        console.warn('Upps! ', error)
        setRegions(tmpData)
      })
    
  }, [])

  return (
    <Container>
      <Table
        title='região'
        limit={4}
        data={regions}
        onChange={(e,data) => {
          console.log(e,data)
        }}
      />
    </Container>
  )
}

export default Clients
