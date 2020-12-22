import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRouter from './components/routing/AppRouter';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const App = () => (
  <Wrapper>
    <Helmet titleTemplate="%s / React Core Boilerplate" defaultTitle="React Core Boilerplate" />
    <GlobalStyle />
    <BrowserRouter>
      <Navbar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  </Wrapper>
);

export default App;
