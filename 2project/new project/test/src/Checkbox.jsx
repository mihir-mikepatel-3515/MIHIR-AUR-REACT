import React from 'react'
import {useState} from 'react';

function Checkbox() {
    const [skills,setSkills]=useState([]);
    const handleChange = (event) => {
        console.log(event.target.value, event.target.checked);
        if(event.target.checked){
            setSkills([...skills ,event.target.value]);
        }
        else{
            setSkills([...skills.filter((skill)=>skill!==event.target.value)]);
        }
    }
        
  return (
    <div>
      <h1>Checkbox</h1>
      <h3>select your skills</h3>
      <input onChange={handleChange} type="checkbox" id="html" value="html" />
      <label htmlFor="html">HTML</label>
      <br />
      <br />
       <input onChange={handleChange} type="checkbox" id="php" value="php" />
      <label type="checkbox" htmlFor="php">PHP</label>
      <br />
      <br />
      <input onChange={handleChange}      type="checkbox" id="javascript" value="javascript" />
      <label htmlFor="javascript">javascript</label>
      <br />
      <br />
      <input onChange={handleChange}  type="checkbox" id="python" value="python" />
      <label htmlFor="python">python</label>
      <br />
      <br />
      <input onChange={handleChange} type="checkbox" id="c++" value="c++" />
      <label htmlFor="c++">c++</label>
      <br />
      <br />
      <h1>Selected skills: {skills.join(",     ")}</h1>
    </div>
  );
}

export default Checkbox;