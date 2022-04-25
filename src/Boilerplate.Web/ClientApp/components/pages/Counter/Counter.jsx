import React, { useState } from 'react';

import Page from '~components/layout/Page';
import Styles from './Counter.styles';

function Counter() {
  const [value, setValue] = useState(0);

  return (
    <Page title="Counter">
      <Styles.Wrapper>
        <h1>Counter</h1>
        <Styles.Section>
          <Styles.Button type="button" onClick={() => setValue(value - 10)}>--</Styles.Button>
          <Styles.Button type="button" onClick={() => setValue(value - 1)}>-</Styles.Button>
          <Styles.Value>{value}</Styles.Value>
          <Styles.Button type="button" onClick={() => setValue(value + 1)}>+</Styles.Button>
          <Styles.Button type="button" onClick={() => setValue(value + 10)}>++</Styles.Button>
        </Styles.Section>
      </Styles.Wrapper>
    </Page>
  );
}

export default Counter;
