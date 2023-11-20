import styled from 'styled-components';
import { themeConfig } from '../../styles/theme';

export const CultContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${themeConfig.spacing.extremeLarge} 0;

  form > div:last-child {
    margin-bottom: 0;
  }
`;
