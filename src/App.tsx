import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import Router from './router'
import { UserProvider } from 'contexts/user'

import theme from './styles/theme'
import GlobalStyles from 'styles/global'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <GlobalStyles />
        <Router />
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
