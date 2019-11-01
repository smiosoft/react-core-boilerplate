import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import media from '../../utils/style/media';

const propTypes = {
  text: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  margin: 0 1rem;
  text-transform: uppercase;
  text-align: center;
`;

const Text = styled.h1`
  margin: 0;
  font-size: 4em;

  ${media.small`
  font-size: 12vw;
  `};
`;

const Title = ({ text }) => (
  <Wrapper>
    <Text>{text}</Text>
  </Wrapper>
);

Title.propTypes = propTypes;

export default Title;