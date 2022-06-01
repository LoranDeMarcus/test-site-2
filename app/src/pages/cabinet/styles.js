import { styled } from '@linaria/react'
import { css } from '@linaria/core'
import { colors } from '../../assets/constants'

export const Section = styled.section`
  padding: 80px 0;
  background-color: ${colors.blue};
`

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: calc(100vh - 260px);
`

export const Title = styled.h2`
  margin: 0 0 30px;
  text-align: center;
  font-size: 22px;
`

export const form = css`
  margin-top: 30px;
  width: 500px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: 0 0 20px 6px ${colors.orange};
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
