import React from 'react'

import Snackbar from '@material-ui/core/Snackbar';

import { connect } from 'react-redux'

export class SnackBarContainer extends React.Component {
  render() {
    return (
      <Snackbar
        open={this.props.error}
        message={this.props.errMsg}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  error: state.get('error'),
  errMsg: state.get('errMsg')
})

export default connect(mapStateToProps)(SnackBarContainer)


