import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    overflow:auto;
  }
  body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    line-height : 1.6;
    letter-spacing: 0.1px;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  h1, h2, p {
    font-family: 'Poppins', sans-serif;
  }
  p {
    font-size: 20px;
    font-weight: 400;
  }
`;

export default GlobalStyle;