// import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material'
import Theme from './common/theme'


export default function App({ Component, pageProps }) {

  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
