import React from "react";

const CrudCompoData = (props: any) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Middle Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Gender</th>
            <th scope="col">Blood Group</th>
            <th scope="col">degree</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((data: any, index: number) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.firstName}</td>
                <td>{data.middleName}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.gender}</td>
                <td>{data.bloodGroup}</td>
                <td>{data.degree}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => props.editItems(index)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => props.deleteItems(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CrudCompoData;
