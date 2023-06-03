import React from 'react'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { Typography } from '@mui/material'


const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <Typography variant='h6' paragraph>
      <b>About</b>
    </Typography>
  )
}