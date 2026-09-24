import { useState } from 'react';


function App() {

let [counter , setCounter] = useState(15)  

// let counter = 15;
 
const addValue = () => {
setCounter(counter + 1);

}
const removeValue = () => {
  setCounter(counter - 1);
}
  return (
    <>
  <h1>chai aur react</h1>
  <h2>Counter Value:{counter}</h2>
<button onClick={addValue}>add value{counter}</button>
<br />
  <button onClick={removeValue}>remove value:{counter}</button>
  <br / >
 
    </>
  )
}

export default App
