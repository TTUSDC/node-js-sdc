import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { red, black } from '@material-ui/core/colors'
import DisplayContainer from 'components/Display/DisplayContainer.jsx'

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: black,
  }
})

class Layout extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <DisplayContainer />
      </MuiThemeProvider>
    );
  }
}

export default Layout;
