import { Html, Head, Main, NextScript } from 'next/document'
import ResponsiveAppBar from './common/ResponsiveAppBar'
import { Container, ThemeProvider } from '@mui/material'
import Theme from './common/theme'

export default function Document() {
  return (
    <ThemeProvider theme={Theme}>
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
