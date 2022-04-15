import Tags from 'components/Tags'
import React from 'react'
import { IBreweries } from 'services/brewery'

import * as S from './styles'
import { ReactComponent as DeleteIcon } from './trash.svg'

type CardProps = {
  breweries?: Array<IBreweries>
  setBreweries: React.Dispatch<React.SetStateAction<IBreweries[] | undefined>>
}

const Card = ({ breweries, setBreweries }: CardProps) => {
  const handleDelete = (breweryId: string) => {
    if (!breweries || !breweryId) return
    setBreweries(breweries.filter((brewery) => brewery.id !== breweryId))
  }

  return (
    <>
      {breweries &&
        breweries.map((brewery: IBreweries) => {
          const { brewery_type, postal_code, phone } = brewery
          return (
            <S.CardWrapper key={brewery.id}>
              <S.Delete onClick={() => handleDelete(brewery.id)}>
                <DeleteIcon aria-label="Delete item from menu" />
              </S.Delete>

              <S.Name title={brewery.name}>{brewery.name}</S.Name>

              <S.Address>
                {brewery.street}
                <span>
                  {brewery.city}, {brewery.state} - {brewery.country}
                </span>
              </S.Address>

              <Tags
                brewery_type={brewery_type}
                postal_code={postal_code}
                phone={phone}
              />
            </S.CardWrapper>
          )
        })}
    </>
  )
}

export default Card
