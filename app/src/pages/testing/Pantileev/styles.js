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

export const ResultWrapper = styled.div`
  margin-top: 40px;
`

export const ResultTitle = styled.h3`
  margin-bottom: 40px;
  font-size: 24px;
  line-height: 28px;
  color: ${colors.white};
  font-weight: 700;
`

export const TestResultWrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  gap: 50px;
`

export const TestResult = styled.div`
  width: 450px;
  padding: 15px;
  border: 1px solid ${colors.white};
`

export const TestResultText = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: ${colors.white};
`

export const ChartWrapper = styled.div`
  width: 280px;
`

export const Recommendations = styled.ol`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.white};
`

export const Color = styled.span`
  display: inline-block;
  margin-right: 10px;
  width: 10px;
  height: 10px;
  background-color: ${({ bgc }) => bgc};
`

export const ListRes = styled.ul`
  & > li {
    padding-left: 15px;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 7px;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: ${colors.white};
    }
  }
`
