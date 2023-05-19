import React, { useState } from 'react'
import './Task.css'

export function Task ({ task }) {
  const [state, setState] = useState(false)
  const [valorCampo, setValorCampo] = useState('')
  const [textButton, setTextButton] = useState('Crear')
  const [classText, setClassText] = useState('')
  return (
    <li>
      <span>{task}</span>
      <button>X</button>
      {state === false
        ? (
        <input
          type="text"
          value={valorCampo}
          onChange={(event) => setValorCampo(event.target.value)}
        />
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
            console.log(valorCampo)
          }}
        >
          {textButton}
        </button>
          )
        : (
        <button onClick={() => { setClassText('strikethrough') }}>{textButton}</button>
          )}
    </li>
  )
}
