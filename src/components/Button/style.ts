import styled, { keyframes } from 'styled-components';
import { themeConfig } from '../../styles/theme';

const loadingEffect = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const ButtonContainer = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.secondaryColor};
  border: none;
  border-radius: ${themeConfig.border.radius};
  padding: ${themeConfig.spacing.extraSmall} ${themeConfig.spacing.small};
  font-size: ${themeConfig.font.medium};
  position: relative;
  text-decoration: none;
  overflow: hidden;
  display: block;
  text-align: center;
  cursor: pointer;
  transition: ${themeConfig.transition};

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: ${themeConfig.icon.small};
    height: ${themeConfig.icon.small};
  }

  &.active,
  :hover,
  :focus-visible {
    div svg {
      :first-child {
        opacity: 0;
      }

      :last-child {
        opacity: 1;
      }
    }
  }

  div {
    position: relative;
    width: ${themeConfig.icon.small};
    height: ${themeConfig.icon.small};

    svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: ${themeConfig.transition};

      :first-child {
        opacity: 1;
      }

      :last-child {
        opacity: 0;
      }
    }
  }

  span {
    margin-left: ${themeConfig.spacing.extraSmall};
  }

  &.loading {
    color: transparent;
    cursor: not-allowed;
  }

  &.default {
    margin-bottom: ${themeConfig.spacing.extraSmall};
  }

  &.danger {
    background-color: ${({ theme }) => theme.errorColor};
  }

  &.text {
    background-color: transparent;
    color: ${({ theme }) => theme.primaryColor};
    margin-bottom: ${themeConfig.spacing.large};

    :hover,
    :focus-visible,
    &.active {
      background-color: ${({ theme }) => theme.buttonHoverColor};
    }
  }

  &.nospacing {
    width: unset;
    padding: unset;
    display: inline;

    :hover {
      background-color: transparent;
    }
  }

  &.light {
    background-color: transparent;
    border-width: ${themeConfig.border.width};
    border-style: ${themeConfig.border.type};
    border-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.primaryColor};

    &.danger {
      border-color: ${({ theme }) => theme.errorColor};
      color: ${({ theme }) => theme.errorColor};
    }
  }

  &.icon {
    margin: 0;
    padding: ${themeConfig.spacing.extremeSmall};
    border-radius: 50%;
    width: ${themeConfig.image.extraSmall};
    height: ${themeConfig.image.extraSmall};
  }

  svg.loader {
    width: ${themeConfig.icon.small};
    height: ${themeConfig.icon.small};
    animation: ${loadingEffect} 1s linear infinite;
    color: ${({ theme }) => theme.secondaryColor};
    position: absolute;
  }

  :not(&.loading):hover,
  :not(&.loading):focus-visible {
    filter: brightness(${themeConfig.brightness});
  }
`;
