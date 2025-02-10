import React from "react";

function TodoList(props) {
  return (
    <div className="todo-list">
      <div>
        <input type="checkBox" />
        <span className="todo-item">{props.item}</span>
      </div>
      <p>...</p>
    </div>
  );
}

export default TodoList;
