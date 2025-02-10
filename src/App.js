import "./App.css";
import TodoList from "./components/TodoList";
import TodoUser from "./components/TodoUser";
import Board from "./components/Board";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <div className="todo">
          <TodoUser />
          <h3>Todo list</h3>
          <TodoList item="Eat" />
          <TodoList item="Code" />
          <TodoList item="Sleep" />
          <TodoList item="Repeat" />
          <button className="todo-button">Add item</button>
        </div>
        <Board />
        <UserProfile />
      </div>
    </>
  );
}

export default App;
