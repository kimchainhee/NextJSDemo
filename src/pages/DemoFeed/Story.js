import React from 'react'
import PropTypes from 'prop-types';
import { Box, Grid, Typography, Avatar } from '@mui/material';
import avatar from '../image/avatar.png';
import Image from 'next/image';

const IMAGE = "https://media.hahalolo.com/2023/04/21/09/04/b229a2e095cea60f416bcc8852de1af4-1682067856_1080xauto_high.jpg.webp";

const AvatarPerson = ({ size }) => (
  <Avatar
    alt="avatar"
    sx={{ width: size ? size : 60, height: size ? size : 60 }}
  >
    <Image
      alt="avatar"
      width={size ? size : 60}
      height={size ? size : 60}
      src={IMAGE}
    />
  </Avatar>
);
AvatarPerson.propTypes = {
  size: PropTypes.number,
};

const demoStory = [
  <AvatarPerson />,
  <AvatarPerson />,
  <AvatarPerson />,
  <AvatarPerson />,
  <AvatarPerson />,
  <AvatarPerson />,
  <AvatarPerson />,
  <AvatarPerson />,
];


export default function Story() {
  return (
    <Box paddingY={2} marginTop={2}>
      <Grid container spacing={2}>
        {demoStory.map((story, index) => (
          <Grid item key={index}>
            <Box>
              {story}
            </Box>
            <b />
            <Typography
              variant="caption"
              sx={{ mt: 2 }}
            >
              userName
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}