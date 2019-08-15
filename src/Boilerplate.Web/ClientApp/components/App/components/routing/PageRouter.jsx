import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Loader } from '../shared';

const PageRouter = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route
        exact
        path="/"
        component={lazy(() => import(/* webpackChunkName: "home" */ '../pages/Home'))}
      />
      <Route
        exact
        path="/counter"
        component={lazy(() => import(/* webpackChunkName: "counter" */ '../pages/Counter'))}
      />
      <Route component={lazy(() => import(/* webpackChunkName: "not-found" */ '../pages/NotFound'))} />
    </Switch>
  </Suspense>
);

export default PageRouter;
