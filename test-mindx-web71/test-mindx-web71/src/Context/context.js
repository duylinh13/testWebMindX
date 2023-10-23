import { createContext, useContext, useState } from "react";

export const TodoContext = createContext();

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  const onAddNewTask = (newTask) => {
    const newTaskList = [...todoList, newTask];
    setTodoList(newTaskList);
  };

  const value = {
    todoList,
    setTodoList,
    onAddNewTask,
  };

  return (
    <TodoContext.Provider value={value}> {children} </TodoContext.Provider>
  );
};
