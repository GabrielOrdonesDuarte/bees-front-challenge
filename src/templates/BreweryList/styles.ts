import styled from 'styled-components'
import media, { generateMedia } from 'styled-media-query'

const customMedia = generateMedia({
  large: '1170px',
  breakingScreen: '1381px',
})

export const CardSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 48px;
  padding: 10rem;
  transition: all 0.2s ease-in-out;

  ${customMedia.between('large', 'breakingScreen')`
    grid-template-columns: 1fr 1fr;
  `}

  ${media.lessThan('large')`
    grid-template-columns: 1fr 1fr;
    padding: 4rem 2rem;
  `}

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
    padding: 4rem 2rem;
  `}
`

export const WarningTitle = styled.h1`
  text-align: center;
  padding: 10rem;

  ${media.lessThan('large')`
    padding: 4rem 2rem;
  `}

  ${media.lessThan('medium')`
    padding: 4rem 2rem;
  `}
`
