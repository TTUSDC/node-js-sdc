import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => {
  return ({
    root: {
      flexGrow: 1
    },
    toolbar: {
      justifyContent: 'center'
    }
  })
}

const Header = (props) => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="title"
            color="inherit"
            align='center'
          >
            ACM Web Development
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(Header)

