'use client'
import { Grid, Typography } from "@mui/material"
import React from "react"
import MiniGame from "./MiniGame"

export default function Game(props) {
  return (
    <>
      <props.menuLeft defaultTitle="Game" />
      <Grid container justifyContent="center" spacing={4} >
        <Grid item>
          <Typography variant='h6' paragraph>
            <b>MiniGame</b>
          </Typography>
        </Grid>
        <Grid item>
          <MiniGame />
        </Grid>
      </Grid>
    </>
  )
}
