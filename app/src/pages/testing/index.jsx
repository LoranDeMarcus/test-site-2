import React from 'react'
import Container from '../../components/Container'
import * as s from './styles'
import Card from '../../components/Card/Card'

export const Testing = () => {
  return (
    <div>
      <s.Section>
        <Container>
          <s.Title>
            Диагностический инструментарий
          </s.Title>
          <s.Subtitle>
            Выберите методику для диагностики:
          </s.Subtitle>
          <s.CardsWrapper>
            <Card to='/testing/buss-durkee'>
              Диагностика состояния агрессии: Опросник Басса-Дарка
            </Card>
            <Card to='/testing/rusalov'>
              Тест темперамента В.М. Русалова
            </Card>
            <Card to='/testing/cattel'>
              Личностный опросник Кеттела
            </Card>
            <Card to='/testing/pantileev'>
              Тест-опросник самоотношения (Столин, Пантелеев)
            </Card>
            <Card to='/testing/kot'>
              Краткий отборочный тест КОТ, форма А
            </Card>
            <Card to='/testing/luscher'>
              Цветовой тест Люшера
            </Card>
            <Card to='/testing/vark'>
              Опросник Vark
            </Card>
          </s.CardsWrapper>
        </Container>
      </s.Section>
    </div>
  )
}
