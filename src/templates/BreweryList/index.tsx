import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import Card from 'components/Card'
import Header from 'components/Header'
import Loading from 'templates/Loading'

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
      } catch (error) {
        toast.error('😢 An unexpected error occurred, please try again later')
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchBreweries()
  }, [])

  if (loading) {
    return (
      <>
        <Header />
        <Loading />
      </>
    )
  }

  if (!breweries?.length || !breweries) {
    return (
      <>
        <Header />
        <S.WarningTitle>Nothing Found</S.WarningTitle>
      </>
    )
  }

  return (
    <>
      <Header />
      <S.CardSection>
        <Card breweries={breweries} setBreweries={setBreweries} />
      </S.CardSection>
    </>
  )
}

export default BreweryList
