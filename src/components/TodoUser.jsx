import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function TodoUser() {
  const [UserName, setUserName] = useState("Arjun");
  const dispatch = useDispatch();
  const count = useSelector((state) => state);
  return (
    <>
      <h1>User name - {UserName}</h1>
      <p>Todo list count - {count}</p>
      <p>count is - {count % 2 === 0 ? "EVEN" : "ODD"}</p>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => setUserName("Dhanunjay")}>User</button>
    </>
  );
}

export default TodoUser;
