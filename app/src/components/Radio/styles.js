import { styled } from '@linaria/react'
import { colors } from '../../assets/constants'

export const RadioWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
`

export const Label = styled.label`
  font-size: 16px;
  color: ${colors.black};
  cursor: pointer;
`
