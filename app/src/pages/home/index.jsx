import React from 'react'
import Container from '../../components/Container'
import * as s from './styles'
import Main from '../../assets/main.jpg'
import Certificate from '../../assets/cert.jpg'

export const HomePage = () => {
  return (
    <>
      <s.Section>
        <Container>
          <s.Title>
            Диагностический инструментарий для построения цифрового двойника студента
          </s.Title>
          <s.SectionInner>
            <img src={Main} alt='Main' className={s.image} />
            <s.TextWrapper>
              <s.Text bold>
                Цифровой двойник студента – это модель, которая позволяет собирать и накапливать информацию
                о реальном студенте по мере его обучения на курсе / образовательной программе
              </s.Text>
              <s.Text>
                Диагностический инструментарий направлен на решение проблемы построения цифровой модели обучающегося,
                включающей в себя данные об индивидуальных особенностях и способностях студента.
              </s.Text>
              <s.Text>
                При помощи данного инструментария появится возможность получения фактов об обучаемом,
                которые описывают различные личностные характеристики, профессиональные качества, лидерство,
                темперамента и т.д.
              </s.Text>
            </s.TextWrapper>
          </s.SectionInner>
        </Container>
      </s.Section>
      <s.TransparentSection>
        <Container>
          <s.TitleThird>
            Инофрмация о тестировании
          </s.TitleThird>
          <s.Wrapper>
            <s.TextDark>
              Диагностика состояния агрессии. Опросник Басса-Дарки помогает определить уровень состояния
              агрессии и враждебности студента.
            </s.TextDark>
            <s.TextDark>
              Цветовой тест Люшера: при помощи данного опросника можно измерить психофизиологическое состояние
              студента, стрессоустойчивость, активность и коммуникативные  способности.
            </s.TextDark>
            <s.TextDark>
              Тест темперамента В.М.Русалова: позволяет определить уровни эргичности, пластичности,
              темпа и эмоциональности как свойств темперамента.
            </s.TextDark>
            <s.TextDark>
              Личностный опросник Кеттела: предназначен для выявления особенностей характера
              испытуемого и построения профиля его личности.
            </s.TextDark>
            <s.TextDark>
              Модель стилей обучения VARK: помогает определить познавательный стиль студента
              по типу восприятия учебного материала.
            </s.TextDark>
            <s.TextDark>
              Многомерный опросник исследований самоотношения С.Р.Пантилеева: позволяет выявить структуру
              самоотношения личности и выраженности отдельных компонентов самоотношения.
            </s.TextDark>
            <s.TextDark>
              Краткий ориентировочный тест В.Н.Бузина, Э.Ф.Вандерлика: предоставляет возможность
              определения интегрального показателя общих способностей студента
            </s.TextDark>
          </s.Wrapper>
        </Container>
      </s.TransparentSection>
      <s.Section>
        <Container>
          <s.TitleThird>
            Шаги Тестируемого
          </s.TitleThird>
        </Container>
        <s.CardsContainer>
          <s.Card>
            Ознакомиться с правилами диагностического инструментария
          </s.Card>
          <s.Card>
            Зарегистрироваться в личном кабинете
          </s.Card>
          <s.Card>
            Пройти тестирование
          </s.Card>
          <s.Card>
            Получить и проанализировать свой результат
          </s.Card>
        </s.CardsContainer>
      </s.Section>
      <s.TransparentSection>
        <Container>
          <s.TextDark>
            Целевой аудиторией данной системы, прежде всего, являются студенты,
            преподаватели и сотрудники учебных подразделений высших учебных заведений.
          </s.TextDark>
        </Container>
      </s.TransparentSection>
      <s.Section>
        <img src={Certificate} alt='certificate' className={s.certificate} />
      </s.Section>
    </>
  )
}
