import React from 'react'
import Header from '../../components/Header'
import Container from '../../components/Container'
import * as s from './styles'
import Main from '../../assets/main.jpg'
import Card from '../../components/Card/Card'

export const HomePage = () => {
  return (
    <>
      <Header />
      <s.Section>
        <Container>
          <s.Title>
            Диагностический инструментарий для построения цифрового двойника студента
          </s.Title>
          <s.Wrapper>
            <img src={Main} alt='Main' className={s.image} />
            <s.TextWrapper>
              <s.Text>
                Программный продукт направлен на решение проблемы построения цифровой модели обучающегося,
                включающей в себя данные об индивидуальных особенностях и способностях студента.
              </s.Text>
              <s.Text>
                При помощи данного инструментария появится возможность получения фактов об обучаемом,
                которые описывают различные личностные характеристики, профессиональные качества, лидерство,
                темперамента и т.д.
              </s.Text>
              <s.Text>
                Целевой аудиторией данной системы, прежде всего, являются студенты,
                преподаватели и сотрудники учебных подразделений высших учебных заведений.
              </s.Text>
            </s.TextWrapper>
          </s.Wrapper>
        </Container>
      </s.Section>
      <s.TestsSection>
        <Container>
          <s.SmallTitle>
            Цифровой двойник включает в себя диагностику по следующим общепризнанным методикам
          </s.SmallTitle>
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
      </s.TestsSection>
    </>
  )
}
