// src/App.js
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import TaskBlock from "./components/TaskBlock";
import './App.css';

const App = () => {
  // Initial tasks for the Unplanned block
  const [tasks, setTasks] = useState({
    unplanned: ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5", "Task 6", "Task 7", "Task 8", "Task 9", "Task 10"],
    today: [],
    tomorrow: [],
    thisWeek: [],
    nextWeek: [],
  });

  // Function to move tasks between blocks
  const moveTask = (task, fromBlock, toBlock) => {
    if (fromBlock !== toBlock) {
      setTasks((prevState) => {
        const fromTasks = prevState[fromBlock].filter(t => t !== task);
        const toTasks = [...prevState[toBlock], task];
        return { ...prevState, [fromBlock]: fromTasks, [toBlock]: toTasks };
      });
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <h1>Drag & Drop Task List</h1>
        <div className="task-container">
          <TaskBlock title="Today" tasks={tasks.today} moveTask={moveTask} block="today" />
          <TaskBlock title="Tomorrow" tasks={tasks.tomorrow} moveTask={moveTask} block="tomorrow" />
          <TaskBlock title="This Week" tasks={tasks.thisWeek} moveTask={moveTask} block="thisWeek" />
          <TaskBlock title="Next Week" tasks={tasks.nextWeek} moveTask={moveTask} block="nextWeek" />
          <TaskBlock title="Unplanned" tasks={tasks.unplanned} moveTask={moveTask} block="unplanned" />
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
