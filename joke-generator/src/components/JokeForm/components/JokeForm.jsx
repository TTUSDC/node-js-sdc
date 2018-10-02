import React from 'react'
import { ModalView } from 'common/ModalView'

export const JokeForm = (props) => {
  return (
    <ModalView
      open={props.open}
      toggle={props.toggle}
    >
      "Hello World"
    </ModalView>

  )
}

export default JokeForm
