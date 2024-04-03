'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }
  * {
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  p {
    margin: 0;
  }
`;

export default GlobalStyle;
