import { createTheme } from "@mui/material";

export default function useTheme() {
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

  return theme;
}