import React from 'react'
import PropTypes from 'prop-types';
import { Avatar, Box, Grid, IconButton, InputAdornment, InputBase, Typography } from '@mui/material'
import imgFeed from '../image/aLuanCuoiMim.png';

import Image from 'next/image';
import VerifiedIcon from '@mui/icons-material/Verified';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const FEEDPHOTO = imgFeed;
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

export default function Post() {
  return (
    <Box width={500} m="auto" p={2}>
      <Grid
        container
        spacing={1}
        sx={theme => ({
          borderBottom: `1px solid ${theme.palette.divider}`,
          pb: theme.spacing(2),
        })}
      >
        <Grid item xs>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <AvatarPerson size={42} />
            </Grid>
            <Grid item>
              <Typography variant="body2">
                <b>9gag</b>
              </Typography>
            </Grid>
            <Grid item>
              <VerifiedIcon color="primary" sx={{ fontSize: 12 }} />
            </Grid>
            <Grid item>
              <Typography variant="body2" color='textSecondary'>
                • 12 giờ
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton aria-label="more">
            <MoreHorizIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Box align="center" sx={{ backgroundColor: 'black' }}>
            <Image
              alt="imgFeed"
              src={FEEDPHOTO}
            />
          </Box>
        </Grid>
        <Grid item xs>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <IconButton aria-label="more">
                <FavoriteBorderIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="more">
                <ChatBubbleOutlineIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label="more">
                <SendOutlinedIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton aria-label="more">
            <BookmarkBorderOutlinedIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            <b>_neeloofaar_</b> và <b>những người khác</b> đã thích
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">
            <b>9gag</b> I love hiking
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" color="primary">
            #hiking #ohmygod #sports #outdoor #reels #9gag
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" color="textSecondary">
            Xem tất cả 760 bình luận
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <InputBase
            fullWidth
            placeholder="Thêm bình luận..."
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="more" size="small">
                  <SentimentSatisfiedAltIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            } />
        </Grid>
        <br />
      </Grid>
    </Box>
  );
}