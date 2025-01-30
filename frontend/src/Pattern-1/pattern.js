import React from "react";

const StarPattern = ({ rows }) => {
  const generatePattern = () => {
    let patternArray = [];
    for (let i = rows; i > 0; i--) {
      patternArray.push("*".repeat(i));
    }
    return patternArray;
  };

  return (
    <div style={{ fontFamily: "monospace", fontSize: "20px" }}>
      {generatePattern().map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  );
};

export default StarPattern;
