import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '../../../components/Button'
import Container from '../../../components/Container'
import Header from '../../../components/Header'

import { Wrapper } from '../styles'
import * as s from './styles'
import { Radio, RadioGroup } from '../../../components/Radio'

export const SecondTest = () => {
  const { control, register, reset, handleSubmit, formState: { errors } } = useForm()
  const [result, setResult] = useState()

  console.log(errors)

  const onSubmit = (data) => {
    console.log(data)
    setResult(data)
    reset({})
  }

  const renderResult = () => {
    return Object.entries(result).map(([key, value]) => {
      return (
        <s.Result key={key}>{key}: <b>{value}</b></s.Result>
      )
    })
  }

  const handleReturn = () => {
    setResult(undefined)
  }

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <s.Tittle>
            Управление информацией и данными
          </s.Tittle>
          {result
            ? (
              <>
                <s.ResultWrapper>
                  Результаты тестирования:
                  {renderResult()}
                </s.ResultWrapper>
                <Button type='button' onClick={handleReturn}>
                  Вернуться к тесту
                </Button>
              </>
            )
            : (
              <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <s.QuestionWrapper>
                  <s.Question>
                    1. Что такое блог?
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="1"
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name='a' value="a" id="1_a">
                              комментарий к статье
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name='b' value="b" id="1_b">
                              веб-сайт, основное содержимое которого - регулярно добавляемые записи,
                              содержащие текст, изображения и мультимедиа
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name='c' value="c" id="1_c">
                              интерактивный многопользовательский веб-сайт, содержимое которых наполняется администратором сети
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    2. Гипермедиа - это:
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="2"
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name='2' value='a' id='2_a'>
                              гиперпространство + мультимедиа
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name='2' value='b' id='2_b'>
                              гигантский период времени
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name='2' value='c' id='2_c'>
                              гипертекст + мультимедиа
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name='2' value='d' id='2_d'>
                              гипермаркет + медицина
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    3. Какое главное преимущество служб Google и Яндекс?
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="3"
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name='3' value='a' id='3_a'>
                              все они позволяют организовать совместную работу над документами
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name='3' value='b' id='3_b'>
                              это единственная программа, которая предоставляет подобные служб
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name='3' value='c' id='3_c'>
                              не требуется установка программ
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    4.	Что представляют собой социальные сети?
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="4"
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name='4' value="a" id="4_a">
                              Социальные сети представляют собой интерактивные многопользовательские веб-сайты,
                              содержимое которых наполняется администраторами сети
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name='4' value="b" id="4_b">
                              Социальные сети представляют собой интерактивные многопользовательские веб-сайты,
                              содержимое которых наполняется самими участниками сети
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name='4' value="c" id="4_c">
                              Социальные сети представляют собой интерактивные единопользовательские веб-сайты,
                              содержимое которых наполняется самими участниками сети
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    5. Что такое «сетевой проект»?
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="5"
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <>
                          <RadioGroup value={value} onChange={onChange}>
                            <s.AnswerWrapper>
                              <Radio name="5" value="a" id="5_a">
                                совместная учебно-познавательная, исследовательская, творческая или игровая
                                деятельность учащихся-партнеров, организованная на основе компьютерной
                                телекоммуникации, имеющая общую проблему, цель, согласованные методы,
                                способы деятельности, направленная на достижение совместного результата деятельности
                              </Radio>
                            </s.AnswerWrapper>
                            <s.AnswerWrapper>
                              <Radio name="5" value="b" id="5_b">
                                удаленное взаимодействие пользователей одной сети, объединенных общей целью (проектом),
                                которая связана с решением творческой, исследовательской задачи с заранее
                                неизвестным результатом
                              </Radio>
                            </s.AnswerWrapper>
                          </RadioGroup>
                        </>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    6. Какие технологии позволяют реализовать визуализацию выполнения этапов проекта в режиме онлайн?
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="6"
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="6" value="a" id="6_a">
                              SCRAM
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="6" value="b" id="6_b">
                              Trello
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="6" value="c" id="6_c">
                              канбан-доска
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    7. Есть ли в сервисе Trello возможность отслеживать вклад каждого участника в общую работу?
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="7"
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="7" value="a" id="7_a">
                              да
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="7" value="b" id="7_b">
                              нет
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    8. Есть ли возможность работать с Trello через мобильные приложения?
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="8"
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="8" value="a" id="8_a">
                              нет
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="8" value="b" id="8_b">
                              да, но только на iOS
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="8" value="c" id="8_c">
                              да, но только на Android
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="8" value="d" id="8_d">
                              да, приложения доступны для iOS и Android
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    9. Что такое «нетворкинг»?
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="9"
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="9" value="a" id="9_a">
                              организация совместной деятельности в сети Интернет
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="9" value="b" id="9_b">
                              деятельность, направленная на создание цифрового портфолио
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="9" value="c" id="9_c">
                              умение заводить в сети знакомства с нужными людьми для развития карьеры, бизнеса
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    10. Назовите онлайн-ресурс для создания интерактивных презентаций, опросов, голосования
                    в режиме реального времени, позволяющий получать моментальную обратную связь от аудитории.
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="10"
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="10" value="a" id="10_a">
                              Jamboard
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="10" value="b" id="10_b">
                              Google Формы
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="10" value="c" id="10_c">
                              Mentimeter
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    11. Что из перечисленного не является облачным хранилищем?
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="11"
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="11" value="a" id="11_a">
                              Google Диск
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="11" value="b" id="11_b">
                              Яндекс.Диск
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="11" value="c" id="11_c">
                              Jamboard
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="11" value="d" id="11_d">
                              Облако Mail
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    12. Инновационная технология, которая позволяет объединять ИТ-ресурсы различных аппаратных
                    платформ в единое целое и предоставлять пользователю доступ к ним через локальную сеть
                    или через интернет, называется:
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="12"
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="12" value="a" id="12_a">
                              облачное приложение
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="12" value="b" id="12_b">
                              облачные хранилища
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="12" value="c" id="12_c">
                              облачные хранилища
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <Button type="submit" onClick={() => handleSubmit(onSubmit)}>
                  Показать результат
                </Button>
              </form>
            )
          }
        </Wrapper>
      </Container>
    </>
  )
}
