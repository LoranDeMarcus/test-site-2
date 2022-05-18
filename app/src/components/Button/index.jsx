import React from 'react'
import { Wrapper } from './styles'

export const Button = ({
  type='button',
  onClick,
  className,
  children,
}) => {
  return (
    <Wrapper className={className} type={type} onClick={onClick}>
      {children}
    </Wrapper>
  )
}
