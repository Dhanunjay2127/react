import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/slices/CountSlice";

function TodoUser() {
  const [UserName, setUserName] = useState("Arjun");
  const dispatch = useDispatch();
  const count = useSelector((state) => state);
  return (
    <>
      <h1>User name - {UserName}</h1>
      <p>Todo list count - {count.count}</p>
      <p>count is - {count.count % 2 === 0 ? "EVEN" : "ODD"}</p>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => setUserName("Dhanunjay")}>User</button>
    </>
  );
}

export default TodoUser;
