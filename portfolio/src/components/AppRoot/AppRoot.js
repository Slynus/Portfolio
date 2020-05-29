import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

import './AppRoot.css';

let theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Raleway',
      'Roboto'
    ].join(','),
  },
});


theme = responsiveFontSizes(theme);


function AppRoot() {

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <h1>Hello world</h1>
        {/* <WebsiteWrapper /> */}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default AppRoot;
