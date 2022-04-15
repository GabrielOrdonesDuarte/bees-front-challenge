import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
   ${({ theme }) => css`
      display: flex;
      align-items: center;
      background: #fff;
      border-radius: 0.2rem;
      border: 0.1rem solid;
      border-color: #D4D4D8;
      &:focus-within {
         box-shadow: 0 0 0.5rem ${theme.colors.secondary};
      }
   `}
`;

export const Input = styled.input`
   ${({ theme }) => css`
      color: ${theme.colors.black};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      padding: 1rem ${theme.spacings.xsmall};
      background: transparent;
      border: 0;
      outline: none;
      width: 100%;
      &:-webkit-autofill {
         -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
            ${theme.colors.mainBg} inset;
         filter: none;
         &::first-line {
            font-family: ${theme.font.family};
            font-size: ${theme.font.sizes.medium};
         }
      }
   `}
`;

export const Label = styled.label`
   ${({ theme }) => css`
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.white};
      cursor: pointer;
   `}
`;
