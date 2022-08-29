import React from "react";
import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);
  useEffect(() => inputRef.current.focus());
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const backspace = () => {
    setResult(result.slice(0, -1));
  };
  const allclear = () => {
    setResult("");
  };
  const getresult = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("INVALID OPERATION");
    }
  };
  return (<>
  <h1>Simple Calculator</h1>
    <div className="calc_app">
      <form action="">
        <input type="text" value={result} ref={inputRef} />
      </form>
      <div className="keypad">
        <button id="clear" onClick={allclear}>
          AC
        </button>
        <button id="backspace" onClick={backspace}>
          C
        </button>
        <button name="+" onClick={handleClick}>
          +
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="-" onClick={handleClick}>
          -
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="*" onClick={handleClick}>
          &times;
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="/" onClick={handleClick}>
          &#xF7;
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>

        <button id="result" onClick={getresult}>
          =
        </button>
      </div>
    </div>
    </>
  );
}

export default App;
