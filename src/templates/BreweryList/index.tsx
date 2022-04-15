import React, { useState, useEffect } from 'react'

import Card from 'components/Card'
import Header from 'components/Header'

import { getBreweries, IBreweries } from 'services/brewery'

const BreweryList = () => {
  const [breweries, setBreweries] = useState<Array<IBreweries>>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        const data = await getBreweries()
        setBreweries(data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBreweries()
  }, [])

  return (
    <>
      <Header />
      <Card
        breweries={breweries}
        loading={loading}
        setBreweries={setBreweries}
      />
    </>
  )
}

export default BreweryList
