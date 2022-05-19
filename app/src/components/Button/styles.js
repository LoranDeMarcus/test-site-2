import { colors } from '../../assets/constants'
import { styled } from '@linaria/react'

export const Wrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  background: ${colors.orange};
  border: none;
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
  padding: 10px 20px;
  height: 45px;
  transition: 0.5s;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: ${colors.lightOrange};
  }
`
