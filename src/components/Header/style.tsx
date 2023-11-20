import styled from 'styled-components';
import { themeConfig } from '../../styles/theme';

export const HeaderContainer = styled.header`
  padding: ${themeConfig.spacing.extraSmall} ${themeConfig.spacing.large};
  background-color: ${({ theme }) => theme.bodyColor};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${themeConfig.header.topHeight};
  z-index: 1;

  + main {
    padding-top: ${themeConfig.header.topHeight};
  }

  + main + footer {
    @media ${themeConfig.device.tablet.medium} {
      margin-bottom: ${themeConfig.header.bottomHeight};
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      z-index: 2;
      width: unset;
      padding-top: ${themeConfig.spacing.extremeSmall};
      padding-bottom: ${themeConfig.spacing.extremeSmall};
      margin-bottom: 0;

      :hover,
      :focus-visible,
      &.active {
        background-color: transparent;
      }

      :hover img,
      :focus-visible img {
        filter: drop-shadow(
          0 0 ${themeConfig.shadow.blur} ${({ theme }) => theme.shadowColor}
        );
      }

      img {
        transition: ${themeConfig.transition};
        width: ${themeConfig.image.small};
        height: fit-content;
      }
    }

    ul {
      list-style: none;
      display: flex;
      align-items: center;

      &:last-child {
        li:last-child {
          margin-right: 0;
        }
      }

      &.routes {
        @media ${themeConfig.device.tablet.medium} {
          justify-content: space-between;
          background-color: ${({ theme }) => theme.bodyColor};
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: ${themeConfig.header.bottomHeight};
          z-index: 1;
          padding-top: ${themeConfig.spacing.extraSmall};
          padding-bottom: ${themeConfig.spacing.extraSmall};
          padding-left: ${themeConfig.spacing.large};
          padding-right: ${themeConfig.spacing.large};
        }

        li {
          @media ${themeConfig.device.laptop.medium} {
            margin: 0 ${themeConfig.spacing.small};
          }

          @media ${themeConfig.device.tablet.medium} {
            margin-left: 0;
            margin-right: 0;

            &:first-child {
              margin-left: ${themeConfig.spacing.small};
            }

            &:last-child {
              margin-right: ${themeConfig.spacing.small};
            }
          }
        }

        a.text {
          @media ${themeConfig.device.laptop.medium} {
            padding: ${themeConfig.spacing.extremeSmall};
            border-radius: 50%;
            width: ${themeConfig.image.extraSmall};
            height: ${themeConfig.image.extraSmall};
          }
        }
      }
    }

    li {
      margin: 0 ${themeConfig.spacing.extremeSmall};
    }

    a.text,
    a.default {
      padding-top: ${themeConfig.spacing.extraSmall};
      padding-bottom: ${themeConfig.spacing.extraSmall};
      margin-bottom: 0;
    }

    a.text:not(.logo) {
      border-radius: ${themeConfig.border.radius};

      span {
        @media ${themeConfig.device.laptop.medium} {
          display: none;
        }
      }

      &.profile {
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 0;

        @media ${themeConfig.device.laptop.medium} {
          padding-right: 0;
        }

        img {
          width: ${themeConfig.image.extraSmall};
          height: ${themeConfig.image.extraSmall};
          border-radius: 50%;
          transition: ${themeConfig.transition};
          border-width: ${themeConfig.border.width};
          border-style: ${themeConfig.border.type};
          border-color: transparent;
        }

        :hover,
        :focus-visible,
        &.active {
          img {
            border-color: ${({ theme }) => theme.primaryColor};
          }
        }
      }
    }
  }
`;
