import React from "react"
import { useRouter } from 'next/router'
import { Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function UserDetail() {
  const router = useRouter();
  const { id, calories } = router.query;
  return (
    <Grid container spacing={2}>
      <Grid item xs>
        <Typography variant='h6' paragraph>
          <b>UserDetail {id} {calories}</b>
        </Typography>
      </Grid>
      <Grid item>
        <Link href='./'>{'< Back'}</Link>
      </Grid>
    </Grid>
  )
}