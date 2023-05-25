import React, { useState } from 'react'
import { TextButton } from './TextButton/TextButton'
import { TextItem } from './TextItem/TextItem'
import './Task.css'

export function Task ({ task, taskValue, isTacha, className }) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || []
  const [isStrikeThrough, setisStrikeThrough] = useState(isTacha)
  const isMake = tasks.some((task) => {
    return task[0] === taskValue
  })
  const [state, setState] = useState(false)
  const [valorCampo, setValorCampo] = useState('')
  const [classDeselect, setClassDeselect] = useState('')
  const [textButton, setTextButton] = useState(
    isMake === true && isStrikeThrough === ''
      ? 'Completar'
      : isMake && isStrikeThrough
        ? '-'
        : 'Crear'
  )
  const [classText, setClassText] = useState(
    isMake === false && isStrikeThrough === undefined
      ? ''
      : isMake && isStrikeThrough
        ? 'strikethrough'
        : ''
  )
  const [hideItem, setHideItem] = useState('')
  const [isTrue, setIsTrue] = useState('')
  const isInput = state === false && taskValue === undefined
  const containerItemClass = `container-item ${hideItem} `

  function setLocalStorage () {
    const valorCampoFind = tasks.find((task) => {
      return task[0] === valorCampo || taskValue
    })
    if (valorCampo !== '' && valorCampoFind === undefined) {
      tasks.push([valorCampo || taskValue, isTrue])
      const ValueJson = JSON.stringify(tasks)
      localStorage.setItem('tasks', ValueJson)
    } else {
      const ValueJson = JSON.stringify(tasks)
      localStorage.setItem('tasks', ValueJson)
    }
  }

  function deleteItem () {
    setHideItem('hide-item')
    const actualTask = tasks.findIndex((task) => {
      return task[0] === valorCampo
    })
    const beforeTask = tasks.findIndex((task) => {
      return task[0] === taskValue
    })
    if (actualTask !== -1) tasks.splice(actualTask, 1)
    else if (beforeTask !== -1) tasks.splice(beforeTask, 1)

    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  return (
    <li className={`${containerItemClass} ${className}`}>
      <span className='number'>{task}</span>

      {isInput
        ? (
        <input
          type='text'
          value={valorCampo}
          onChange={(event) => setValorCampo(event.target.value)}
          className='inputItem'
        />
          )
        : (
        <TextItem
          taskValue={taskValue}
          textButton={textButton}
          isMake={isMake}
          valorCampo={valorCampo}
          task={task}
          classText={classText}
        />
          )}

      <div className='container-buttons'>
        <TextButton
          classDeselect={classDeselect}
          textButton={textButton}
          setTextButton={setTextButton}
          setLocalStorage={setLocalStorage}
          setState={setState}
          setClassText={setClassText}
          setIsTrue={setIsTrue}
          setClassDeselect={setClassDeselect}
          tasks={tasks}
          taskValue={taskValue}
          valorCampo={valorCampo}
          setisStrikeThrough={setisStrikeThrough}
        />
        <button onClick={deleteItem} className='close-button'>
          X
        </button>
      </div>
    </li>
  )
}
