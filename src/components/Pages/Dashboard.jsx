import * as React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Grid, Switch } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Items from '../Items/Items';
import NavbarItems from '../NavbarItems/NavbarItems';
import { Button } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';
import Contact from './Contact';
import Product from './Product';
import Login from './login';
import { Outlet, Routes, Route } from "react-router-dom";
import '../style.scss'

const drawerWidth = 300;




const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {

      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    height: "100px",
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,

  height: "100px"
}));

// const navLinkStyle =({isActive}) =>{
//   return {
//     fontweight:isActive?"bold":"normal"
//   }
// }


const Dashboard = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [searchValueFromNav, SetsearchValueFromNav] = useState('');


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const GetValues=(value)=>{
    SetsearchValueFromNav(value)
  }
  








  return (
    <Box sx={{ display: 'flex', backgroundColor: "#e5e9ec" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} className="fullNavbar" sx={{ backgroundColor: "white", height: "100px" }}>


        <Box className='openSidebar' onClick={handleDrawerOpen} sx={{ mr: 2, ...(open && { display: 'none' }) }}>
          <ChevronLeftIcon />
        </Box>

        <Box sx={{ padding: "15px" }}>

          <NavbarItems  GetValues={GetValues}/>
        </Box>


      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,

          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        className="sidedrawer"

      >

        <DrawerHeader className="lefttop"  >

          <CheckCircleIcon fontSize="large" />

          <Grid conatiner className='sidebarTopText' >
            <Grid>
              <Typography variant="h5">
                Foodyoow
              </Typography>
            </Grid>
            <Grid>

              <Typography variant='subtitle2'>

                thu 16 jun
              </Typography>
            </Grid>
          </Grid>

          <openclose>
            <Box className='openclose' onClick={handleDrawerClose}>

              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronLeftIcon />}


            </Box>
          </openclose>
        </DrawerHeader>

        <Divider />
        <DrawerHeader className="lefttop" >
          <CheckCircleIcon fontSize="large" />
          <Box className='sidebarTopText'  >
            <Box >
              <Box display="flex" justifyContent="space-between"   >

                <Typography variant="subtitle2" sx={{ paddingTop: "10px" }}>


                  Menu
                </Typography>

                <Box sx={{ position: "relative", left: "100px" }}><Button startIcon={<TuneOutlinedIcon />} sx={{ color: "gray" }}>filter</Button></Box>
              </Box>

            </Box>
            <Box>

              <Typography variant='h5'>

                Burger
              </Typography>
            </Box>
          </Box>

        </DrawerHeader>
        <Divider />
        <leftMiddle className="leftMiddle">
          <Typography variant="subtitle2"  >
            menu dashboard
          </Typography> <MoreHorizIcon />
        </leftMiddle>

        <List>

          <ListItem disablePadding>
            <Box className='liststyle' display="flex" >
              <ListItemIcon className="icon">
                <DashboardIcon />
              </ListItemIcon>
              <NavLink to="/Items" ><ListItemText primary="Dashboard" /></NavLink>
            </Box>
          </ListItem>
          <ListItem disablePadding>
            <Box className='liststyle' display="flex" >
              <ListItemIcon className="icon">
                <DashboardIcon />
              </ListItemIcon>
               <NavLink to="/contact"> <ListItemText primary="Contact" /></NavLink>
            </Box>
          </ListItem>
          <ListItem disablePadding>
            <Box className='liststyle' display="flex" >
              <ListItemIcon className="icon">
                <DashboardIcon />
              </ListItemIcon>
              <NavLink to="/product"><ListItemText primary="Product" /></NavLink>
            </Box>
          </ListItem>
          <ListItem disablePadding>
            <Box className='liststyle' display="flex" >
              <ListItemIcon className="icon">
                <DashboardIcon />
              </ListItemIcon>
              <NavLink to="/wallet"><ListItemText primary="Wallet" /></NavLink>
            </Box>
          </ListItem>
          <ListItem disablePadding>
            <Box className='liststyle' display="flex" >
              <ListItemIcon className="icon">
                <DashboardIcon />
              </ListItemIcon>
              <NavLink to="/offer"><ListItemText primary="Offer" /></NavLink>
            </Box>
          </ListItem>

        </List>

        <Divider />
        <leftMiddle className="leftMiddle">
          <Typography variant="subtitle2"  >
            General
          </Typography> <MoreHorizIcon />
        </leftMiddle>
        <List>
          {[{
            icon: <SettingsOutlinedIcon />,
            name: 'Setting'
          },
          {
            icon: <ReviewsOutlinedIcon />,
            name: 'Give Rating'
          }].map((text, index) => (
            <ListItem key={index} disablePadding>
              <Box className='liststyle' display="flex" >
                <ListItemIcon className="icon">
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </Box>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box className="lightDark" >
          <Button variant="contained" className="dark" startIcon={<NightlightOutlinedIcon className='darkicon' />}>
            Dark
          </Button>
          <Button variant="contained" className='light' startIcon={<LightModeOutlinedIcon />}>
            light
          </Button>
        </Box>
      </Drawer>
      <Main open={open}>

        <DrawerHeader />
        <Box >
    

        <Routes>
       

           <Route  path="items" element={  <Items data={searchValueFromNav}/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="product" element={<Product/>} />
         
      
        </Routes>


     
          
        
        </Box>


      </Main>
    </Box>
  );
}

export default Dashboard;
