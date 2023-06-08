import { Html, Head, Main, NextScript } from 'next/document'
import { ThemeProvider, createTheme } from '@mui/material'

export default function Document() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#24a8d8', // Màu primary của bạn
        contrastText: '#fff',
      },
    },
    typography: {
      fontFamily: 'Arial, sans-serif', // Font family của bạn
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Html lang="en">
        <Head />
        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    </ThemeProvider>
  )
}
