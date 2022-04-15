import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const CardWrapper = styled.article`
  ${({ theme }) => css`
    width: 100%;
    border: 1px solid #000;
    background-color: #fff;
    border-radius: 4px;
    padding: 3rem ${theme.spacings.small};

    position: relative;

    ${media.lessThan('medium')`
      padding: ${theme.spacings.xsmall};
    `}
  `}
`

export const Name = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: #27272a;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 306px;
  `}
`

export const Address = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray};
    line-height: 26px;
    margin-top: 2rem;
    margin-bottom: 2.4rem;

    span {
      display: block;
    }
  `}
`

export const Delete = styled.button`
  top: 14px;
  right: 14px;
  position: absolute;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  svg path {
    transition: fill 0.2s ease-in-out;
  }

  &:hover svg path {
    fill: red;
  }
`
