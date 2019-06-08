import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './utils/style/globalStyle';
import { Header, Main, Footer } from './components/layout';
import Routes from './components/Routes';

import 'modern-normalize/modern-normalize.css';

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
    <React.Fragment>
      <Helmet titleTemplate="%s / React Core Boilerplate" defaultTitle="React Core Boilerplate" />
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Main>
          <Routes />
        </Main>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default hot(App);
