import { css } from '@linaria/core'
import { colors } from '../../assets/constants'

export const Wrapper = css`
  display: block;
  width: 320px;
  padding: 25px;
  background-color: ${colors.blue};
  border: 1px solid ${colors.blue};
  color: ${colors.white};
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background-color: #fff;
    border: 1px solid ${colors.orange};
    color: ${colors.orange};
    box-shadow: 0 0 20px 10px rgba(34, 60, 80, 0.15);
  }
`
