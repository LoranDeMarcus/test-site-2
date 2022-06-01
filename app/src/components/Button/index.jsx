import React from 'react'
import { GhostButton, Wrapper } from './styles'

export const Button = ({
  type='button',
  theme='primary',
  onClick,
  className,
  ghost,
  children,
}) => {
  if (ghost) {
    return (
      <GhostButton type={type} onClick={onClick}>
        {children}
      </GhostButton>
    )}

  return (
    <Wrapper className={className} type={type} onClick={onClick} theme={theme}>
      {children}
    </Wrapper>
  )
}
