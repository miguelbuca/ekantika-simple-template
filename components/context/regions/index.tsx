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
      {
        idRegion: 1,
        nameRegion: '1'
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

    if(!context) throw new Error("UseRegions munst be used within RegionsProvider.")

    const { data } = context

    return { data }

}
