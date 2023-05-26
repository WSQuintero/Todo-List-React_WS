import React, { useState } from "react"
import TextItem from "./TextItem/TextItem"
import DeleteButton from "./DeleteButton/DeleteButton"
import TextButton from "./TextButton/TextButton"
import "./Task.css"
const tasks = JSON.parse(localStorage.getItem("tasks")) || []

export function Task({ task, taskValue, isTacha, className }) {
  const [isStrikeThrough, setisStrikeThrough] = useState(isTacha)
  const isMake = tasks.some((task) => {
    return task[0] === taskValue
  })
  const [state, setState] = useState(false)
  const [valorCampo, setValorCampo] = useState("")
  const [classDeselect, setClassDeselect] = useState(
    isMake && isStrikeThrough ? "deselect" : ""
  )

  const [textButton, setTextButton] = useState(
    isMake === true && isStrikeThrough === ""
      ? "Completar"
      : isMake && isStrikeThrough
      ? "-"
      : "Crear"
  )
  const [classText, setClassText] = useState(
    isMake === false && isStrikeThrough === undefined
      ? ""
      : isMake && isStrikeThrough
      ? "strikethrough"
      : ""
  )
  const [hideItem, setHideItem] = useState("")
  const [isTrue, setIsTrue] = useState("")
  const classItem = ` classItem ${classText}`
  const indexItem = tasks.findIndex((tas) => {
    return tas[0] === taskValue || tas[0] === valorCampo
  })
  const containerItemClass = `container-item ${hideItem} `

  function setLocalStorage() {
    const valorCampoFind = tasks.find((task) => {
      return task[0] === valorCampo || taskValue
    })
    if (valorCampo !== "" && valorCampoFind === undefined) {
      tasks.push([valorCampo || taskValue, isTrue])
      const ValueJson = JSON.stringify(tasks)
      localStorage.setItem("tasks", ValueJson)
    } else {
      const ValueJson = JSON.stringify(tasks)
      localStorage.setItem("tasks", ValueJson)
    }
  }
  function setButtonToCreate() {
    setState(true)
    setTextButton("Completar")
    setLocalStorage()
  }
  function setButtonToComplete() {
    setState(true)
    setClassText("strikethrough")
    setIsTrue(true)
    tasks[indexItem] = [taskValue || valorCampo, true]
    setTextButton("-")
    setLocalStorage()
    setClassDeselect("deselect")
  }
  function setButtonToDeselect() {
    setIsTrue(false)
    setClassText("")
    setTextButton("Completar")
    setisStrikeThrough("")
    tasks[indexItem] = [taskValue || valorCampo, ""]
    setLocalStorage()
  }
  function deleteItem() {
    setHideItem("hide-item")
    const actualTask = tasks.findIndex((task) => {
      return task[0] === valorCampo
    })
    const beforeTask = tasks.findIndex((task) => {
      return task[0] === taskValue
    })
    if (actualTask !== -1) tasks.splice(actualTask, 1)
    else if (beforeTask !== -1) tasks.splice(beforeTask, 1)

    localStorage.setItem("tasks", JSON.stringify(tasks))
  }

  return (
    <li className={`${containerItemClass} ${className}`}>
      <span className='number'>{task}</span>
      {state === false && taskValue === undefined ? (
        <input
          type='text'
          value={valorCampo}
          onChange={(event) => setValorCampo(event.target.value)}
          className='inputItem'
        />
      ) : (
        <TextItem
          taskValue={taskValue}
          textButton={textButton}
          task={task}
          valorCampo={valorCampo}
          isMake={isMake}
          classItem={classItem}
        />
      )}

      <div className='container-buttons'>
        <TextButton
          textButton={textButton}
          setButtonToCreate={setButtonToCreate}
          setButtonToComplete={setButtonToComplete}
          classDeselect={classDeselect}
          setButtonToDeselect={setButtonToDeselect}
        />
        <DeleteButton deleteItem={deleteItem} />
      </div>
    </li>
  )
}
