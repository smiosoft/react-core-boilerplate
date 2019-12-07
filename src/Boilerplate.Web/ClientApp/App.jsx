import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Helmet } from 'react-helmet';
import { Router } from 'react-router-dom';
import styled from 'styled-components';

import history from './lib/history';
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

const App = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          // eslint-disable-next-line no-console
          console.log('SW registered:', registration);
        }).catch((error) => {
          // eslint-disable-next-line no-console
          console.log('SW registration failed:', error);
        });
    });
  }

  return (
    <Wrapper>
      <Helmet titleTemplate="%s / React Core Boilerplate" defaultTitle="React Core Boilerplate" />
      <GlobalStyle />
      <Router history={history}>
        <Navbar />
        <AppRouter />
        <Footer />
      </Router>
    </Wrapper>
  );
};

export default hot(App);
