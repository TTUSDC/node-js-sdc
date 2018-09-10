import React from 'react'
import Display from './components/Display.jsx'

class DisplayContainer extends React.Component {
  render() {
    return (
      <Display
        errorHandler={this.props.handleError}
        generateJoke={this.props.generateJoke}
      />
    )
  }
}

export default DisplayContainer
