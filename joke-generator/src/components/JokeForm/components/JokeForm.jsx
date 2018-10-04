import React from 'react'
import PropTypes from 'prop-types'
import { ModalView } from 'common/ModalView'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import styles from './JokeForm.styles.jsx'

export class JokeForm extends React.PureComponent {
  static defaultProps = {
    classes: {},
  }

  state = { newJoke: '' }

  handleJokeChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handleClick = () => {
    this.props.handleSubmit(this.state.newJoke)
    this.props.toggle()
  }

  render() {
    const { open, toggle, classes } = this.props
    const { newJoke } = this.state
    return (
      <ModalView
        open={open}
        toggle={toggle}
        fullScreen={false}
      >
        <div className={classes.root}>
          <TextField
            label='Enter a joke!'
            value={newJoke}
            onChange={this.handleJokeChange('newJoke')}
            margin='normal'
            multiline
            error={newJoke.length > 50}
            helperText={`${newJoke.length}/50 characters`}
          />
          <Button
            onClick={this.handleClick}
            className={classes.button}
            variant='contained'
            color='primary'
          >
            Submit
            <CloudUploadIcon />
          </Button>
        </div>
      </ModalView>
    )
  }
}

JokeForm.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  classes: PropTypes.shape({}),
}

export default withStyles(styles)(JokeForm)
