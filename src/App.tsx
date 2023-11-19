import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MyRoutes from './components/MyRoutes';
import { GlobalStyle } from './styles/globalStyle';
import { darkTheme } from './styles/theme';
import Header from './components/Header';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Header />
        <MyRoutes />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
