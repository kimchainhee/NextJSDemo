import React from 'react'
import PropTypes from 'prop-types';
import { Box, Grid, Typography, Avatar, Button } from '@mui/material';
import avatar from '../image/avatar.png';
import Image from 'next/image';

const AVATARPHOTO = avatar;
const IMAGE = "https://media.hahalolo.com/2023/04/21/09/04/b229a2e095cea60f416bcc8852de1af4-1682067856_1080xauto_high.jpg.webp";

const AvatarPerson = ({ size, src }) => (
  <Avatar
    alt="avatar"
    sx={{ width: size ? size : 60, height: size ? size : 60 }}
  >
    <Image
      alt="avatar"
      width={size ? size : 60}
      height={size ? size : 60}
      src={src || IMAGE}
    />
  </Avatar>
);
AvatarPerson.propTypes = {
  size: PropTypes.number,
  src: PropTypes.any,
};

const demoUser = [
  { id: 0, content: <AvatarPerson /> },
  { id: 1, content: <AvatarPerson /> },
  { id: 2, content: <AvatarPerson /> },
  { id: 3, content: <AvatarPerson /> },
  { id: 4, content: <AvatarPerson /> },
];


export default function InfoRight() {
  return (
    <Box paddingY={2} marginTop={4} width={300}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <AvatarPerson size={50} src={AVATARPHOTO} />
            </Grid>
            <Grid item xs>
              <Typography variant="body2">
                <b>phimotnambay</b>
              </Typography>
              <Typography variant="caption" color="textSecondary">
                Phan Phi Phi {'((:'}
              </Typography>
            </Grid>
            <Grid item>
              <Button sx={{
                textTransform: 'none',
                fontSize: '12px',
              }}>
                Chuyển
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
              <Typography variant="body2" color="textSecondary">
                Gợi ý cho bạn
              </Typography>
            </Grid>
            <Grid item>
              <Button color="inherit" sx={{
                textTransform: 'none',
                fontSize: '12px',
              }}>
                Xem tất cả
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {demoUser.map(user => (
          <Grid item key={user.id} xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <AvatarPerson size={35} />
              </Grid>
              <Grid item xs>
                <Typography variant="caption">
                  <b>dangghungg</b>
                </Typography>
                <br />
                <Typography variant="caption" color="textSecondary">
                  Theo dõi bạn
                </Typography>
              </Grid>
              <Grid item>
                <Button sx={{
                  textTransform: 'none',
                  fontSize: '12px',
                }}>
                  Theo dõi
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box >
  );
}