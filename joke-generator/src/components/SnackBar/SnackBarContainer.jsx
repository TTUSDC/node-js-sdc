import React from 'react'

import Snackbar from '@material-ui/core/Snackbar';

import { connect } from 'react-redux'

export class SnackBarContainer extends React.Component {
  render() {
    const { error, errMsg, success, succMsg } = this.props
    return (
      <Snackbar
        open={error || success}
        message={errMsg || succMsg}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  error: state.get('error'),
  errMsg: state.get('errMsg'),
  success: state.get('success'),
  succMsg: state.get('succMsg'),
})

export default connect(mapStateToProps)(SnackBarContainer)


