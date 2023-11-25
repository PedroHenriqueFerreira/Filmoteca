import React, { useEffect, useLayoutEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import MyRoutes from './components/MyRoutes';
import { GlobalStyle } from './styles/globalStyle';
import { darkTheme } from './styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import axios from './services/axios';

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios.defaults.headers.Authorization = `Bearer ${token}`;

      setIsLogged(true);
    }

    setIsLoading(false);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Header isLogged={isLogged} setIsLogged={setIsLogged} />
        {!isLoading && (
          <MyRoutes isLogged={isLogged} setIsLogged={setIsLogged} />
        )}
        <Footer />
        <ToastContainer position="bottom-right" closeButton={false} />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
