import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchJokes, handleError, createJoke } from 'redux/actions'
import JokeForm from './components/JokeForm.jsx'
import CreateJokeButton from './components/CreateJokeButton.jsx'

export class JokeFormContainer extends React.Component {
  state = {
    open: false,
  }

  // Open and closes the form for creating jokes
  toggleForm = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  // Handles the submission of the joke if one is passed
  handleSubmit = (joke) => {
    if (joke) this.props.createJoke(joke)
  }

  render() {
    return(
      <div style={{ textAlign: 'center', margin: '25px 0px' }}>
        <JokeForm
          open={this.state.open}
          toggle={this.toggleForm}
          handleSubmit={this.handleSubmit}
        />
        <CreateJokeButton
          toggleForm={this.toggleForm}
        />
      </div>
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
    createJoke,
  }, dispatch)
}

JokeFormContainer.propTypes = {
  createJoke: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(JokeFormContainer)
