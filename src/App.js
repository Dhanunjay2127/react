import { Routes, Route } from "react-router-dom";
import "./App.css";
import Todo from "./components/Todo";
import Board from "./components/Board";
import UserProfile from "./components/UserProfile";
import ContextAcess from "./components/ContextAcess";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/board" element={<Board />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/context" element={<ContextAcess />} />
      </Routes>
    </>
  );
}

export default App;
