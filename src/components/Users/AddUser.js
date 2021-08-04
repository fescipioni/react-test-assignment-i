import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [user, setUser] = useState({ username: "", age: "" });
  const [error, setError] = useState();

  const onChangeUsernameHandler = (event) => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        username: event.target.value,
      };
    });
  };

  const onChangeAgeHandler = (event) => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        age: event.target.value,
      };
    });
  };

  const AddUserHandler = (event) => {
    event.preventDefault();

    if (user.username.trim().length === 0 || user.age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+user.age <= 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    const newUser = {
      id: Math.random().toString(),
      username: user.username,
      age: +user.age,
    };

    props.onAddUser(newUser);

    setUser({ username: "", age: "" });
  };

  const errorHandler = () => {
      setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={styles.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={user.username}
            onChange={onChangeUsernameHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={user.age}
            onChange={onChangeAgeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
