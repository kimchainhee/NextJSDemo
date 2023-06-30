import React from 'react';
import { Grid } from '@mui/material'
import Story from './Story';
import Post from './Post';
import MenuLeft from '../common/MenuLeft';

export default function DemoFeed() {
  return (
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
        <Grid container justifyContent="center" spacing={4}>
          <Grid item>
            <Story />
            <Post />
            <Post />
            <Post />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}