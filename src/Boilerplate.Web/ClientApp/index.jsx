import React from 'react';
import { createRoot } from 'react-dom/client';

import registerSW from './utils/register-sw';
import App from './App';

const element = document.getElementById('app');
const root = createRoot(element);

registerSW();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
