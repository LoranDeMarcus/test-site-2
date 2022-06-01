import { styled } from '@linaria/react'
import { colors } from '../../assets/constants'

export const Wrapper = styled.div`
  position: relative;

  &[data-empty='true'] input + label {
    transform: translate(14px, 6px) scale(0.57);
    opacity: 1;
  }
`

export const Input = styled.input`
  border: 1px solid ${colors.blue};
  border-radius: 4px;
  height: 56px;
  padding: 10px 40px 10px 12px;
  font-size: 20px;
  min-width: 256px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'SB Sans Interface';
  background: transparent;
  box-sizing: border-box;
  display: block;
  position: relative;
  z-index: 5;
  transition: all 0.13s linear;
  outline: none;
  color: #26364b;

  &:hover {
    border-color: ${colors.dark};
  }

  &:focus {
    border-color: ${colors.dark};
  }

  &[data-error='true'] {
    border-color: ${colors.orange};
    color: #ff496a;
  }
`

export const Label = styled.label`
  font-family: 'SB Sans Interface';
  font-size: 20px;
  font-weight: 400;
  opacity: 0.8;
  color: #828ea5;
  top: 0;
  left: 0;
  position: absolute;
  z-index: 4;
  transition: all 0.13s linear;
  transform-origin: top left;
  transform: translate(14px, 16px) scale(1);

  &[data-focus='true'] {
    transform: translate(14px, 6px) scale(0.57);
    opacity: 0.4;
  }
  
  &[data-empty='true'] {
    display: block;
  }
`

export const ErrorText = styled.p`
  margin-top: 4px;
  font-size: 11px;
  color: ${colors.orange};
`
