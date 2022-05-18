import React from 'react'
import * as s from './styles'
import { NavLink } from 'react-router-dom'

const Card = ({ to = '/', children }) => {
  return (
    <NavLink to={to} className={s.Wrapper}>
      {children}
    </NavLink>
  )
}

export default Card
