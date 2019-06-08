import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <button type="button" onClick={increaseCounter}>
        {counter}
      </button>
    </div>
  );
};

export default Counter;
