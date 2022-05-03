import React from 'react'
import { button } from './styles'

export const Button = ({ type='button', onClick, children }) => {
  return (
    <button className={button} type={type} onClick={onClick}>
      {children}
    </button>
  )
}
