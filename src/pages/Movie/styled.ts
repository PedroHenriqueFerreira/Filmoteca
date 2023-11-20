import styled from 'styled-components';
import { themeConfig } from '../../styles/theme';

export const MovieContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  .cover {
    position: fixed;
    width: 100%;
    top: 0;
    height: 100%;
    min-height: calc(100vh - ${themeConfig.header.topHeight});
    backdrop-filter: blur(${themeConfig.background.blur});
    z-index: -1;
  }

  .content {
    margin: ${themeConfig.spacing.extremeLarge} ${themeConfig.spacing.large};
    padding: 0 ${themeConfig.spacing.extraLarge};
    width: 100%;

    @media ${themeConfig.device.tablet.medium} {
      padding-left: ${themeConfig.spacing.large};
      padding-right: ${themeConfig.spacing.large};
    }

    h1 {
      text-align: left;
    }
  }

  .movie {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${themeConfig.spacing.extraLarge};

    .line {
      margin-bottom: ${themeConfig.spacing.small};

      strong {
        margin-right: ${themeConfig.spacing.extremeSmall};
      }
    }

    img {
      margin-right: ${themeConfig.spacing.large};
    }

    p {
      text-align: justify;
    }
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .options {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        border-radius: 50%;
        padding: ${themeConfig.spacing.small};
      }

      button:first-child {
        margin-right: ${themeConfig.spacing.extraSmall};
      }
    }
  }

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${themeConfig.spacing.large};

    .input {
      width: calc(100% - 310px);
      margin-bottom: 0;

      input {
        background-color: ${({ theme }) => theme.bodyColor};
      }

      span {
        display: none;
      }
    }

    button.default {
      width: 300px;
      margin-bottom: 0;
    }
  }

  .comments {
    width: 100%;

    .comment {
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: ${themeConfig.spacing.small};
        color: ${({ theme }) => theme.secondaryColor};

        .username {
          font-weight: bold;
        }
      }

      background-color: ${({ theme }) => theme.bodyColor};
      padding: ${themeConfig.spacing.large};
      border-radius: ${themeConfig.border.radius};

      :not(:last-child) {
        margin-bottom: ${themeConfig.spacing.small};
      }
    }
  }
`;
