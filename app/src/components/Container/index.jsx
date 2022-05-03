import React from 'react'
import * as s from './styles'

const Container = ({ children }) => {
  return (
    <s.ContainerWrapper>
      {children}
    </s.ContainerWrapper>
  )
}

export default Container
