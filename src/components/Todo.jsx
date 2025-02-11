import React from "react";
import TodoList from "./TodoList";
import TodoUser from "./TodoUser";

const Todo = () => {
  return (
    <div className="todo">
      <TodoUser />
      <h3>Todo list</h3>
      <TodoList item="Eat" />
      <TodoList item="Code" />
      <TodoList item="Sleep" />
      <TodoList item="Repeat" />
      <button className="todo-button">Add item</button>
    </div>
  );
};

export default Todo;
 