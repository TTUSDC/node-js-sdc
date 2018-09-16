import React from 'react'
import Button from '@material-ui/core/Button'

const JokeButton = (props) => {
  // Signals redux to fetch a joke
  const handleClick = () => {
    props.fetchJokes(props.link)
  }

  return (
    <Button onClick={handleClick}>{`${props.label}!`}</Button>
  )
}

export default JokeButton
