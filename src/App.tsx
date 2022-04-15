import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

const App = () => {
   return (
      <ThemeProvider theme={theme}>
         <div className="app">
            <h1>App.tsx</h1>
         </div>
      </ThemeProvider>
   );
};

export default App;
