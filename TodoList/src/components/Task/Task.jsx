import React, { useState } from 'react'
import './Task.css'
const tasks = JSON.parse(localStorage.getItem('tasks')) || []

export function Task ({ task, taskValue, isTacha, className }) {
  const [isStrikeThrough, setisStrikeThrough] = useState(isTacha)
  const isMake = tasks.some((task) => { return task[0] === taskValue })
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
  const classItem = ` classItem ${classText}`
  const indexItem = tasks.findIndex((tas) => {
    return tas[0] === taskValue || tas[0] === valorCampo
  })
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
  function TextItem () {
    if (taskValue !== undefined) {
      return <span className={classItem}>{taskValue}</span>
    } else {
      return (
        <span className={classItem}>
          {textButton === 'Completar' && isMake ? task[0] : valorCampo}
        </span>
      )
    }
  }
  function setButtonToCreate () {
    setState(true)
    setTextButton('Completar')
    setLocalStorage()
  }
  function setButtonToComplete () {
    setState(true)
    setClassText('strikethrough')
    setIsTrue(true)
    tasks[indexItem] = [taskValue || valorCampo, true]
    setTextButton('-')
    setLocalStorage()
    setClassDeselect('deselect')
  }
  function setButtonToDeselect () {
    setIsTrue(false)
    setClassText('')
    setTextButton('Completar')
    setisStrikeThrough('')
    tasks[indexItem] = [taskValue || valorCampo, '']
    setLocalStorage()
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
  function TextButton () {
    if (textButton === 'Crear') {
      return (
        <button onClick={setButtonToCreate} className="change-button">
          {textButton}
        </button>
      )
    }

    if (textButton === 'Completar') {
      return (
        <button onClick={setButtonToComplete} className="change-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="96px"
            height="96px"
          >
            <path
              fill="#43A047"
              d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"
            />
          </svg>
        </button>
      )
    }

    const deselect = `change-button ${classDeselect}`
    return (
      <button onClick={setButtonToDeselect} className={deselect}>
        {textButton}
      </button>
    )
  }
  return (
    <li className={`${containerItemClass} ${className}`}>
      <span className="number">{task}</span>
      {state === false && taskValue === undefined
        ? (
        <input
          type="text"
          value={valorCampo}
          onChange={(event) => setValorCampo(event.target.value)}
          className="inputItem"
        />
          )
        : (
        <TextItem />
          )}
      <div className="container-buttons">
        <TextButton />
        <button onClick={deleteItem} className="close-button">
          X
        </button>
      </div>
    </li>
  )
}
