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

export const Subtitle = styled.p`
  margin-top: 20px;
  font-size: 18px;
  line-height: 28px;
  color: ${colors.white};
`

export const StartButton = css`
  margin-top: 70px;
`

export const ReturnButton = css`
  margin-top: 30px;
  margin-bottom: 50px;
`

export const form = css`
  margin-top: 30px;

  & > button {
    margin-top: 40px;
  }
`

export const QuestionWrapper = styled.div`
  margin-bottom: 60px;
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

export const List = styled.ol`
  margin-top: 20px;
  color: ${colors.white};
`

export const ListItem = styled.li`
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 22px;
  padding-left: 15px;
  position: relative;
  
  &::before {
    content: '●';
    position: absolute;
    left: 0;
    top: 0;
  }
  
  &:first-letter {
    margin-left: 15px;
  }
`

export const LuscherWrapper = styled.div`
  margin: 50px auto 0;
  padding: ${({ isDone }) => isDone ? '0' : '60px'};
  width: ${({ isDone }) => isDone ? '100%' : '700px'};
  height: ${({ isDone }) => isDone ? 'auto' : '400px'};
  background-color: ${({ isDone }) => isDone ? colors.blue : colors.white};
  font-size: 18px;
  line-height: 22px;
  color: ${colors.white};
`
