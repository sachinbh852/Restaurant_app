import React, { useState } from "react";

function Calculator() {
  // Declare state variables for the input values and the result
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  // Define a function to handle the change of input values
  const handleChange = (e) => {
    // Get the name and value of the input element
    const { name, value } = e.target;
    // Convert the value to a number
    const num = Number(value);
    // Update the corresponding state variable
    if (name === "num1") {
      setNum1(num);
    } else if (name === "num2") {
      setNum2(num);
    }
  };

  // Define a function to handle the click of operation buttons
  const handleClick = (e) => {
    // Get the name of the button element
    const { name } = e.target;
    // Perform the corresponding operation and update the result state variable
    if (name === "add") {
      setResult(num1 + num2);
    } else if (name === "subtract") {
      setResult(num1 - num2);
    } else if (name === "multiply") {
      setResult(num1 * num2);
    } else if (name === "divide") {
      setResult(num1 / num2);
    }
  };

  // Return the JSX code for rendering the calculator component
  return (
    <div className="calculator">
      <h1>React JS Calculator</h1>
      <div className="inputs">
        <input
          type="number"
          name="num1"
          value={num1}
          onChange={handleChange}
          placeholder="Enter first number"
        />
        <input
          type="number"
          name="num2"
          value={num2}
          onChange={handleChange}
          placeholder="Enter second number"
        />
      </div>
      <div className="buttons">
        <button name="add" onClick={handleClick}>
          +
        </button>
        <button name="subtract" onClick={handleClick}>
          -
        </button>
        <button name="multiply" onClick={handleClick}>
          *
        </button>
        <button name="divide" onClick={handleClick}>
          /
        </button>
      </div>
      <div className="result">
        <p>The result is: {result}</p>
      </div>
    </div>
  );
}

export default Calculator;
