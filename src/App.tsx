import React from "react";
import { ThemeProvider } from "styled-components";
import { UserProvider } from "contexts/user";
import theme from "styles/theme";
import GlobalStyles from "styles/global";

const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <UserProvider>
            <GlobalStyles />
            <div className="app">
               <h1>App.tsx</h1>
            </div>
         </UserProvider>
      </ThemeProvider>
   );
};

export default App;
