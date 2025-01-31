import React from "react";

const StarPattern2 = ({ rows }) => {
  const generatePattern = () => {
    let patternArray = [];
    for (let i = 1; i <= rows; i++) {
      let leftStars = "";
      for (let j = 0; j < i; j++) {
        leftStars += "*";
      }
      
      let spaces = "";
      for (let j = 0; j < 2 * (rows - i); j++) {
        spaces += " ";
      }
      
      let rightStars = "";
      for (let j = 0; j < i; j++) {
        rightStars += "*";
      }
      
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
