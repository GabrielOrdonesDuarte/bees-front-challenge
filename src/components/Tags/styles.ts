import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type InputProps = {
  isAddMore: boolean
}

type ImageProps = {
  hasValue: string
}

export const TagSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 28px 16px;

  ${media.lessThan('medium')`
    gap: 14px 12px;
  `}
`

export const TagWrapper = styled.div`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    background-color: ${theme.colors.primary};
    padding: 0.4rem 1.4rem;
    border-radius: 99px;
  `}
`

export const Input = styled.input<InputProps>`
  ${({ isAddMore }) => css`
    display: ${isAddMore ? 'inline' : 'none'};
    border: 1px solid #d4d4d8;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
  `}
`

export const Image = styled.img`
  width: 18px;
  height: 18px;
`

export const DynamicImage = styled.img<ImageProps>`
  ${({ hasValue }) => css`
    display: ${hasValue ? 'none' : 'inline'};
    width: 18px;
    height: 18px;
    cursor: pointer;
  `}
`

export const Text = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: 400;
    line-height: 150%;
    margin-left: 1rem;
  `}
`
