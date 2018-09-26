import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

import styles from './JokeButton.styles'

export const JokeButton = (props) => {
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

export default withStyles(styles)(JokeButton)
