import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import GroupIcon from '@material-ui/icons/Group'
import HomeIcon from '@material-ui/icons/Home'
import LocationOnIcon from '@material-ui/icons/LocationOn'

const styles = {
  root: {
    width: '100%'
  }
}

class FooterContainer extends React.Component {
  handleLink = (event, value) => {
    switch(value) {
      case(0):
        window.open('https://acmttu.org/')
        break
      case(1):
        window.open('https://acmttu.org/explore/projects')
        break
      case(2):
        window.open('https://github.com/TTUSDC/node-js-sdc')
        break
      default:
        break
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <BottomNavigation
        onChange={this.handleLink}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="ACM TTU" icon={<HomeIcon />} />
        <BottomNavigationAction label="More Groups" icon={<GroupIcon />} />
        <BottomNavigationAction label="Git Repo" icon={<LocationOnIcon />} />
      </BottomNavigation>
      );
  }
}

export default withStyles(styles)(FooterContainer)
