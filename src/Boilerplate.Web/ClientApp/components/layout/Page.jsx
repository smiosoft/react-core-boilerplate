import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

const Wrapper = styled.main`
  flex-grow: 1;
`;

const Page = ({ children, title }) => (
  <Wrapper>
    <Helmet title={title} />
    {children}
  </Wrapper>
);

Page.propTypes = propTypes;

export default Page;
