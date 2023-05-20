import React, { useState } from 'react'
import './Task.css'
const tasks = JSON.parse(localStorage.getItem('tasks')) || []

export function Task ({ task, taskValue }) {
  const [state, setState] = useState(false)
  const [valorCampo, setValorCampo] = useState('')
  const [textButton, setTextButton] = useState('Crear')
  const [classText, setClassText] = useState('')
  const [hideItem, setHideItem] = useState('')

  function setLocalStorage () {
    if (valorCampo !== '') {
      tasks.push(valorCampo)
      const ValueJson = JSON.stringify(tasks)
      localStorage.setItem('tasks', ValueJson)
    } else {
      const ValueJson = JSON.stringify(tasks)
      localStorage.setItem('tasks', ValueJson)
    }
  }

  return (
    <li className={hideItem}>
      <span>{task}</span>
      <button
        onClick={() => {
          setHideItem('hide-item')
          tasks.splice(tasks.indexOf(taskValue, 1))
          console.log(tasks)
          setLocalStorage()
        }}
      >
        X
      </button>

      {state === false && taskValue === undefined
        ? (
        <input
          type="text"
          value={valorCampo}
          onChange={(event) => setValorCampo(event.target.value)}
        />
          )
        : taskValue !== undefined
          ? (
        <span className={classText}>{taskValue}</span>
            )
          : (
        <span className={classText}>{valorCampo}</span>
            )}

      {textButton === 'Crear'
        ? (
        <button
          onClick={() => {
            setState(true)
            setTextButton('Completar')
            setLocalStorage()
          }}
        >
          {textButton}
        </button>
          )
        : (
        <button
          onClick={() => {
            setClassText('strikethrough')
          }}
        >
          {textButton}
        </button>
          )}
    </li>
  )
}
