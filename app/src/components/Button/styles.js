import { colors } from '../../assets/constants'
import { styled } from '@linaria/react'

export const Wrapper = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  background: ${({ theme }) => theme === 'primary' ? colors.orange : colors.blue };
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
    background-color: ${({ theme }) => theme === 'primary' ? colors.lightOrange : colors.lighBlue };
  }
`

export const GhostButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.blue};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.dark}
  }
`
