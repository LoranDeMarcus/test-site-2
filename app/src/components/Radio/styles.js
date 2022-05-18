import { styled } from '@linaria/react'
import { colors } from '../../assets/constants'

export const RadioWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 15px 25px;
  background-color: ${colors.white};
  border: 1px solid ${({ checked }) => checked ? colors.orange : colors.white};
  border-radius: 6px;
  color: ${colors.blue};
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #fff;
    border: 1px solid ${colors.orange};
    color: ${colors.orange};
    box-shadow: 0 0 20px 10px rgba(34, 60, 80, 0.15);
  }
  
  & > input {
    margin: 0;
  }
`

export const Label = styled.label`
  font-size: 16px;
  color: ${({ checked }) => checked ? colors.orange : colors.black};
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${colors.orange};
  }
`
