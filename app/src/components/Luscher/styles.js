import { styled } from '@linaria/react'
import { colors } from '../../assets/constants'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;
`

export const ColorContainer = styled.div`
  width: 125px;
  height: 125px;
  background-color: ${({ color } ) => color};
  cursor: pointer;
  transition: border-color 0.3s ease;
  
  &:hover {
    border: 1px solid ${colors.dark};
  }
`

export const SubTitle = styled.h4`
  margin-bottom: 40px;
  font-size: 22px;
  line-height: 30px;
`

export const Text = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: ${colors.dark};
`

export const LightText = styled.p`
  margin-bottom: 15px;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.white};
`
