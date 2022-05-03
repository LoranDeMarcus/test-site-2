import { styled } from '@linaria/react'
import { css } from '@linaria/core'
import { colors } from '../../assets/constants'

export const Section = styled.div`
  padding: 80px 0;
  height: 70vh;
  background-color: ${colors.blue};
`

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`

export const TextWrapper = styled.div`
  width: 50%;
`

export const image = css`
  height: 350px;
`

export const Title = styled.h1`
  margin-top: 20px;
  font-size: 40px;
  font-weight: 700;
  line-height: 55px;
  color: ${colors.white};
`

export const Text = styled.p`
  margin-top: 15px;
  font-size: 18px;
  line-height: 24px;
  color: ${colors.white};
`
