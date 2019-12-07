
import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loader from '../shared/Loader';
import Page from '../layout/Page';

const Home = lazy(() => import(/* webpackChunkName: "home" */ '../pages/Home'));
const Counter = lazy(() => import(/* webpackChunkName: "counter" */ '../pages/Counter'));
const NotFound = lazy(() => import(/* webpackChunkName: "not-found" */ '../pages/NotFound'));

const AppRouter = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route exact path="/">
        <Page title="Home">
          <Home />
        </Page>
      </Route>

      <Route exact path="/counter">
        <Page title="Counter">
          <Counter />
        </Page>
      </Route>

      <Route>
        <Page title="Page Not Found">
          <NotFound />
        </Page>
      </Route>
    </Switch>
  </Suspense>
);

export default AppRouter;
