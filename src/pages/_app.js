// import '@/styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material'

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

export default function App({ Component, pageProps }) {

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
