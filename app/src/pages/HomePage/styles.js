import { styled } from '@linaria/react'
import { css } from '@linaria/core'
import { colors } from '../../assets/constants'

export const Section = styled.div`
  padding: 80px 0;
  height: 760px;
  background-color: ${colors.blue};
`

export const Wrapper = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 80px;
`

export const TextWrapper = styled.div`
`

export const image = css`
  margin: 0 auto;
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
  margin-top: 0;
  font-size: 18px;
  line-height: 24px;
  color: ${colors.white};
`
