import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function onIncrement() {
    console.log("External Increment Clicked");
    setCount(count + 1);
  }

  function onDecrement() {
    console.log("External Decrement Clicked");
    setCount(count - 1 > 0) ? count : 0; //Ye line i have written
  }
  return (
    <div>
      <h1>Counter:{count}</h1>
      <div>
        <button
          onClick={() => {
            console.log("Increment Clicked:");
            /*setCount(count + 1)*/
          }}
        >
          Increment By inline Method
        </button>

        <button
          onClick={() => {
            console.log("Decrement Clicked");
            setCount(count - 1) < 0 ? 0 : count; //ye line i have written
          }}
        >
          Decrement By Inline Method
        </button>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
