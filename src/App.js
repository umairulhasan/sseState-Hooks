import React, { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0)

    setCount(2)
  
  return (
    <div>
      <h3>Hello the value of count is : {count}</h3>
      <button onClick={()=> setCount(++count)}>Update Counter</button>
    </div>
  )}

export default App;
