import "./App.css";
import TodoList from "./components/TodoList";
import TodoUser from "./components/TodoUser";

function App() {
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
}

export default App;
