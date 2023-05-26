import React from "react"
import CheckItem from "../CheckItem/CheckItem"

function TextButton({
  textButton,
  setButtonToCreate,
  setButtonToComplete,
  classDeselect,
  setButtonToDeselect,
}) {
  const deselect = `change-button ${classDeselect}`

  return (
    <button
      onClick={
        textButton === "Crear"
          ? setButtonToCreate
          : textButton === "Completar"
          ? setButtonToComplete
          : setButtonToDeselect
      }
      className={
        textButton === "Crear"
          ? "change-button"
          : textButton === "Completar"
          ? "change-button"
          : deselect
      }
    >
      {textButton === "Completar" ? <CheckItem /> : textButton}
    </button>
  )
}

export default TextButton
