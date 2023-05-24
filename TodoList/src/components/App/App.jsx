import React, { useState } from 'react'
import { Title } from '../Title/TItle'
import { ContainerList } from '../ContainerList/ContainerList'
import { SaveTasks } from '../SaveTasks/SaveTasks'
import { NewTask } from '../NewTask/NewTask'
import { AddNewTask } from '../AddNewTask/AddNewTask'
import { SearchTask } from '../SearchTask/SearchTask'

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
  const [actualTask, setActualTask] = useState()

  function hola (j) {
    setActualTask(j);
  }

  return (
    <>
      <Title />
      <SearchTask hola={hola} />
      <ContainerList>
        <SaveTasks count={count} tasks={tasks} actualTask={actualTask} />
        <NewTask
          task={task}
          count={count}
          actualNumber={actualNumber}
          tasks={tasks}
          actualTask={actualTask}
        />
      </ContainerList>
      <AddNewTask onClick={createNewTask} />
    </>
  )
}

export { App }
