import styled, { css } from 'styled-components'
import media from "styled-media-query";

import { Wrapper as CheckBox } from 'components/Checkbox/styles' 

export const Home = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primary}; 
    height: 100%;
  `}
`

export const FormTitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: 400;
    line-height: 150%;
  `}
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  ${CheckBox} {
    margin: auto;
  }
`

export const Button = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family};
    background-color: ${theme.colors.secondary};
    padding: 0.8rem 1.6rem;
    color: #fff;
    border: 0;
    border-radius: 4px;
    align-self: center;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:disabled {
      background-color: ${theme.colors.disabled};
      cursor: not-allowed;
    }
  `}
`

export const HeroImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  transition: width 0.2s ease-in-out, height 0.2s ease-in-out;

  ${media.lessThan("medium")`
    width: 100px;
    height: 100px;
  `}
`
