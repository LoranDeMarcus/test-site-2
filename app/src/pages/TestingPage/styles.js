import { styled } from '@linaria/react'
import { css } from '@linaria/core'
import { colors } from '../../assets/constants'

export const Wrapper = styled.div`
  margin-top: 80px;
`

export const Title = styled.h1`
  margin-top: 20px;
  font-size: 40px;
  line-height: 55px;
  font-weight: 700;
  color: ${colors.dark};
`

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 24px;
`

export const LinkWrapper = styled.div`
  margin-top: 25px;
`

export const link = css`
  display: block;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.blue};
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${colors.dark}
  }
`
