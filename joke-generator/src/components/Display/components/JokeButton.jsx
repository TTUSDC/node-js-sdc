import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const JokeButton = (props) => {
  // Signals redux to fetch a joke
  const handleClick = () => {
    props.fetchJokes(props.link)
  }

  return (
    <Button
      variant='contained'
      color='secondary'
      disabled={props.loading}
      className={props.classes.root}
      onClick={handleClick}
    >
      {`${props.label}!`}
    </Button>
  )
}

const styles = (theme) => {
  return ({
    root: {
      margin: theme.spacing.unit,
      width: '200px',
      [theme.breakpoints.down(800)]: {
        width: '80%'
      }
    }
  })
}
export default withStyles(styles)(JokeButton)
