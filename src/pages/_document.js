'use client'
import { Html, Head, Main, NextScript } from 'next/document'
import ResponsiveAppBar from './common/ResponsiveAppBar'
import { Container, ThemeProvider, createTheme } from '@mui/material'

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
        <Head><ResponsiveAppBar /></Head>
        <body style={{ margin: 0 }}>
          <Container maxWidth="xl" sx={{ p: 2 }}>
            <Main />
            <NextScript />
          </Container>
        </body>
      </Html>
    </ThemeProvider>
  )
}
