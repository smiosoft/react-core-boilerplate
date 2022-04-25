import React, { render } from 'react-dom';

import registerSW from './utils/register-sw';
import App from './App';

registerSW();
render(<App />, document.getElementById('app'));
