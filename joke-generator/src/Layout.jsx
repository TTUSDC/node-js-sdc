import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { red, black } from '@material-ui/core/colors'
import { Provider } from 'react-redux'
import store from 'redux/store'
import DisplayContainer from 'components/Display/DisplayContainer.jsx'
import HeaderContainer from 'components/Header/HeaderContainer.jsx'
import SnackBarContainer from 'components/SnackBar/SnackBarContainer.jsx'
import FooterContainer from 'components/Footer/FooterContainer.jsx'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: red,
    secondary: black,
  }
})

console.log(process.env)

class Layout extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <HeaderContainer />
          <DisplayContainer />
          <SnackBarContainer />
          <FooterContainer />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default Layout;
