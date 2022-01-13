import React from 'react';

import { ThemeProvider } from 'styled-components'

import Card from './components/shared/Card/Card'

import GlobalStyles from './assets/styles/global';
import theme from './assets/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Card />
      <GlobalStyles />
    </ThemeProvider>

  );
}

export default App;
