import React from 'react'
import { Task } from '../Task/Task'

export function NewTask ({ task, tasks }) {
  return task.map((tas, index) => {
    return <Task task={index + tasks.length + 1} key={index} />
  })
}
