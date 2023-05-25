import React from 'react'
export function TextItem ({
  taskValue,
  textButton,
  isMake,
  valorCampo,
  task,
  classText
}) {
  const classItem = ` classItem ${classText}`

  return (
    <span className={classItem}>{
      taskValue !== undefined
        ? taskValue
        : textButton === 'Completar' && isMake
          ? task[0]
          : valorCampo}
    </span>
  )
}
