import { ThemeProvider, createTheme, } from '@mui/material'

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

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={2}
          sx={theme => ({
            position: 'fixed',
            width: 350,
            borderRight: `1px solid ${theme.palette.divider}`,
          })}
        >
          <MenuLeft />
        </Grid>
        <Grid
          item
          xs={12}
          sx={theme => ({
            height: '100%',
            padding: theme.spacing(2),
          })}
        >
          <Component {...pageProps} />
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
