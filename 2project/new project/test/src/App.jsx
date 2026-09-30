import React from 'react';
import User from "./User.jsx";
import College from "./College.jsx";
import Student from "./Student.jsx";

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
const [student,setStudent]=React.useState();
  return (
    <div> 
      <h1>props in react js</h1>

{student &&<Student name={student}/>}
<button onClick={()=>setStudent('mihir')}>update student name</button>


    {/* <hr/>
      <College name={collegename[0]}/>
      <College name={collegename[1]}/>
      <College name={collegename[2]}/>
      <College name={collegename[3]}/>
      <College name={collegename[4]}/> */}

      <hr/>
      <User user={userObject} />
      <hr/>
      <User user={userObject2} />
      
    

    </div>
  )
}
export default App;