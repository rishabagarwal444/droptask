// src/components/TaskBlock.js
import React from "react";
import { useDrop } from "react-dnd";
import Task from "./Task";

const TaskBlock = ({ title, tasks, moveTask, block }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "task",
    drop: (item) => moveTask(item.task, item.block, block),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={`task-block ${isOver ? "highlight" : ""}`}>
      <h3>{title}</h3>
      {tasks.map((task, index) => (
        <Task key={index} task={task} block={block} />
      ))}
    </div>
  );
};

export default TaskBlock;
