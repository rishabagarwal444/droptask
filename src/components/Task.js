// src/components/Task.js
import React from "react";
import { useDrag } from "react-dnd";

const Task = ({ task, block }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "task",
    item: { task, block },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="task"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {task}
    </div>
  );
};

export default Task;
