import React from 'react';
import ReactDOM from 'react-dom';

import registerSW from './utils/register-sw';
import App from './App';

const MOUNT_NODE = document.getElementById('app');

registerSW();
ReactDOM.render(<App />, MOUNT_NODE);
