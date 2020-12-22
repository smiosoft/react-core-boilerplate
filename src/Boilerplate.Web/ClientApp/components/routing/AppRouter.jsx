
import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loader from '../shared/Loader';

const Home = lazy(() => import(/* webpackChunkName: "home" */ '../pages/Home'));
const Counter = lazy(() => import(/* webpackChunkName: "counter" */ '../pages/Counter'));
const NotFound = lazy(() => import(/* webpackChunkName: "not-found" */ '../pages/NotFound'));

const AppRouter = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/counter" component={Counter} />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default AppRouter;
