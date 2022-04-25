import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Emoji = styled.div`
  font-size: 10rem;
  user-select: none;
  cursor: pointer;
`;

export default { Wrapper, Emoji };
