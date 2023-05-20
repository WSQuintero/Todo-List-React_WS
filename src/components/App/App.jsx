import React, { useState } from 'react'
import { Task } from '../Task/Task'
import './App.css'
const tasks = JSON.parse(localStorage.getItem('tasks')) || []

function App () {
  let count = 1
  const [task, setTask] = useState([count])

  return (
    <>
    <h1 className='container-title'>Crea tu lista de tareas</h1>
    <ul className='container-list'>
      {tasks.map((taskValue) => {
        return <Task task={count} key={count++} taskValue={taskValue} />
      })}
      {task.map((tas) => {
        return <Task task={count} key={count++}/>
      })}
    </ul>
    <button onClick={(newTask) => { newTask = count; setTask([...task, newTask]) }}>+</button>
  </>
  )
}

export default App
