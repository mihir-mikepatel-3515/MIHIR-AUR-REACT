const Student = ({student}) => {
  return (
    <div>
      <h3>students</h3>
      {student.map((student, index) => (
        <ul
          key={index}
          style={{
            backgroundColor: "#fff",
            border: "1px solid green",
            borderRadius: "10px",
            padding: "15px 25px",
            margin: "10px auto",
            textAlign: "left",
            listStyleType: "none",
            width: "350px",
          }}
        >
          <li>Name: {student.name}</li>
          <li>Age: {student.age}</li>
          <li>Gender: {student.gender}</li>
          <li>Email: {student.email}</li>
          <li>Job: {student.job}</li>
          <li>Education: {student.education}</li>
        </ul>
      ))}
    </div>
  );
}
export default Student;