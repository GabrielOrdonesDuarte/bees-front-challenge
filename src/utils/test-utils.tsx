import { ReactElement } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render, RenderOptions } from '@testing-library/react'
import {
  UserContext,
  UserContextInterface,
  UserContextDefaultValues,
} from 'hooks/use-profile'

import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

type CustomRenderProps = {
  cartProviderProps?: UserContextInterface
} & Omit<RenderOptions, 'queries'>

const customRender = (
  ui: ReactElement,
  {
    cartProviderProps = UserContextDefaultValues,
    ...renderOptions
  }: CustomRenderProps = {}
) =>
  render(
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={cartProviderProps}>
        <MemoryRouter>{ui}</MemoryRouter>
      </UserContext.Provider>
    </ThemeProvider>,
    renderOptions
  )

export * from '@testing-library/react'
export { customRender as render }
