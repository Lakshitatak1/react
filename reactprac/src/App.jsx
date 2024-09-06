import { useState } from "react";
function App() {
  let [counter,setCounter]=useState(5);
  const addvalue = ()=>{
    counter=counter+1;
    setCounter(counter);
  }
  const removevalue = ()=>{
    counter=counter-1;
    setCounter(counter);
  }
  return (
    <>
      <h1>hey i am vite</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addvalue}>Add value</button>
      <br></br>
      <button onClick={removevalue}>Remove value</button>
    </>
  )
}
export default App
