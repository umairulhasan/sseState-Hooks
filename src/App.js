import React, { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(1);
  setCounter(2);
  return (
    <div>
      <h1>Hello{counter}</h1>
    </div>
  )}

export default App;
