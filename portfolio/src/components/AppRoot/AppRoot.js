import React from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

import './AppRoot.css';
import PortfolioWrapper from '../PortfolioWrapper/PortfolioWrapper';

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
        <Container maxWidth="lg">
        <PortfolioWrapper />
      
        </Container>
        </ThemeProvider>
    </React.Fragment>
  );
}

export default AppRoot;
