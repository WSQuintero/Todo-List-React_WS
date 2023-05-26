import React from 'react'

function DeleteButton({ deleteItem }) {
  return (
    <button onClick={deleteItem} className='close-button'>
      X
    </button>
  )
}

export default DeleteButton