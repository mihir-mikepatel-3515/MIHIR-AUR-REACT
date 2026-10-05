import React from 'react'
import {useState} from 'react';

function Wrapper() {
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
  return (
    <div>
        <h1> Controller component</h1>
        <br/>
            <input value={name} type="text" placeholder="Enter your name"
            onChange={(event)=>setName(event.target.value)}/>
            <br/>
            <input value={password} type="text" placeholder="Enter your password"
             onChange={(event)=>setPassword(event.target.value)}/>
            <br/>
            <input  value={email} type="text" placeholder="Enter your email"
             onChange={(event)=>setEmail(event.target.value)}/>
            <br/>
            <button>submmit</button>
            <br/>
            <button onClick={()=>{setName("");setPassword("");setEmail("")}}>reset</button>
      

        <h1>{name} </h1>
        <h1>{password} </h1>
        <h1>{email} </h1>
       
    </div>
  )
}

export default Wrapper;