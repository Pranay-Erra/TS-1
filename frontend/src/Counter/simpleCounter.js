import React, { useState } from "react";
import "./simpleCounter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const changeCount = (value) => {
    setCount((prevCount) => prevCount + value);
  };

  const Reset = () => {
    setCount(0);
  };

  const getColor = () => {
    return count > 0 ? "blue" : count < 0 ? "red" : "black";
  };

  return (
    <div className="counter-container">
      <h2 className="counter-value" style={{ color: getColor() }}>
        {count}
      </h2>
      <div className="button-container">
        <button className="counter-button increment" onClick={() => changeCount(1)}>
          Increment
        </button>
        <button className="counter-button decrement" onClick={() => changeCount(-1)}>
          Decrement
        </button>
        <button className="counter-button reset" onClick={Reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
