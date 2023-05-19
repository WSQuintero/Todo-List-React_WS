import React, { useState } from 'react'
import { Task } from '../Task/Task'
import './App.css'

function App () {
  const [task, setTask] = useState([1])
  let count = 1
  return (
    <>
    <h1 className='container-title'>Crea tu lista de tareas</h1>
    <ul className='container-list'>
      {task.map((tas) => {
        return <Task task={tas} key={count++}/>
      })}
    </ul>
    <button onClick={(newTask) => { newTask = count; setTask([...task, newTask]); console.log(count) }}>+</button>
  </>
  )
}

export default App
