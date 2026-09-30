import React from 'react';
import User from "./User.jsx"
import College from "./College.jsx"

function App() {
  
  let userObject={
    name:"krishna",
    age:26,
    email:"krishna@gmail.com",
    job:"full stack designer",
    education:"B.Tech"
  }
   let userObject2={
    name:"mike",
    age:27,
    email:"mike@gmail.com",
    job:"full  designer",
    education:"B.com"
  }
  let collegename = ['IIT','PARUL','NIT','ROFEL','BITS'];

  return (
    <div> 
      <h1>props in react js</h1>
    
      <College name={collegename[0]}/>
      <College name={collegename[1]}/>
      <College name={collegename[2]}/>
      <College name={collegename[3]}/>
      <College name={collegename[4]}/>

      <hr/>
      <User user={userObject} />
      <hr/>
      <User user={userObject2} />
      
    

    </div>
  )
}
export default App;