import React from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TodoList = ({ tasks, toggleDone, showUndoneOnly, onDragEnd }) => {
  const filteredTasks = showUndoneOnly
    ? tasks.filter((task) => !task.done)
    : tasks;

  const calculateDaysLeft = (dueDate) => {
    if (!dueDate) return null;
    const today = new Date();
    const due = new Date(dueDate);
    const timeDiff = due.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysLeft;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="todo-list-container"
          >
            {filteredTasks.map((task, index) => (
              <Draggable
                key={task.id}
                draggableId={task.id.toString()}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`todo-item-container ${task.done ? "done" : ""}`}
                  >
                    {task.done ? (
                      <FaRegCheckCircle
                        color="#9a9a9a"
                        className="item-done-button"
                        onClick={() => toggleDone(task.id)}
                      />
                    ) : (
                      <FaRegCircle
                        color="#9a9a9a"
                        className="item-done-button"
                        onClick={() => toggleDone(task.id)}
                      />
                    )}
                    <div className="item-title">{task.title}</div>
                    {task.dueDate && (
                      <div className="due-date">
                        Due in {calculateDaysLeft(task.dueDate)} days
                      </div>
                    )}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
