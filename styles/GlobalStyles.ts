
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
  }
  
  h1, h2, h3, .font-serif {
    font-family: 'Playfair Display', serif;
  }

  ::selection {
    background: #fff;
    color: #000;
  }

  html {
    scroll-behavior: smooth;
  }
`;
