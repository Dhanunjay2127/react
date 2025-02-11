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
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/board" element={<Board />} />
        <Route path="/user/:name" element={<UserProfile />} />
        <Route path="/context" element={<ContextAcess />} />
      </Routes>
    </>
  );
}

export default App;
