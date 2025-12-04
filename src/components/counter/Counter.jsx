import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);

    // count = count + 1;
  };

  const subOne = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h2>{count}</h2>
      <br />
      <button onClick={addOne}>add one</button>
      <br />
      <button onClick={subOne}>sub one</button>
    </>
  );
}

export default Counter;
