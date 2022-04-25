import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ThemeProvider as StyleProvider } from 'styled-components';

import { getThemeName } from '~redux/theme/theme-selectors';
import themes from '../themes';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

function ThemeProvider({ children }) {
  const themeName = useSelector(getThemeName);

  return (
    <StyleProvider theme={themes[themeName]}>
      {children}
    </StyleProvider>
  );
}

ThemeProvider.propTypes = propTypes;

export default ThemeProvider;
