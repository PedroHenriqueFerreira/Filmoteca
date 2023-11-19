import styled from 'styled-components';
import { themeConfig } from '../../styles/theme';

const Container = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: ${themeConfig.border.radius};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: ${themeConfig.container.small};
  max-width: 100%;
  padding: ${themeConfig.spacing.extraLarge} ${themeConfig.spacing.medium};

  &.large {
    width: ${themeConfig.container.large};
  }

  form {
    width: 100%;
  }
`;

export default Container;
