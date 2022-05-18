import { styled } from '@linaria/react'
import { css } from '@linaria/core'
import { colors } from '../../../assets/constants'

export const Tittle = styled.h1`
  margin-top: 20px;
  font-size: 34px;
  line-height: 42px;
  font-weight: 700;
  color: ${colors.white};
`

export const form = css`
  margin-top: 30px;

  & > button {
    margin-top: 40px;
  }
`

export const QuestionWrapper = styled.div`
  padding: 30px 0;
`

export const Question = styled.p`
  font-size: 20px;
  line-height: 30px;
  color: ${colors.white};
`

export const Answers = styled.div`
  margin-top: 25px;
  padding-left: 5px;
  display: flex;
  gap: 20px;
`
