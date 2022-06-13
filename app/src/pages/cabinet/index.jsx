import React from 'react'
import Container from '../../components/Container'
import * as s from './styles'
import student from '../../assets/student.svg'

export const Cabinet = () => {

  return (
    <s.Section>
      <Container>
        <s.H1>
          Профиль обучающегося
        </s.H1>
        <s.Profile>
          <s.ProfilePhoto>
            <img alt="avatar" src={student} />
          </s.ProfilePhoto>
          <s.ProfileData>
            <s.ProfileTitle>
              Личные данные
            </s.ProfileTitle>
            <s.Data>
              <s.Info>
                <b>Имя пользователя:</b> Фамилия Имя Отчество
              </s.Info>
              <s.Info>
                <b>E-mail:</b> user@mail.ru
              </s.Info>
              <s.Info>
                <b>Логин:</b> userLogin
              </s.Info>
              <s.Info>
                <b>Дата рождения:</b> 01.01.2001
              </s.Info>
            </s.Data>
          </s.ProfileData>
        </s.Profile>
        <s.Table>
          <tbody>
            <s.Tr>
              <s.Td>Диагностика состояния агрессии: Опросник Басса-Дарка</s.Td>
              <s.Td>
                Физическая агрессия - 3
                <br />
                Косвенная агрессия - 2
                <br />
                Раздражение - 4
                <br />
                Вербальная агрессия - 3
                <br />
                Обида - 2
                <br />
                Подозрительность - 5
                <br />
                Негативизм - 1
                <br />
                Чувство вины - 3
              </s.Td>
            </s.Tr>
            <s.Tr>
              <s.Td>Тест темперамента В.М. Русалова</s.Td>
              <s.Td>-</s.Td>
            </s.Tr>
            <s.Tr>
              <s.Td>Личностный опросник Кеттела</s.Td>
              <s.Td>-</s.Td>
            </s.Tr>
            <s.Tr>
              <s.Td>Тест-опросник самоотношения (Столин, Пантелеев)</s.Td>
              <s.Td>-</s.Td>
            </s.Tr>
            <s.Tr>
              <s.Td>Краткий отборочный тест КОТ, форма А</s.Td>
              <s.Td>-</s.Td>
            </s.Tr>
            <s.Tr>
              <s.Td>Цветовой тест Люшера</s.Td>
              <s.Td>-</s.Td>
            </s.Tr>
            <s.Tr>
              <s.Td>Опросник Vark</s.Td>
              <s.Td>-</s.Td>
            </s.Tr>
          </tbody>
        </s.Table>
      </Container>
    </s.Section>
  )
}
