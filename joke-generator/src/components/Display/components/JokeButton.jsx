import React from 'react'
import Button from '@material-ui/core/Button'

import logger from 'utils/logger'

const JokeButton = (props) => {
  // Signals redux to fetch a joke
  const handleClick = () => {
    // props.generateJoke(props.source)
  }

  return (
    <Button onClick={handleClick}>{`${props.source}!`}</Button>
  )
}

export default JokeButton
