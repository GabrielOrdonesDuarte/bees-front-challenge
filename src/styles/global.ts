import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    html,
    body,
    #root {
      height: 100%;
    }
    body {
      font-family: ${theme.font.family};
      background-color: ${theme.colors.mainBg};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  `}
`

export default GlobalStyle
