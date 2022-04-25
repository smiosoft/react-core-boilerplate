import styled from 'styled-components';
import { readableColor } from 'polished';

import media from '~style/media';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${media.small`
    flex-direction: column-reverse;
  `};
`;

const Value = styled.div`
  min-width: 5rem;
  padding: 1rem;
  font-size: x-large;
`;

const Button = styled.button`
  margin: .25rem;
  width: 3rem;
  height: 3rem;
  color: ${({ theme }) => theme.colours.button_colour};
  font-size: larger;
  background-color: ${({ theme }) => theme.colours.button_background_colour};
  border-style: solid;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colours.global_highlight};
  border-radius: 50%;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colours.global_highlight};
    color: ${({ theme }) => readableColor(theme.colours.global_highlight)};
  }
`;

export default {
  Wrapper,
  Section,
  Value,
  Button,
};
