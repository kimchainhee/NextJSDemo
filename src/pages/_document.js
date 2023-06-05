'use client'
import { Html, Head, Main, NextScript } from 'next/document'
import ResponsiveAppBar from './common/ResponsiveAppBar'
import { Container, ThemeProvider } from '@mui/material'
import useTheme from './common/useTheme';

export default function Document() {
  const theme = useTheme();

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
