import React from "react";

function User({user}) {
  console.log(user.name);
  console.log(user.age);
  console.log(user.email);
  console.log(user.job);
  console.log(user.education);
  
 
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <h3>{user.email}</h3>
      <h4>{user.job}</h4> 
      <h5>{user.education}</h5>   
    </div>
  );
}

export default User;