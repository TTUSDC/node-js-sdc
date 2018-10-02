import React from 'react'

import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

import styles from 'common/styles/buttons'

export const CreateJokeButton = (props) => {
  return (
    <Button
      variant='contained'
      color='secondary'
      disabled={props.loading}
      className={props.classes.root}
      onClick={props.toggleForm}
    >
      {"Create a new Joke!"}
    </Button>
  )
}

export default withStyles(styles)(CreateJokeButton)
