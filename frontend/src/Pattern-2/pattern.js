import React from "react";

const StarPattern2 = ({ rows }) => {
  const generatePattern = () => {
    let patternArray = [];
    for (let i = 1; i <= rows; i++) {
      let leftStars = "*".repeat(i); 
      let spaces = " ".repeat(2 * (rows - i)); 
      let rightStars = "*".repeat(i); 
      patternArray.push(leftStars + spaces + rightStars);
    }
    return patternArray;
  };

  return (
    <div style={{ fontFamily: "monospace", fontSize: "20px", whiteSpace: "pre" }}>
      {generatePattern().map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  );
};

export default StarPattern2;
