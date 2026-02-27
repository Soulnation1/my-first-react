import React, { useState } from "react";

const CountingApp = () => {
  const [count, setCount] = useState(0);
  const [inputValue,setInputValue] = useState("10")


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="flex flex-col  items-center justify-center p-8 bg-white rounded-2xl shadow-2xl w-96">
        <h1 className="text-5xl font-bold text-slate-800 mb-8">{count}</h1>

        <div className="mb-8 w-full flex gap-4">
          <input
            type="text"
            placeholder="Enter value"
            value={inputValue}
            onChange={(e)=> {setInputValue(e.target.value)}}
            className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-blue-500 text-center text-lg font-semibold"
          />
          <button
            onClick={() => setCount(prevCount => prevCount + Number(inputValue))}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white  font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Start
          </button>
        </div>

        <div className="flex gap-4 w-full">
          <button
            onClick={() => setCount((prevCount) => prevCount + 1)}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Increment
          </button>
          <button
            onClick={() => setCount(0)}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Reset
          </button>
          <button
            onClick={() => setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0 ))}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountingApp;
