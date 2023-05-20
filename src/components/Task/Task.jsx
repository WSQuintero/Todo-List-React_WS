import React, { useState } from 'react'
import './Task.css'
const tasks = JSON.parse(localStorage.getItem('tasks')) || []

export function Task ({ task, taskValue, isTacha }) {
  const [isStrikeThrough, setisStrikeThrough] = useState(isTacha)
  console.log(isStrikeThrough)
  const isMake = tasks.some((task) => { return task[0] === taskValue })
  const [state, setState] = useState(false)
  const [valorCampo, setValorCampo] = useState('')
  const [textButton, setTextButton] = useState(
    isMake === true && isStrikeThrough === ''
      ? 'Completar'
      : isMake && isStrikeThrough
        ? 'Desmarcar'
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
    console.log(isStrikeThrough)
  }
  function setButtonToComplete () {
    setState(true)
    setClassText('strikethrough')
    setIsTrue(true)
    tasks[indexItem] = [taskValue || valorCampo, true]
    setTextButton('Desmarcar')
    setLocalStorage()
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
          {textButton}
        </button>
      )
    }

    return (
      <button onClick={setButtonToDeselect} className="change-button">
        {textButton}
      </button>
    )
  }
  return (
    <li className={containerItemClass}>
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

      <TextButton />
      <button onClick={deleteItem} className="change-button">
        X
      </button>
    </li>
  )
}
