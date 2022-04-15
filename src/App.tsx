import React from "react";
import Router from "./router";
import theme from "./styles/theme";
import GlobalStyles from "styles/global";
import { ThemeProvider } from "styled-components";
import { UserProvider } from "contexts/user";

const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <UserProvider>
            <GlobalStyles />
            <Router />
         </UserProvider>
      </ThemeProvider>
   );
};

export default App;
