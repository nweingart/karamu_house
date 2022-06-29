import React from 'react';

// material ui imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import { makeStyles } from "@material-ui/core";

// component imports
import Logo from './assets/img/Logo.png'

// react router dom imports


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: 50,
    zIndex: 10,
  },
  brandContainer: {
    position: 'absolute',
    height: '100%',
    width: '20%',
    top: 0,
    left: 0,
    zIndex: 100,
  },
  logoContainer: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    width: '20%',
    top: 0,
    left: '2.5%',
    zIndex: 100,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" style={{ marginBottom: 25, backgroundColor: '#491E94'}}>
      <Toolbar>
        <Box className={classes.logoContainer}>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;