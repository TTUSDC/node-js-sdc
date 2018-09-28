import React from 'react'
import CreateJokeButton from './CreateJokeButton.jsx'

export const JokeForm = (props) => {
  return (
    <React.Fragment>
      <CreateJokeButton loading={props.loading} />
    </React.Fragment>
  )
}

export default JokeForm
