import React, { createContext, useContext, useState, useEffect } from 'react'

import axios from 'axios'

import Props from './regions'

const EkantikaContext = createContext<object>({})

export const EkantikaProvider = ({ children }: Props) => {

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
        setRegions(tmpData)
      })
    
  }, [])

  return (
      <EkantikaContext.Provider value={{
          data: regions
      }}>
      { children }
    </EkantikaContext.Provider>
  )
}

export const UseEkantika = () =>{
    const context = useContext(EkantikaContext)

    if(!context) throw new Error("UseEkantika munst be used within EkantikaProvider.")
/*
    const [ da ] = context

    return { regions }
*/
}
