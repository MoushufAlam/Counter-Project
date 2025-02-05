import { useState } from 'react'
import './App.css'

function App() {

  let [counter , setCounter] = useState(0);

  const addValue = () => {
    counter ++;
    setCounter(counter);
  }
  const removeValue = () => {
    counter --;
    setCounter(counter);
  }


  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Increase Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
