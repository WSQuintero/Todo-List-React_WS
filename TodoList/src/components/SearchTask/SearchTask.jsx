import React from 'react'

export function SearchTask ({ hola }) {
  // const [valorInput, setValorInput] = useState()
  // let valorInput
  // hola(valorInput)

  return (
    <input
      type="text"
      // value={valorInput}
      onChange={(event) => hola(event.target.value) }
    />
  )
}
