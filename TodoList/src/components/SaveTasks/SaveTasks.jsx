import React from "react";
import { Task } from "../Task/Task";

export function SaveTasks({ count, tasks, actualTask }) {
  return tasks.map((task, index) => {
    const hide =
      !String(task[0]).toLowerCase().startsWith(String(actualTask).toLowerCase()) && actualTask !== undefined
        ? "hide"
        : false;
    return (
      <Task
        task={count++}
        key={index++}
        taskValue={task[0]}
        isTacha={task[1]}
        className={hide}
      />
    );
  });
}
