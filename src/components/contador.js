import React, { useState } from 'react';

const Contador = (props) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    count = count++;
  };

  console.log(count);
  return (
    <div>
      <h1>Contador: {count}</h1>
    </div>
  );
};
