function Test() {
    function callFun(){
        alert("function called")
    }
  return (
    <div>
      <div>
        <h1>full stack developer</h1>
        <img
          src="https://www.webstackacademy.com/wp-content/uploads/2023/01/Full-Stock-Hero.png"
          alt="Full Stack Developer"
          class="photo"
          width="250"
        />
        <ul>
          <li>Invent new traffic lights</li>
          <li>Rehearse a movie scene</li>
          <li>Improve the spectrum technology</li>
        </ul>
        <button onClick={callFun}>Click Me</button>

      
      </div>
    </div>
  );
}

export default Test;
