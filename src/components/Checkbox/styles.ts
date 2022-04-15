import styled, { css } from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   align-items: center;
`;

export const Label = styled.label`
   ${({ theme }) => css`
      cursor: pointer;
      padding-left: ${theme.spacings.xxsmall};
      color: ${theme.colors.black};
      line-height: 1.8rem;
   `}
`;
