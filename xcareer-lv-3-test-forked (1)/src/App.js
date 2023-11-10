import "./styles.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import LanguageSwitcher from "./LanguageSwitcher";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const App = () => {
  const location = useLocation();

  const [showUndoneOnly, setShowUndoneOnly] = useState(false);

  const toggleShowUndoneOnly = () => {
    setShowUndoneOnly(!showUndoneOnly);
  };

  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    return (
      storedTasks || [
        {
          id: 1,
          title: "Build some websites",
          done: false,
          dueDate: "2023-11-15",
        },
        { id: 2, title: "Do exercises", done: false, dueDate: "2023-11-20" },
        { id: 3, title: "Go shopping", done: false, dueDate: "2023-11-25" },
        { id: 4, title: "House cleaning", done: true, dueDate: null },
      ]
    );
  });

  const [undoneTasksCount, setUndoneTasksCount] = useState(0);

  useEffect(() => {
    updateUndoneTasksCount();
  }, [tasks]);

  const toggleDone = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  const addTask = (title, dueDate) => {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      done: false,
      dueDate: dueDate || null,
    };
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
    updateUndoneTasksCount();
  };

  const updateUndoneTasksCount = () => {
    const undoneCount = tasks.filter((task) => !task.done).length;
    setUndoneTasksCount(undoneCount);
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const updatedTasks = Array.from(filteredTasks);
    const [reorderedItem] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, reorderedItem);

    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              tasks={tasks}
              addTask={addTask}
              toggleDone={toggleDone}
              showUndoneOnly={showUndoneOnly}
              toggleShowUndoneOnly={toggleShowUndoneOnly}
              onDragEnd={onDragEnd}
            />
          }
        />
      </Routes>
    </div>
  );
};

const Home = ({
  tasks,
  addTask,
  toggleDone,
  showUndoneOnly,
  toggleShowUndoneOnly,
}) => {
  return (
    <div className="App">
      <div className="container">
        <TodoListHeader
          showUndoneOnly={showUndoneOnly}
          toggleShowUndoneOnly={toggleShowUndoneOnly}
        />
        <TodoList
          tasks={tasks}
          toggleDone={toggleDone}
          showUndoneOnly={showUndoneOnly}
        />
        <Form addTask={addTask} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
