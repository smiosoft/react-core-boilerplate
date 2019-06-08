import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loading from './shared/Loading';

const Home = lazy(() => import(/* webpackChunkName: "home" */ './Home'));

const Routes = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Suspense>
);

export default Routes;
