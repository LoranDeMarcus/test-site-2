import React from 'react'
import Header from '../../components/Header'
import Container from '../../components/Container'
import * as s from './styles'
import Card from '../../components/Card/Card'

export const TestingPage = () => {
  return (
    <div>
      <Header />
      <s.Section>
        <Container>
          <s.Title>
            Цифровой двойник включает в себя диагностику по следующим общепризнанным методикам
          </s.Title>
          <s.CardsWrapper>
            <Card>
              Диагностика состояния агрессии: Опросник Басса-Дарка
            </Card>
            <Card>
              Тест темперамента В.М. Русалова
            </Card>
            <Card>
              Личностный опросник Кеттела
            </Card>
            <Card>
              Тест-опросник самоотношения (Столин, Пантелеев)
            </Card>
            <Card>
              Краткий отборочный тест КОТ, форма А
            </Card>
            <Card>
              Цветовой тест Люшера
            </Card>
            <Card>
              Опросник Vark
            </Card>
          </s.CardsWrapper>
        </Container>
      </s.Section>
    </div>
  )
}
