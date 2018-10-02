import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchJokes, handleError, createJoke } from 'redux/actions'
import JokeForm from './components/JokeForm.jsx'
import CreateJokeButton from './components/CreateJokeButton.jsx'
import logger from 'utils/logger'

export class JokeFormContainer extends React.Component {
  state = {
    open: false,
  }

  // Open and closes the form for creating jokes
  toggleForm = () => {
    this.setState({
      open: !this.state.open
    })
  }

  // Handles the submission of the joke if one is passed
  handleSubmit = (joke) => {
    if (joke) this.props.createJoke(joke)
  }

  render() {
    return(
      <React.Fragment>
        <JokeForm
          open={this.state.open}
          toggle={this.toggleForm}
        />
        <CreateJokeButton
          toggleForm={this.toggleForm}
        />
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return({
    loading: state.get('loading'),
  })
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchJokes,
    handleError,
    createJoke
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(JokeFormContainer)
