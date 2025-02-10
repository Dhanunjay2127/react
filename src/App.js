import "./App.css";
import TodoList from "./components/TodoList";
import TodoUser from "./components/TodoUser";
import Board from "./components/Board";
import UserProfile from "./components/UserProfile";
import ContextAcess from "./components/ContextAcess";
import { CounterProvider } from "./components/context";

function App() {
  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <CounterProvider>
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
          <ContextAcess />
        </CounterProvider>
      </div>
    </>
  );
}

export default App;
