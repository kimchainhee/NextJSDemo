import React from 'react';
import { Grid } from '@mui/material'
import Story from './Story';
import Post from './Post';
import InfoRight from './InfoRight';

export default function DemoFeed(props) {
  return (
    <>
      <props.menuLeft defaultTitle="Home" />
      <Grid container justifyContent="center" spacing={6} sx={{ ml: 6 }}>
        <Grid item>
          <Story />
          <Post />
          <Post />
          <Post />
        </Grid>
        <Grid item>
          <InfoRight />
        </Grid>
      </Grid>
    </>

  );
}