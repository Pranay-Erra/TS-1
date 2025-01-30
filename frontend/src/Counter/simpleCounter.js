import React, { useState } from "react";
import "./simpleCounter.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  const Increment=()=>{
    setCount(count + 1)
  }

  const Decrement=()=>{
    setCount(count - 1)
  }

  const Reset=()=>{
    setCount(0)
  }
  const getColor = () => {
    return count > 0 ? "blue" : count < 0 ? "red" : "black";
  };

  return (
    <div>
      <h2 style={{ color: getColor() }}>{count}</h2>
      <button onClick={Increment} >Increment</button>
      <button onClick={Decrement} >Decrement</button>
      <button onClick={Reset} >Reset</button>
    </div>
  );
};



export default Counter;
