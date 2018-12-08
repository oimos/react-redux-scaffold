import { createGlobalStyle } from 'styled-components';
import roboto300 from '../../node_modules/typeface-roboto/files/roboto-latin-300.woff';

const Fonts = createGlobalStyle`
  /* roboto-300normal - latin */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-display: swap;
    font-weight: 300;
    src:
      local('Roboto Light'),
      local('Roboto-Light'),
      url('${roboto300}') format('woff');
  }
`;

export default Fonts;