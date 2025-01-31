import React, { useState } from "react";

const CounterDiff = () => {
  const [count, setCount] = useState(0);

 
  const handleDirectIncrement = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  
  const handleFunctionalIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div style={{ textAlign: "center", fontSize: "20px" }}>
      <h2>Count: {count}</h2>
      <button onClick={handleDirectIncrement}>
        Direct Increment (+3) 
      </button>
      <button onClick={handleFunctionalIncrement}>
        Functional Increment (+3) 
      </button>
    </div>
  );
};

export default CounterDiff;
