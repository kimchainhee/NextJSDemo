// import '@/styles/globals.css'
import { Container, ThemeProvider, createTheme, } from '@mui/material'
import ResponsiveAppBar from './common/ResponsiveAppBar';

export default function App({ Component, pageProps }) {
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
      <ResponsiveAppBar />
      <Container maxWidth="xl" sx={{ p: 2 }}>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}
