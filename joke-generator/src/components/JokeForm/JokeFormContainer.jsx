import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchJokes, handleError } from 'redux/actions'
import JokeForm from './components/JokeForm.jsx'
import CreateJokeButton from './components/CreateJokeButton.jsx'

export class JokeFormContainer extends React.PureComponent {
  render() {
    return(
      <React.Fragment>
        <JokeForm />
        <CreateJokeButton />
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
    handleError
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(JokeFormContainer)
