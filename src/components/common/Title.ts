import styled from 'styled-components';
import { themeConfig } from '../../styles/theme';

const Title = styled.h1`
  color: ${({ theme }) => theme.secondaryColor};
  font-size: ${themeConfig.font.large};
  text-align: center;
  font-weight: bold;
  margin-bottom: ${themeConfig.spacing.large};
`;

export default Title;
