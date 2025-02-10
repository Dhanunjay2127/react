import React, { useState } from "react";

function TodoUser() {
  const [UserName, setUserName] = useState("Arjun");
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>User name - {UserName}</h1>
      <p>Todo list count - {count}</p>
      <p>count is - {count % 2 === 0 ? "EVEN" : "ODD"}</p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setUserName("Dhanunjay")}>User</button>
    </>
  );
}

export default TodoUser;
