// import '@/styles/globals.css'
'use client'
import { ThemeProvider, } from '@mui/material'
import useTheme from './common/theme';


export default function App({ Component, pageProps }) {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
