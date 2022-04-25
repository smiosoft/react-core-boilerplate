import React from 'react';

import Page from '~components/layout/Page';
import useCounter from '~hooks/useCounter';
import Styles from './Counter.styles';

function Counter() {
  const counter = useCounter(0);

  return (
    <Page title="Counter">
      <Styles.Wrapper>
        <h1>Counter</h1>
        <Styles.Section>
          <Styles.Button type="button" onClick={() => counter.decreaseBy(10)}>--</Styles.Button>
          <Styles.Button type="button" onClick={() => counter.decreaseBy(1)}>-</Styles.Button>
          <Styles.Value>{counter.value}</Styles.Value>
          <Styles.Button type="button" onClick={() => counter.increaseBy(1)}>+</Styles.Button>
          <Styles.Button type="button" onClick={() => counter.increaseBy(10)}>++</Styles.Button>
        </Styles.Section>
      </Styles.Wrapper>
    </Page>
  );
}

export default Counter;
