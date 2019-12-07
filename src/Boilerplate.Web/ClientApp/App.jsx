import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Helmet } from 'react-helmet';
import { Router } from 'react-router-dom';
import styled from 'styled-components';

import history from './lib/history';
import GlobalStyle from './GlobalStyle';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
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
        <h1>Test</h1>
      </Router>
    </Wrapper>
  );
};

export default hot(App);
