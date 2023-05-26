import React from "react"

function TextItem({
  taskValue,
  textButton,
  task,
  valorCampo,
  isMake,
  classItem,
}) {
  return (
    <span className={classItem}>
      {taskValue !== undefined
        ? taskValue
        : textButton === "Completar" && isMake
        ? task[0]
        : valorCampo}
    </span>
  )
}

export default TextItem
