import React from 'react'
import Display from './components/Display.jsx'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchJokes, handleError } from 'redux/actions'

class DisplayContainer extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Display
          joke={this.props.joke}
          loading={this.props.loading}
          errorHandler={this.props.handleError}
          fetchJokes={this.props.fetchJokes}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  joke: state.get('joke'),
  loading: state.get('loading')
})

const mapDispatchToState = (dispatch) => {
  return bindActionCreators({
    fetchJokes,
    handleError
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToState)(DisplayContainer)
