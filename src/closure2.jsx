import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onCountChange = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  console.log(count); //why it is coming twice

  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={onCountChange}>Increment</button>
    </div>
  );
};

export default Counter;
