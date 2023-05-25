import React from 'react'
import { IconCheck } from '../svg/IconCheck'

export function TextButton ({
  classDeselect,
  textButton,
  setTextButton,
  setLocalStorage,
  setState,
  setClassText,
  setIsTrue,
  setClassDeselect,
  tasks,
  taskValue,
  valorCampo,
  setisStrikeThrough,
  isStrikeThrough
}) {
  const indexItem = tasks.findIndex((taskIndex) => {
    return taskIndex[0] === taskValue || taskIndex[0] === valorCampo
  })
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
    setClassDeselect('')
  }

  const classTextButton =
    classDeselect !== '' ? `change-button ${classDeselect}` : 'change-button'

  return (
    <button
      onClick={
        textButton === 'Crear'
          ? setButtonToCreate
          : textButton === 'Completar'
            ? setButtonToComplete
            : setButtonToDeselect
      }
      className={classTextButton}
    >
      {textButton === 'Completar' ? <IconCheck /> : textButton}
    </button>
  )
}
