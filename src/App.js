import React, { useState } from "react"; 
import {Message} from './Message.js'
import "./App.css";

function App() {
  let [count, setCount] = useState(0)

    //setCount(2)
  
  return (
    <div>
      <Message counter={count}/>
      <h3>Hello the value of count is : {count}</h3>
      <button onClick={()=> setCount(++count)}>Update Counter</button>
    </div>
  )}

export default App;
