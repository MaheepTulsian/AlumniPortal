import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';
import logo from '../../assets/logo.png';
import logo_white from '../../assets/logo_white.png';

// MUI Items
import AppBar from '@mui/material/AppBar';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const drawerWidth = 240;
const navItems = [
  { label: 'About Us', path: '/about' },
  { label: 'Policy', path: '/policy' },
  { label: 'Members', path: '/members' },
  { label: 'Upload', path: '/upload' },
];

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
const isMobile = useMediaQuery('(max-width:600px)');
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <a href="/"><img src={logo} alt="SRMAP" className="drawer-logo" /></a>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={NavLink} to={item.path}>
              <ListItemText primary={item.label} sx={{ color: "#404020"}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position='relative' sx={{ backgroundColor: "#404020" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuRoundedIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            {
                mobileOpen ? <><a href="/"><img src={logo} alt="SRMAP" className="logo" /></a></> : <><a href="/"><img src={logo_white} alt="SRMAP" className="logo" /></a></>
            }
          </Typography>
          { 
            isMobile && 
            <>
              <center>
                <a href="/"><img src={logo_white} alt="SRMAP" className="logo" style={{marginLeft:4}} /></a>
              </center>
            </>
          }
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={NavLink}
                to={item.path}
                sx={{
                  color: '#fff',
                  fontWeight: 400,
                  fontSize: "17px",
                  margin: "0px 8px",
                  textTransform: "none",
                  transition: 'text-decoration 0.3s ease',
                  '&:hover': {
                    borderBottom:"3px solid #fff",
                  }
                }}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
