import Student from "./Student";

function College({ college }) {
  console.log(college);

  return (
    <div
      style={{
        backgroundColor: "#ccc",
        padding: "20px",
        borderBottom: "2px solid #000",
        margin: "20px",
        borderRadius: "10px",
      }}
    >
      <h1>Name: {college.name}</h1>
      <ul>
        <li>City: {college.city}</li>
        <li>Website: {college.website}</li>
        <li>
          <Student student={college.students} />
        </li>
      </ul>
    </div>
  );
}

export default College;