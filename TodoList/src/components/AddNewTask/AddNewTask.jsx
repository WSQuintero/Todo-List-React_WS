import React from 'react'
import "./AddNewTask.css"

export function AddNewTask ({ onClick }) {
  return (
    <button onClick={onClick} className="add-new-task">
      +
    </button>
  )
}

