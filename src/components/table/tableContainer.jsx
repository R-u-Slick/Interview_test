import React, { useEffect, useState } from "react";
import { TestTable } from "./table";
import { InputFilter } from "../inputFilter/inputFilter";

export const TableContainer = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setAllUsers(users);
        setFilteredUsers(users);
      });
  }, []);

  const handleChange = (input) => {
    const filteredArray = allUsers.filter((user) =>
      user.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredUsers(filteredArray);
  };

  return (
    <>
      <InputFilter label={"Please, enter first name"} onChange={handleChange} />

      <TestTable users={filteredUsers} />
    </>
  );
};
