import React, { useState, useContext } from "react";
import { CounterContext } from "./context";

function TodoUser() {
  const [UserName, setUserName] = useState("Arjun");
  const contextCount = useContext(CounterContext);
  return (
    <>
      <h1>User name - {UserName}</h1>
      <p>Todo list count - {contextCount.count}</p>
      <p>count is - {contextCount.count % 2 === 0 ? "EVEN" : "ODD"}</p>
      <button onClick={() => contextCount.setCount(contextCount.count - 1)}>Decrement</button>
      <button onClick={() => contextCount.setCount(contextCount.count + 1)}>Increment</button>
      <button onClick={() => setUserName("Dhanunjay")}>User</button>
    </>
  );
}

export default TodoUser;
