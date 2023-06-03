import React from 'react'
import { Inter } from 'next/font/google'
import { Typography } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <Typography variant='h6' paragraph>
      <b>Home</b>
    </Typography>
  );
}
