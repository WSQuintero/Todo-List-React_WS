import React from 'react'

export function AddNewTask ({ onClick }) {
  return (
    <button onClick={onClick} className="add-new-task">
      +
    </button>
  )
}
