import styled from 'styled-components';
import { themeConfig } from '../../styles/theme';

const Paragraph = styled.p`
  color: ${({ theme }) => theme.paragraphColor};
  font-size: ${themeConfig.font.medium};
  padding: ${themeConfig.spacing.extraSmall} 0;

  &.small {
    font-size: ${themeConfig.font.small};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primaryColor};
    transition: ${themeConfig.transition};

    :hover,
    :focus-visible {
      filter: brightness(${themeConfig.brightness});
    }
  }
`;

export default Paragraph;
