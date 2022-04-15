import styled, { css } from 'styled-components'
import media from "styled-media-query";

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.xsmall} ${theme.spacings.large};
    max-height: 72px;
    align-content: center;
    align-items: center;
    transition: padding 0.2s ease-in-out;

    ${media.lessThan("medium")`
      padding: ${theme.spacings.xxsmall};
    `}
  `}
`

export const Name = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: 400;
    line-height: 150%;
    transition: font-size 0.2s ease-in-out;

    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const Action = styled.button`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: 400;
    line-height: 150%;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.2s ease-in-out, font-size 0.2s ease-in-out;

    img {
      margin-right: 2rem;
      transition: margin-right 0.2s ease-in-out;

      ${media.lessThan("medium")`
        margin-right: 0.8rem;
      `}
    }

    &:hover {
      opacity: 0.8;
    }

    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`