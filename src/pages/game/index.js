'use client'
import { Typography } from "@mui/material"
import React from "react"
import MiniGame from "./MiniGame"

export default function Game() {
  return (
    <>
      <Typography variant='h6' paragraph>
        <b>MiniGame</b>
      </Typography>
      <MiniGame />
    </>
  )
}
