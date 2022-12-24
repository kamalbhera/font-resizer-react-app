import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [heading, setHeading] = useState();
  const [fontSize, setFontsize] = useState(12);
  const hendelChange = (e) => {
    let result;
    console.log(e.target.id);
    switch (e.target.id) {
      case 'increment':
        result = fontSize + 2
        break;
      case 'decrement':
        result = fontSize - 2;
          break;
      default:
        break;  
    }
    setFontsize(result)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Font <code>Resizer</code> React Hooks.
        </p>

        <div class="input-group plus-minus-input">
          <div class="input-group-button">
            <button type="button" id="decrement" onClick={hendelChange} class="button hollow circle" data-quantity="minus" data-field="quantity">
            -
            </button>
          </div>
          <input class="input-group-field" onChange={(e) => setHeading(e.target.value)} type="text" name="quantity" />
          <div class="input-group-button">
            <button type="button" id="increment" onClick={hendelChange} class="button hollow circle" data-quantity="plus" data-field="quantity">
              +
            </button>
          </div>
        </div>
        <div className="output" style={{ fontSize: `${fontSize}px` }}>
        {heading}
        </div>
      </header>
    </div>
  );
}

export default App;
