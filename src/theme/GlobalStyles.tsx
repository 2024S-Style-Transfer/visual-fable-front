'use client';

import { Global, css } from '@emotion/react';


const globalStyles = css`
  html, body{
    overflow-x: hidden;
    margin: 0;
  }
  #__next {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    box-sizing: border-box;
    overflow: auto;
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
  button {
    cursor: pointer;
    padding: 0;
    border: none;
    outline: none;
    background: none;
  }
`;

const GlobalStyle = () => <Global styles={globalStyles} />;

export default GlobalStyle;
