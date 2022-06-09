import React, { useState } from 'react'
import { Button } from '../../../components/Button'
import Container from '../../../components/Container'
import { Luscher as LuscherTest } from '../../../components/Luscher'

import { PageWrapper, Wrapper } from '../styles'
import * as s from './styles'

export const Luscher = () => {
  const [hasReadDescription, setHasReadDescription] = useState(true)
  const [isDone, setIsDone] = useState(false)

  return (
    <PageWrapper>
      <Container>
        <Wrapper>
          <s.Tittle>
            Цветовой тест Люшера
          </s.Tittle>
          {hasReadDescription
            ? (
              <>
                <s.Subtitle>
                  Вам будет представлено изображение восьми цветных карточек. Выберите, пожалуйста, карточку
                  того цвета, который сейчас наиболее Вам приятен. Просьба к Вам при этом не связывать цвет
                  карточки с цветом Вашей одежды или машины, отвлечься от них. После Вашего выбора эта карточка
                  исчезнет, и Вы повторите свои действия до тех пор, пока не переберете все карточки.
                </s.Subtitle>
                <Button onClick={() => setHasReadDescription(false)} className={s.StartButton}>
                  Начать тестирование
                </Button>
              </>
            ) : (
              <>
                <Button onClick={() => setHasReadDescription(true)} className={s.ReturnButton}>
                  Вернуться к описанию
                </Button>
                <s.LuscherWrapper isDone={isDone}>
                  <LuscherTest setIsDone={setIsDone} />
                </s.LuscherWrapper>
              </>
            )
          }
        </Wrapper>
      </Container>
    </PageWrapper>
  )
}
