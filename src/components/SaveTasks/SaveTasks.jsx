import React from 'react'
import { Task } from '../Task/Task'

export function SaveTasks ({ count, tasks }) {
  return tasks.map((task, index) => {
    return (
      <Task
        task={count++}
        key={index++}
        taskValue={task[0]}
        isTacha={task[1]}
      />
    )
  })
}
