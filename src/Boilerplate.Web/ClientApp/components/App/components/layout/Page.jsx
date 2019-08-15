import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import types from '../../types';

const propTypes = {
  children: types.children,
  title: PropTypes.string,
};

const defaultProps = {
  children: null,
  title: '',
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Page = ({ children, title }) => (
  <Wrapper>
    <Helmet title={title} />
    {children}
  </Wrapper>
);

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
