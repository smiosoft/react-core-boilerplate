import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import(/* webpackChunkName: "home" */ '~components/pages/Home'));
const Counter = lazy(() => import(/* webpackChunkName: "counter" */ '~components/pages/Counter'));
const NotFound = lazy(() => import(/* webpackChunkName: "not-found" */ '~components/pages/NotFound'));

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
