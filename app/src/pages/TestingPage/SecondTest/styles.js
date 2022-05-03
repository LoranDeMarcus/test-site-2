import { styled } from '@linaria/react'
import { css } from '@linaria/core'
import { colors } from '../../../assets/constants'

export const Tittle = styled.h1`
  margin-top: 20px;
  font-size: 34px;
  line-height: 42px;
  font-weight: 700;
  color: ${colors.dark};
`

export const form = css`
  margin: 30px 0 100px;

  & > button {
    margin-top: 40px;
  }
`

export const QuestionWrapper = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid #e6e6e6;
`

export const Question = styled.p`
  margin-top: 15px;
  font-size: 20px;
  line-height: 30px;
  color: ${colors.blue};
`

export const Hint = styled.span`
  display: block;
  font-size: 14px;
  color: ${colors.dark};
`

export const Answers = styled.div`
  padding-left: 5px;
`

export const AnswerWrapper = styled.div`
  padding-bottom: 20px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
`

export const Input = styled.input`
`

export const Label = styled.label`
  font-size: 16px;
  color: #333;
  cursor: pointer;
`

export const ResultWrapper = styled.div`
  font-size: 20px;
`

export const Result = styled.p`
  font-size: 16px;
  line-height: 22px;
`
