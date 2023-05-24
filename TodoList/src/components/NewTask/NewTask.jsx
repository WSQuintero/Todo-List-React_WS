import React from 'react'
import { Task } from '../Task/Task'

export function NewTask ({ task, tasks, actualTask }) {
  return task.map((tas, index) => {
    const hide = actualTask !== '' && actualTask !== undefined ? 'hide' : false
    return (
      <Task task={index + tasks.length + 1} key={index} className={hide} />
    )
  })
}
