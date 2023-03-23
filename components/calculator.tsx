import React, { useState } from 'react';

function Calculator() {
const [result, setResult] = useState("");

const handleClick = e => {
    setResult(result.concat(e.target.name));
}

const handleClear = () => {
    setResult("");
}

const handleBackspace = () => {
    setResult(result.slice(0, -1));
}

const handleCalculate = () => {
    try {
    setResult(eval(result).toString());
    } catch (error) {
    setResult("Error");
    }
}

  return (
    <div className="calculator">
      <div className="result">{result}</div>
      <div className="buttons">
        <button className="operator" onClick={handleClear} name="AC">AC</button>
        <button className="operator" onClick={handleBackspace} name="C">C</button>
        <button className="operator" onClick={handleClick} name="/">/</button>
        <button onClick={handleClick} name="7">7</button>
        <button onClick={handleClick} name="8">8</button>
        <button onClick={handleClick} name="9">9</button>
        <button className="operator" onClick={handleClick} name="*">x</button>
        <button onClick={handleClick} name="4">4</button>
        <button onClick={handleClick} name="5">5</button>
        <button onClick={handleClick} name="6">6</button>
        <button className="operator" onClick={handleClick} name="-">-</button>
        <button onClick={handleClick} name="1">1</button>
        <button onClick={handleClick} name="2">2</button>
        <button onClick={handleClick} name="3">3</button>
        <button className="operator" onClick={handleClick} name="+">+</button>
        <button onClick={handleClick} name="0">0</button>
        <button onClick={handleClick} name=".">.</button>
        <button className="operator" onClick={handleCalculate} name="=">=</button>
      </div>
    </div>
  );
}

export default Calculator;