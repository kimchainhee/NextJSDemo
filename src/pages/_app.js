// import '@/styles/globals.css'
import { ThemeProvider, createTheme, } from '@mui/material'
import MenuLeft from './common/MenuLeft';

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#24a8d8', // Màu primary
        contrastText: '#fff',
      },
    },
    typography: {
      fontFamily: 'Arial, sans-serif', // Font family
    },
  });

  const menuLeft = <MenuLeft defaultTitle />;
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} menuLeft={MenuLeft} />
    </ThemeProvider>
  )
}
