import React, { useContext } from "react";
import { CounterContext } from "./context";

function ContextAcess() {
  const contextCount = useContext(CounterContext);
  console.log("contextCount", contextCount);

  return (
    <>
      <div className="todo">
        <p> count from first component - {contextCount.count}</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button onClick={() => contextCount.setCount(contextCount.count + 1)}>Increment</button>
          <button onClick={() => contextCount.setCount(contextCount.count - 1)}>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default ContextAcess;
