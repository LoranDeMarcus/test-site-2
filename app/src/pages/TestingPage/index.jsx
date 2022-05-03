import React from 'react'
import Header from '../../components/Header'
import Container from '../../components/Container'
import * as s from './styles'
import { NavLink } from 'react-router-dom'

export const TestingPage = () => {
  return (
    <div>
      <Header />
      <Container>
        <s.Wrapper>
          <s.Title>
            Тестирование
          </s.Title>
          <s.Text>
            Данный тест предназначен для оценки цифровых компетенций преподавателей,
            который включает в себя 7 разделов.
          </s.Text>
          <s.Text>
            Предлагаем вам проанализировать ваши сильные стороны и определить, в каком направлении вам
            следует совершенствовать навыки использования цифровых технологий в образовательном процессе.
          </s.Text>
          <s.Text>
            После тестирования вы узнаете свой профиль компетенций,
            определите ключевые задачи и найдете свои точки роста!
          </s.Text>
        </s.Wrapper>
        <s.LinkWrapper>
          <s.Text>
            <b>Выберите раздел тестирования:</b>
          </s.Text>
          <NavLink to="/testing/1" className={s.link}>
            1. Безопасность в сети интернет
          </NavLink>
          <NavLink to="/testing/2" className={s.link}>
            2. Управление информацией и данными
          </NavLink>
          <NavLink to="/testing/3" className={s.link}>
            3. Управление цифровой идентичностью
          </NavLink>
        </s.LinkWrapper>
      </Container>
    </div>
  )
}
