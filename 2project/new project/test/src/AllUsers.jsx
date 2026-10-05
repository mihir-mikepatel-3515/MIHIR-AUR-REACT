const AllUsers = ({data}) => {
    return(
        <div style={{
            border: "1px solid green",
            padding: "10px",
            margin: "10px",
            width: "400px",
            borderRadius: "10px"
        }}>
           <h3>
            Name: <span style={{color:'green'}}>{data.name}</span>
            </h3>
            <h3>
            Age: <span style={{color:'green'}}>{data.age}</span>
            </h3>
            <h3>
            Gender: <span style={{color:'green'}}>{data.gender}</span>
            </h3>
        </div>  
    )
}

export default AllUsers;