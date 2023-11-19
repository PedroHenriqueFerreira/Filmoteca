import styled from 'styled-components';
import { themeConfig } from '../../styles/theme';

export const HomeContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: ${themeConfig.spacing.extremeLarge} 0; */

  width: 100%;
  backdrop-filter: blur(${themeConfig.shadow.blur});

  .cover {
    position: absolute;
    width: 100%;
    height: calc(100vh - ${themeConfig.header.topHeight});
    top: 0;
    left: 0;
    backdrop-filter: blur(${themeConfig.shadow.blur});
  }
`;
