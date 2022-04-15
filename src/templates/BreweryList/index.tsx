import React, { useState, useEffect } from 'react'

import Card from 'components/Card'
import Header from 'components/Header'

import { getBreweries, IBreweries } from 'services/brewery'

import * as S from './styles'

const BreweryList = () => {
  const [breweries, setBreweries] = useState<Array<IBreweries>>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        const data = await getBreweries()
        setBreweries(data)
        // TODO: Adicionar toast
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchBreweries()
  }, [])

  return (
    <>
      <Header />

      <S.CardSection>
        <Card
          breweries={breweries}
          loading={loading}
          setBreweries={setBreweries}
        />
      </S.CardSection>
    </>
  )
}

export default BreweryList
