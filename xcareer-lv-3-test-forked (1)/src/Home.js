import React, { useState } from "react";
import TodoListHeader from "./TodoListHeader";
import TodoList from "./TodoList";
import Form from "./Form";
import Footer from "./Footer";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks([...tasks, { title, done: false }]);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="container">
        <TodoListHeader />
        <TodoList tasks={tasks} toggleTask={toggleTask} />
        <Form addTask={addTask} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
