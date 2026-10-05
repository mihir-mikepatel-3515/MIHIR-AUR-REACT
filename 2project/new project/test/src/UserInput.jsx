import {useFormStatus} from 'react-dom';


function App() {

  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 5000));
    console.log("submit");
  };
  function CustomerfForm(){
    const {pending} = useFormStatus();
    console.log(pending);
    return(
      <form action={handleSubmit}>
        <input type="text" placeholder="Enter Name" />
        <br />
        <br />
        <input type="text" placeholder="Enter Password" />
        <br />
        <button type="submit" disabled={pending}>Submit</button>
      </form>
    )
  }

  return (
    <div>
      <CustomerfForm/>
       </div>
  );
}

export default App;