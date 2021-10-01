import React, { createContext, useContext, useState, useEffect, Context } from 'react'

import axios from 'axios'

import { ContextProps } from './type'


const RegionsContext = createContext<ContextProps<Regions>>({
  data: []
})

export const RegionsProvider = ({ children }: any) => {

    const [ regions, setRegions ] = useState<Regions[]>([])

  useEffect(() => {

    const tmpData: Regions[] = [
      { 'idRegion': 1, 'nameRegion': 'BRF HQ' },
      { 'idRegion': 2, 'nameRegion': 'BRF HQ - In Natura' },
      { 'idRegion': 3, 'nameRegion': 'BRF HQ - Processados' },
      { 'idRegion': 5, 'nameRegion': 'RG Nordeste' },
      { 'idRegion': 7, 'nameRegion': 'RG São Paulo Capital' },
      { 'idRegion': 8, 'nameRegion': 'RG São Paulo Interior' },
      { 'idRegion': 9, 'nameRegion': 'RG Sul' },
      { 'idRegion': 4, 'nameRegion': 'RG Centro Norte' },
      { 'idRegion': 6, 'nameRegion': 'RG Sudeste' }
    ];
    axios.get('https://hmg-dev-brf-backend.profitmais.com.br/region/list')
      .then(({ data }) => setRegions(data?.regions || []))
      .catch(() => {
        console.log('Are use static data 😋')
        setRegions(tmpData)
      })
    
  }, [])

  return (
    <RegionsContext.Provider value={{
        data: regions
      }}>
      { children }
    </RegionsContext.Provider>
  )
}

export const UseRegions = () =>{
    const context = useContext(RegionsContext)

    if(!context) throw new Error('UseRegions munst be used within RegionsProvider.')

    const { data } = context

    return { data }

}
