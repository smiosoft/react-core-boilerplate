import React from 'react';
import { render } from 'react-dom';

const root = document.createElement('div');
document.body.append(root);

render(<div>Hello World!</div>, root);
