import React, { useState } from 'react'
import './Task.css'
const tasks = JSON.parse(localStorage.getItem('tasks')) || []

export function Task ({ task, taskValue, isTacha }) {
  const isMake = tasks.some((task) => {
    return task[0] === taskValue
  })
  const [state, setState] = useState(false)
  const [valorCampo, setValorCampo] = useState('')
  const [textButton, setTextButton] = useState(
    isMake && isTacha === null ? 'Completar' : isMake && isTacha ? 'Desmarcar' : 'Crear'
  )
  const [classText, setClassText] = useState(
    isMake && isTacha === null ? '' : isMake && isTacha ? 'strikethrough' : ''
  )
  const [hideItem, setHideItem] = useState('')
  const [isTrue, setIsTrue] = useState('')

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
  function TextButton () {
    if (textButton === 'Crear') {
      return <button onClick={setButtonToCreate}>{textButton}</button>
    }

    if (textButton === 'Completar') {
      return <button onClick={setButtonToComplete}>{textButton}</button>
    }

    return <button onClick={setButtonToDeselect}>{textButton}</button>
  }
  function TextItem () {
    if (state === false && taskValue === undefined) {
      return (
        <input
          type="text"
          value={valorCampo}
          onChange={(event) => setValorCampo(event.target.value)}
        />
      )
    }
    if (taskValue !== undefined) {
      return <span className={classText}>{taskValue}</span>
    } else {
      return (
        <span className={classText}>
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
    setClassText('strikethrough')
    setIsTrue(true)

    const find = tasks.findIndex((task) => {
      return task[0] === taskValue
    })

    tasks.splice(find, 1, [taskValue || valorCampo, isTrue])
    setLocalStorage()
    setTextButton('Desmarcar')
  }
  function setButtonToDeselect () {
    const find = tasks.findIndex((task) => {
      return task[0]
    })
    tasks.splice(find, 1, [taskValue, isTrue])
    setClassText('')
    setIsTrue(false)
    setLocalStorage()
    setTextButton('Completar')
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
    <li className={hideItem}>
      <span>{task}</span>
      <button onClick={deleteItem}>X</button>
      <TextItem />
      <TextButton />
    </li>
  )
}
