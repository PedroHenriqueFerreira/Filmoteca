import styled from 'styled-components';
import { themeConfig } from '../../styles/theme';

export const MoviesContainer = styled.section`
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

    .add {
      margin-bottom: ${themeConfig.spacing.extraLarge};
    }

    h1 {
      text-align: left;
    }

    @media ${themeConfig.device.tablet.medium} {
      padding-left: ${themeConfig.spacing.large};
      padding-right: ${themeConfig.spacing.large};
    }

    article {
      width: 100%;

      :not(:last-child) {
        margin-bottom: ${themeConfig.spacing.extraLarge};
      }
    }
  }

  .react-multiple-carousel__arrow {
    background-color: ${({ theme }) => theme.primaryColor};
    box-shadow: 0 0 ${({ theme }) => theme.shadowColor};
  }

  .movie {
    display: block;
    cursor: pointer;
    position: relative;
    margin: 0 ${themeConfig.spacing.extremeSmall};
    height: 100%;

    img {
      transition: ${themeConfig.transition};
      border-radius: ${themeConfig.border.radius};
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    :hover {
      img {
        filter: brightness(80%);
      }

      h3 {
        opacity: 1;
      }
    }

    h3 {
      position: absolute;
      color: ${({ theme }) => theme.secondaryColor};
      top: ${themeConfig.spacing.small};
      left: 0;
      width: 100%;
      transition: ${themeConfig.transition};
      font-size: ${themeConfig.font.extraSmall};
      opacity: 0;
      padding: 0 ${themeConfig.spacing.small};
    }
  }
`;
