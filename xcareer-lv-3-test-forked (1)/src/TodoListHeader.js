import React from "react";

const TodoListHeader = ({ undoneTasksCount }) => {
  return <div className="header">You have {undoneTasksCount} tasks left!</div>;
};

export default TodoListHeader;
