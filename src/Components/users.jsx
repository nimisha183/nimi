import React from "react";

function Users(props) {
  return (
    <table>
      <thead>
        <th>User Registries</th>
        <tr>
          <th>Name</th><th>Surname</th>
          <th>Date of Birth</th>
          <th></th>
          <th>Age</th>
          <th></th>
          <th>Id</th>
          <th></th>
          <th>Gender</th>
          <th></th>
          <th>Dept</th>
        </tr>
      </thead>
      {props.users.map((v, i) => {
        return (
          <tr>
            <th>{v[0]}</th>
            <th>{v[1]}</th>
            <th>{v[2]}</th>
            <th>{v[3]}</th>
            <th>{v[4]}</th>
            <th>{v[5]}</th>
            <th>{v[6]}</th>
            <th>{v[7]}</th>
            <th>{v[8]}</th>
            <th>{v[9]}</th>
            <th>{v[10]}</th>
          </tr>
        );
      })}
    </table>
  );
}

export default Users;
