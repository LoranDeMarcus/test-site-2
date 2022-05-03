import React from 'react'
import * as s from './styles'
import { NavLink } from 'react-router-dom'

const Card = ({ children }) => {
  return (
    <NavLink to='/' className={s.Wrapper}>
      {children}
    </NavLink>
  )
}

export default Card
