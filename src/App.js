import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const DUMMY_DATA = [
  {
    id: "u1",
    username: "Facu",
    age: 30,
  },
  {
    id: "u2",
    username: "Tuti",
    age: 28,
  },
];

function App() {
  const [users, setUsersList] = useState(DUMMY_DATA);

  const addUserHandler = (user) => {
    setUsersList((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </>
  );
}

export default App;
