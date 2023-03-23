import React, { useState } from 'react';

function CalculatorPretty() {
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
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-64 h-80 rounded-xl shadow-md bg-gray-800 text-white p-4">
        <div className="text-right text-2xl">{result}</div>
        <div className="grid grid-cols-4 gap-2 mt-4">
          <button className="col-span-2 rounded-md p-2 bg-gray-600 hover:bg-gray-700" onClick={handleClear}>AC</button>
          <button className="rounded-md p-2 bg-gray-600 hover:bg-gray-700" onClick={handleBackspace}>C</button>
          <button className="rounded-md p-2 bg-yellow-500 hover:bg-yellow-600" onClick={handleClick} name="/">/</button>
          <button className="rounded-md p-2 bg-gray-700 hover:bg-gray-800" onClick={handleClick} name="7">7</button>
          <button className="rounded-md p-2 bg-gray-700 hover:bg-gray-800" onClick={handleClick} name="8">8</button>
          <button className="rounded-md p-2 bg-gray-700 hover:bg-gray-800" onClick={handleClick} name="9">9</button>
          <button className="rounded-md p-2 bg-yellow-500 hover:bg-yellow-600" onClick={handleClick} name="*">x</button>
          <button className="rounded-md p-2 bg-gray-700 hover:bg-gray-800" onClick={handleClick} name="4">4</button>
          <button className="rounded-md p-2 bg-gray-700 hover:bg-gray-800" onClick={handleClick} name="5">5</button>
          <button className="rounded-md p-2 bg-gray-700 hover:bg-gray-800" onClick={handleClick} name="6">6</button>
          <button className="rounded-md p-2 bg-yellow-500 hover:bg-yellow-600" onClick={handleClick} name="-">-</button>
          <button className="rounded-md p-2 bg-gray-700 hover:bg-gray-800" onClick={handleClick} name="1">1</button>
          <button className="rounded-md p-2 bg-gray-700 hover:bg-gray-800" onClick={handleClick} name="2">2</button>
          <button className="rounded-md p-2 bg-gray-700 hover:bg-gray-800" onClick={handleClick} name="3">3</button>
          <button className="rounded-md p-2 bg-yellow-500 hover:bg-yellow-600" onClick={handleClick} name="+">+</button>
          <button className="rounded-md p-2 bg-gray-700 hover:bg-gray-800 col-span-2" onClick={handleClick} name="0">0</button>
          <button className="rounded-md p-2 bg-gray-700 hover:bg-gray-800" onClick={handleClick} name=".">.</button>
          <button className="rounded-md p-2 bg-yellow-500 hover:bg-yellow-600" onClick={handleCalculate} name="=">=</button>
        </div>
      </div>
    </div>
  );
}

export default CalculatorPretty;