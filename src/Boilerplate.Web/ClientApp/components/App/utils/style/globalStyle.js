import { createGlobalStyle } from 'styled-components';

import 'modern-normalize/modern-normalize.css';

import { PRIMARY } from './variables';
import woff2 from '../../assets/fonts/open-sans-v16-latin-regular.woff2';
import woff from '../../assets/fonts/open-sans-v16-latin-regular.woff';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src:
      local('Open Sans Regular'),
      local('OpenSans-Regular'),
      url('${woff2}') format('woff2'),
      url('${woff}') format('woff'); 
  }

  body {
    font-family: Open Sans, Segoe UI, Tahoma, sans-serif !important;
    background: ${PRIMARY.background};
    color: ${PRIMARY.colour};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    word-wrap: break-word;
  }
`;

export default GlobalStyle;
