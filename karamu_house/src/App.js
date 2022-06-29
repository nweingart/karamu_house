import React from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles({
  container: {
    backgroundColor: '#491E94',
    height: 1000,
  },
  imageContainer: {
    marginTop: -25,
    height: 300,
    width: '100%',
    backgroundColor: 'white'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 25,
  },
  button: {
    height: 75,
    width: 200,
    marginTop: -15,
    borderRadius: 20,
    backgroundColor: 'goldenrod',
    color: 'black',
    fontFamily: 'Sans-Serif',
    fontWeight: 800,
    '&:hover': {
      backgroundColor: '#ffffff',
      boxShadow: 'none',
    }
  }
})

const App = () => {
  const classes = useStyles()
  return (
    <Box>
      <Navbar />
      <Box className={classes.container}>
        <Grid container>
          <Grid className={classes.imageContainer}  item xs={12}>
            <Box />
          </Grid>
          <Grid className={classes.imageContainer} item xs={12}>
            <Box />
          </Grid>
        </Grid>
        <Box className={classes.buttonContainer}>
          <Button className={classes.button}>
            Sign the Petition
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
