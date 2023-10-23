import "./styles.css";
// import TodoList from "./TodoList";
import TodoList from "./Component/TodoList.js/TodoList.js";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { TodoProvider } from "./Context/context.js";
function App() {
  const tasks = [
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: true },
    // ... more tasks
  ];

  return (
    <div className="App">
      <TodoProvider>
        <Routes>
          <Route path="/" element={<Home tasks={tasks} />} />
        </Routes>
      </TodoProvider>
    </div>
  );
}

const Home = ({ tasks }) => {
  return (
    <div className="App">
      <div className="container">
        <TodoListHeader />
        <TodoList tasks={tasks} />
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default App;
