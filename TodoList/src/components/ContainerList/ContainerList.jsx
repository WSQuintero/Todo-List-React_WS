import React from 'react'
import './ContainerList.css'

export function ContainerList ({ children }) {
  return <ul className="container-list">
    {children}
  </ul>
}
