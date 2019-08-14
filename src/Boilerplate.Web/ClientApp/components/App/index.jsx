import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './utils/style/globalStyle';
import {
  Footer,
  Header,
  Main,
  Navbar,
} from './components/layout';
import PageRouter from './components/routing/PageRouter';
import { GitHub } from './components/shared/icons';

const App = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        // eslint-disable-next-line no-console
        console.log('SW registered:', registration);
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log('SW registration failed:', error);
      });
    });
  }

  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s / React Core Boilerplate" defaultTitle="React Core Boilerplate" />
      <GlobalStyle />
      <Header>
        <Navbar />
      </Header>
      <Main>
        <PageRouter />
      </Main>
      <Footer>
        <a href="https://github.com/smiosoft/react-core-boilerplate" aria-label="github" target="_blank" rel="noopener noreferrer">
          <GitHub fill="white" height="2rem" />
        </a>
      </Footer>
    </BrowserRouter>
  );
};

export default hot(App);
