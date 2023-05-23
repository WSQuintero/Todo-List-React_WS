import React, { useState } from 'react'
import { Title } from '../Title/TItle'
import { ContainerList } from '../ContainerList/ContainerList'
import { SaveTasks } from '../SaveTasks/SaveTasks'
import { NewTask } from '../NewTask/NewTask'
import { AddNewTask } from '../AddNewTask/AddNewTask'

const tasks = JSON.parse(localStorage.getItem('tasks')) || []

function App () {
  let count = 1 // eslint-disable-line prefer-const
  const [task, setTaskList] = useState([count])
  const [actualNumber, setActualNumber] = useState(tasks.length + 1)
  const changeActualNumber = actualNumber
  const createNewTask = () => {
    setTaskList([...task, count])
    setActualNumber(changeActualNumber + 1)
  }

  return (
    <>
      <Title />
      <ContainerList>
        <SaveTasks count={count} tasks={tasks} />
        <NewTask task={task} count={count} actualNumber={actualNumber} tasks={tasks}/>
      </ContainerList>
      <AddNewTask onClick={createNewTask} />
    </>
  )
}

export default App
