import styled from 'styled-components';
import { themeConfig } from '../../styles/theme';

export const InputContainer = styled.div`
  margin-bottom: ${themeConfig.spacing.large};

  :last-of-type {
    margin-bottom: ${themeConfig.spacing.extraLarge};
  }

  input,
  select {
    width: 100%;
    font-size: ${themeConfig.font.medium};
    background-color: ${({ theme }) => theme.inputBackgroundColor};
    border-radius: ${themeConfig.border.radius};
    padding: ${themeConfig.spacing.extraSmall} ${themeConfig.spacing.small};
    border: none;
    transition: ${themeConfig.transition};
    color: ${({ theme }) => theme.secondaryColor};

    &.error {
      color: ${({ theme }) => theme.errorColor};
    }
  }

  select,
  option {
    cursor: pointer;
  }

  input,
  select {
    :autofill,
    :-webkit-autofill {
      background-color: ${({ theme }) => theme.inputBackgroundColor};
      background-image: none;
      color: -internal-light-dark(black, white);
    }
  }

  .placeholder {
    padding: ${themeConfig.spacing.extraSmall} 0;
    font-size: ${themeConfig.font.medium};
    color: ${({ theme }) => theme.paragraphColor};
    cursor: text;
    display: block;
  }

  span.error {
    width: 100%;
    list-style: none;
    margin-top: ${themeConfig.spacing.extremeSmall};
    color: ${({ theme }) => theme.errorColor};
    font-size: ${themeConfig.font.extraSmall};
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    svg {
      margin-top: calc(${themeConfig.spacing.extremeSmall} - 1px);
      margin-right: ${themeConfig.spacing.extremeSmall};
      width: ${themeConfig.icon.extremeSmall};
      height: ${themeConfig.icon.extremeSmall};
      min-width: ${themeConfig.icon.extremeSmall};
      min-height: ${themeConfig.icon.extremeSmall};
    }
  }
`;
