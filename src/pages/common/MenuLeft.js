import React from 'react'
import { Avatar, Box, Button, Grid, Typography } from '@mui/material'
import avatar from '../image/avatar.png';
import Image from 'next/image';
// icon outlined
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
// icon
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
import ExploreIcon from '@mui/icons-material/Explore';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MenuIcon from '@mui/icons-material/Menu';

const AVATARPHOTO = avatar;

const avatarPerson =
  <Avatar
    alt="avatar"
    sx={{ width: 30, height: 30 }}
  >
    <Image
      alt='mini-game'
      width={30}
      height={30}
      src={AVATARPHOTO}
    />
  </Avatar>

const menuFeed = [
  { title: 'Home', icon: <HomeOutlinedIcon />, fillIcon: <HomeIcon /> },
  { title: 'Search', icon: <SearchOutlinedIcon />, fillIcon: <SearchIcon /> },
  { title: 'Discover', icon: <ExploreOutlinedIcon />, fillIcon: <ExploreIcon /> },
  { title: 'Reels', icon: <MovieCreationOutlinedIcon />, fillIcon: <MovieIcon /> },
  { title: 'Message', icon: <ChatOutlinedIcon />, fillIcon: <ChatIcon /> },
  { title: 'Noti', icon: <FavoriteBorderOutlinedIcon />, fillIcon: <FavoriteIcon /> },
  { title: 'Create', icon: <AddBoxOutlinedIcon />, fillIcon: <AddBoxIcon /> },
  { title: 'Personal page', icon: avatarPerson, fillIcon: avatarPerson },
  { title: 'See more', icon: <MenuOutlinedIcon />, fillIcon: <MenuIcon /> },
];

export default function MenuLeft() {
  const [menuChoose, setMenuChoose] = React.useState(menuFeed[0].title);

  const handleMenuChoose = event => {
    setMenuChoose(event.title);
  };

  return (
    <Box sx={{ height: '100vh', position: 'relative', p: 2 }}>
      <Box sx={{ pl: 1.5, mb: 3 }}>
        <Typography variant='h6'>
          <b>Hahalolo</b>
        </Typography>
      </Box>
      <Grid
        container
        direction='column'
        justifyContent="space-between"
        sx={{ height: '100%' }}
      >
        <Grid item>
          <Grid container direction='column'>
            {menuFeed.map((menu, index) => (
              <Grid item key={menu.title}
                sx={theme => ({
                  position: index === menuFeed.length - 1 && 'absolute',
                  bottom: theme.spacing(6),
                  width: index === menuFeed.length - 1 ? '90%' : '100%',
                  height: 56,
                })}>
                <Button
                  startIcon={menuChoose === menu.title ? menu.fillIcon : menu.icon}
                  color="inherit"
                  fullWidth
                  size='large'
                  onClick={() => handleMenuChoose(menu)}
                  sx={{
                    p: 1.5,
                    textTransform: 'none',
                    fontWeight: menuChoose === menu.title && 'bold',
                    justifyContent: 'left',
                    transition: '.125s',
                    '& .css-htszrh-MuiButton-startIcon>*:nth-of-type(1)': {
                      fontSize: '30px',
                      mr: '10px',
                    },
                    '&:hover': {
                      '& .css-htszrh-MuiButton-startIcon>*:nth-of-type(1)': {
                        // transform: 'scale(1.75)',
                        mr: index !== menuFeed.length - 2 ? '9px' : '10px',
                        transition: '.125s',
                        fontSize: '31px',
                      },
                    },
                  }}
                >
                  {menu.title}
                </Button>
              </Grid>
            ))}
          </Grid >
        </Grid>
      </Grid>
    </Box>
  );
}