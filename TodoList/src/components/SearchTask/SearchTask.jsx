import React from 'react'
import { SvgSearch } from '../svgSearch/SvgSearch';
import "./SearchTask.css"

function SearchTask ({ hola }) {
  return (
    <div className='containerSearch'>
      <input
        type='text'
        onChange={(event) => setActualTask(event.target.value)}
        className='InputSearch'
        placeholder='Desayunar'
      />
      <SvgSearch></SvgSearch>
    </div>
  )
}

export { SearchTask }
