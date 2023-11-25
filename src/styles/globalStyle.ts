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

  .Toastify__toast {
    background-color: ${({ theme }) => theme.bodyColor};
    border-radius: ${themeConfig.border.radius};
    color: ${({ theme }) => theme.secondaryColor};

    padding: ${themeConfig.spacing.small};
    font-size: ${themeConfig.font.medium};
  }

  .Toastify__toast--success {
    svg {
      fill: ${({ theme }) => theme.primaryColor};
    }

    .Toastify__progress-bar {
      background-color: ${({ theme }) => theme.primaryColor};
    }
  }

  .Toastify__toast--error {
    svg {
      fill: ${({ theme }) => theme.errorColor};
    }

    .Toastify__progress-bar {
      background-color: ${({ theme }) => theme.errorColor};
    }
  }
`;
