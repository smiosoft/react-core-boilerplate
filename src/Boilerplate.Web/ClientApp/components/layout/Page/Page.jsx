import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

import Styles from './Page.styles';

const propTypes = {
  children: PropTypes.PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

function Page({ children, title }) {
  return (
    <Styles.Wrapper>
      <Helmet title={title} />
      {children}
    </Styles.Wrapper>
  );
}

Page.propTypes = propTypes;

export default Page;
