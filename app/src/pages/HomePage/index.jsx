import React from 'react'
import Header from '../../components/Header'
import Container from '../../components/Container'
import * as s from './styles'
import Hero from '../../assets/hero.jpg'

export const HomePage = () => {
  return (
    <>
      <Header />
      <s.Section>
        <Container>
          <s.Wrapper>
            <s.TextWrapper>
              <s.Title>
                Диагностический инструментарий для построения цифрового двойника студента
              </s.Title>
              <s.Text>
                Программный продукт направлен на решение проблемы построения цифровой модели обучающегося,
                включающей в себя данные об индивидуальных особенностях и способностях студента. При помощи данного
                инструментария появится возможность получения фактов об обучаемом, которые описывают различные личностные
                характеристики, профессиональные качества, лидерство, темперамента и т.д. Целевой аудиторией
                данной системы, прежде всего, являются студенты, преподаватели и сотрудники учебных подразделений
                высших учебных заведений.
              </s.Text>
            </s.TextWrapper>
            <img src={Hero} alt='Main' className={s.image} />
          </s.Wrapper>
        </Container>
      </s.Section>
    </>
  )
}
