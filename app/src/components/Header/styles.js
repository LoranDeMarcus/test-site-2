import { styled } from '@linaria/react'
import { css } from '@linaria/core'
import { colors } from '../../assets/constants'

export const Header = styled.header`
  height: 100px;
  background-color: #fff;
`

export const Inner = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
`

export const Image = css`
  height: 60px;
`

export const Navbar = styled.nav`
  margin-left: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
`

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 38px;
`

export const link = css`
  padding: 30px 0;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.black};
  cursor: pointer;
  transition: all 0.3s ease-out 0s;
  text-decoration: none;

  &:hover {
    color: ${colors.orange};
  }
`
