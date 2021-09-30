import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Table from '../components/layout/table'
import axios from 'axios'

const Clients: NextPage = () => {

  const [ regions, setRegions ] = useState<Regions[]>([])

  useEffect(() => {
    axios.get('https://hmg-dev-brf-backend.profitmais.com.br/region/list')
      .then(({ data }) => setRegions(data?.regions || []))
      .catch(error => {
        console.warn('Upps! ', error)
      })
  }, [])

  return (
    <div>
      <Table
        title="região"
        limit={3}
        data={regions}
      />
    </div>
  )
}

export default Clients
