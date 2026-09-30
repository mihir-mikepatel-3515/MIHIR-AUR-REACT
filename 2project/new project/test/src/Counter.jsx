import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const[rCount,setRCount]=useState(0);

  return (
    <div>
      <h1>counter: {count}</h1>
<button onClick={() => setCount(count + 1)}>Increment</button>
<br/>
<button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;