
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Loader from '../shared/Loader';

const Home = lazy(() => import(/* webpackChunkName: "home" */ '../pages/Home'));
const Counter = lazy(() => import(/* webpackChunkName: "counter" */ '../pages/Counter'));
const NotFound = lazy(() => import(/* webpackChunkName: "not-found" */ '../pages/NotFound'));

const AppRouter = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/counter" element={<Counter />} />
      <Route element={<NotFound />} />
    </Routes>
  </Suspense>
);

export default AppRouter;
