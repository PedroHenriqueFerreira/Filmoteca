import { createGlobalStyle } from 'styled-components';
import { themeConfig } from './theme';

import bg from '../assets/background.png';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;

    @media ${themeConfig.device.mobile.large} {
      font-size: 13px;
    }
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    background-color: ${({ theme }) => theme.bodyColor};
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
`;
