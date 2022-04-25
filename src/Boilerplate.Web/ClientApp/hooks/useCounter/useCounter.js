import { useState } from 'react';

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  return {
    value: count,
    increaseBy: (amount) => setCount(count + amount),
    decreaseBy: (amount) => setCount(count - amount),
    reset: () => setCount(initialCount),
  };
}

export default useCounter;
