import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { red, black } from '@material-ui/core/colors'
import { Provider } from 'react-redux'
import store from 'redux/store'

import DisplayContainer from 'components/Display/DisplayContainer.jsx'
import HeaderContainer from 'components/Header/HeaderContainer.jsx'
import SnackBarContainer from 'components/SnackBar/SnackBarContainer.jsx'
import FooterContainer from 'components/Footer/FooterContainer.jsx'
import JokeFormContainer from 'components/JokeForm/JokeFormContainer.jsx'

import { hot } from 'react-hot-loader'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: black,
    secondary: red,
  }
})

class Layout extends React.Component {
  state = {
    open: false
  }

  toggleModal = () => {
    this.setState({
      ...this.state,
      open: !this.state.open
    })
  }

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <HeaderContainer />
          <DisplayContainer />
          <SnackBarContainer />
          <JokeFormContainer />
          <FooterContainer />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default hot(module)(Layout);
