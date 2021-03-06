import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import Cards from './pages/CardPage/Cards';
import Home from './pages/Home/Home';
import Manage from './pages/ManageCards/Manage';

import GlobalStyles from './assets/styles/global';
import theme from './assets/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='cards' element={ <Cards /> } />
        <Route path='manage' element={ <Manage /> } />
      </Routes>
      <GlobalStyles />
    </ThemeProvider>

  );
}

export default App;
