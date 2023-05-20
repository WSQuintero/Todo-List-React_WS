import React, { useState } from 'react'
import { Task } from '../Task/Task'
import './App.css'
const tasks = JSON.parse(localStorage.getItem('tasks')) || []

function App () {
  let count = 1
  const [task, setTask] = useState([count])

  return (
    <>
    <h1 className='container-title'>TO DO LIST</h1>
    <ul className='container-list'>
      {tasks.map((task) => {
        return <Task task={count} key={count++} taskValue={task[0]} isTacha={task[1]} />
      })}
      {task.map((tas) => {
        return <Task task={count} key={count++}/>
      })}
    </ul>
    <button onClick={(newTask) => { newTask = count; setTask([...task, newTask]) }} className='add-new-task'>+</button>
  </>
  )
}

export default App
