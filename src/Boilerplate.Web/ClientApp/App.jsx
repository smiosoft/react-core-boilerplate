import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

import Styles from './App.styles';
import Loader from './components/shared/Loader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ContentRouter from './routing/ContentRouter';
import themeManager from './style/theme-manager';

const Providers = lazy(() => import('./Providers'));

function App() {
  return (
    <Suspense fallback={<Loader theme={themeManager.getUserPreferencesOrDefault().theme} />}>
      <Providers>
        <Helmet titleTemplate="%s / React Core Boilerplate" defaultTitle="React Core Boilerplate" />
        <Styles.Wrapper>
          <Navbar />
          <ContentRouter />
          <Footer />
        </Styles.Wrapper>
      </Providers>
    </Suspense>
  );
}

export default App;
