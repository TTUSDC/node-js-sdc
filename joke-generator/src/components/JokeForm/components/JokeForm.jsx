import React from 'react'
import { ModalView } from 'common/ModalView'

export const JokeForm = (props) => {
  const { open, toggle } = props
  return (
    <ModalView
      open={open}
      toggle={toggle}
    >
      {'Hello World'}
    </ModalView>

  )
}

export default JokeForm
