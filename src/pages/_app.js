import { createGlobalStyle, ThemeProvider } from 'styled-components';

const theme = {
  dark: {
    colorText: '#D7D7D7',
    backgroudLinear: 'linear-gradient(#2D3235, #191E21)',
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Sunflower', sans-serif;
    background-image: ${theme.dark.backgroudLinear};
    color: ${theme.dark.colorText};
    height: 100vh;
    font-size: 62.5%;
  }
  a {
    color: ${theme.dark.colorText};
  }
  .container {
    max-width: 760px;
    margin: 0 auto;

  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
