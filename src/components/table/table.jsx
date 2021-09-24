import React from "react";
import { Table } from "react-bootstrap";
import { PropTypes } from "prop-types";

export const TestTable = ({ users }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TestTable.propTypes = {
  users: PropTypes.array,
};

TestTable.defaultProps = {
  users: [],
};
