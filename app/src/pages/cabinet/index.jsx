import React from 'react'
import Container from '../../components/Container'
import { Auth } from './auth'
export const Cabinet = () => {
  const isAuth = localStorage.getItem('isAuth')

  if (isAuth) {
    return <Auth />
  }

  return (
    <Container>
    </Container>
  )
}
