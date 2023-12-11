// Component2.js
import React, { useState } from 'react';
import counter from './counter';

const setCounter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSub = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <counter onAdd={handleAdd} onSub={handleSub} count={count} />
    </div>
  );
};

export default setCounter;
