import React from 'react'
import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
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

export default Theme;