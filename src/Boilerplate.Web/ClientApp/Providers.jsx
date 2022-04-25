import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/store';
import ThemeProvider from './style/ThemeProvider';
import GlobalStyle from './style/GlobalStyle';

const propTypes = {
  children: PropTypes.PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

function Providers({ children }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <GlobalStyle />
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

Providers.propTypes = propTypes;

export default Providers;
