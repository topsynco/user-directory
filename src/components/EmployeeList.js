import React from "react";


// function EmployeeList(props) {
//     return (
//         <ul className="list-group">
//       {props.results.map(result => (
//         <li className="list-group-item" key={result.id}>
//           <img alt={result.title} className="img-fluid" src={result.picture.medium} />  <p>name</p>
//         </li>
//       ))}
//     </ul>
//     )
// }

function EmployeeList(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col" onClick={props.handleSorting}>Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map(result =>
                    <tr>
                        <th scope="row"><img alt={result.title} className="img-fluid" src={result.picture.medium} /></th>
                        <td>{result.name.first} {result.name.last} </td>
                        <td>{result.phone}</td>
                        <td> {result.email} </td>
                        <td> {result.dob.age} </td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default EmployeeList