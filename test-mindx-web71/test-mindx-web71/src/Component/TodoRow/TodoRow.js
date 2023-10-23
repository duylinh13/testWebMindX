import React from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const TodoRow = (props) => {
  const { title, isDone } = props;
  console.log(title);
  return (
    <>
      <div className="todo-item-container">
        <FaRegCircle className="item-done-button" color="#9a9a9a" />
        <div className="item-title">{title}</div>
      </div>
    </>
  );
};

export default TodoRow;
