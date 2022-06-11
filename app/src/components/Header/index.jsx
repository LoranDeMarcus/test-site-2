import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from '../Container'
import logo from '../../assets/logo.png'
import * as s from './styles'
import { Button } from '../Button'

const Header = () => {
  const isLogin = false

  return (
    <s.Header>
      <Container>
        <s.Inner>
          <img src={logo} alt="logo" className={s.Image} />
          <s.Navbar>
            <s.NavList>
              <li>
                <NavLink
                  to="/"
                  className={s.link}
                >
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/testing"
                  className={s.link}
                >
                  Тестирование
                </NavLink>
              </li>
            </s.NavList>
            <s.CabinetWrapper>
              {isLogin ? (
                <Button>
                  Выйти
                </Button>
              ) : (
                <>
                  <NavLink
                    to="/registration"
                    className={s.link}
                  >
                    Регистрация
                  </NavLink>
                  <NavLink
                    to="/login"
                    className={s.link}
                  >
                    Войти
                  </NavLink>
                </>
              )}
              <NavLink
                to="/cabinet"
                className={s.link}
              >
                Личный кабинет
              </NavLink>
            </s.CabinetWrapper>
          </s.Navbar>
        </s.Inner>
      </Container>
    </s.Header>
  )
}

export default Header
