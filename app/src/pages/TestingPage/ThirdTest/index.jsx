import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '../../../components/Button'
import Container from '../../../components/Container'
import Header from '../../../components/Header'

import { Wrapper } from '../styles'
import * as s from './styles'
import { Radio, RadioGroup } from '../../../components/Radio'

export const ThirdTest = () => {
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
            Управление цифровой идентичностью
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
                    1. Какой цифровой след называют выхлопными данными?
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="1"
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name='a' value="a" id="1_a">
                              активный цифровой след
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name='b' value="b" id="1_b">
                              пассивный цифровой след
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name='c' value="c" id="1_c">
                              средний цифровой след
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    2. Какой цифровой след появляется, когда пользователь намеренно публикует свои персональные данные,
                    чтобы рассказать о себе на веб-сайтах и в социальных медиа?
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="2"
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name='2' value='a' id='2_a'>
                              пассивный цифровой след
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name='2' value='b' id='2_b'>
                              активный цифровой след
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name='2' value='c' id='2_c'>
                              средний цифровой след
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    3. Сколько основных типа цифровых следов существуют?
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="3"
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name='3' value='a' id='3_a'>
                              3
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name='3' value='b' id='3_b'>
                              4
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name='3' value='c' id='3_c'>
                              2
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    4. Цифровое портфолио – это:
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="4"
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name='4' value="a" id="4_a">
                              документ об образовании
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name='4' value="b" id="4_b">
                              папка с документами работ специалиста
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name='4' value="c" id="4_c">
                              ценные бумаги
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name='4' value="d" id="4_d">
                              список работ специалиста, представляющие его умения и навыки с лучших сторон
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    5.	Какого компонента точно нет в рекомендованной структуре портфолио педагога?
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
                                примеры работ
                              </Radio>
                            </s.AnswerWrapper>
                            <s.AnswerWrapper>
                              <Radio name="5" value="b" id="5_b">
                                визитная карточка
                              </Radio>
                            </s.AnswerWrapper>
                            <s.AnswerWrapper>
                              <Radio name="5" value="c" id="5_c">
                                вопросы и пожелания
                              </Radio>
                            </s.AnswerWrapper>
                            <s.AnswerWrapper>
                              <Radio name="5" value="d" id="5_d">
                                банк личных достижений
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
                    6. Для чего используется «4poftfolio»?
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="6"
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="6" value="a" id="6_a">
                              для составления портфолио по заданному там шаблону
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="6" value="b" id="6_b">
                              чтобы выложенный сайт смогли посмотреть другие
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="6" value="c" id="6_c">
                              чтобы закачать туда файл с готовой работой и сделать доступным другим
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="6" value="d" id="6_d">
                              все вышеперечисленное
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    7. Бренд педагога – это...
                  </s.Question>
                  <s.Answers>
                    <Controller
                      name="7"
                      control={control}
                      render={({field: {onChange, value}}) => (
                        <RadioGroup value={value} onChange={onChange}>
                          <s.AnswerWrapper>
                            <Radio name="7" value="a" id="7_a">
                              комплекс характеристик, которыми должен обладать современный успешный педагог
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="7" value="b" id="7_b">
                              опыт и знания педагога-эксперта, оформленные в маркетинговую упаковку
                            </Radio>
                          </s.AnswerWrapper>
                          <s.AnswerWrapper>
                            <Radio name="7" value="d" id="7_d">
                              образ, который сформировался в среде профессионалов, коллег или в среде учеников,
                              студентов, слушателей курсов
                            </Radio>
                          </s.AnswerWrapper>
                        </RadioGroup>
                      )}
                    />
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    8. Продвижение личного бренда включает несколько этапов...
                  </s.Question>
                  <s.Answers>
                    <s.AnswerWrapper>
                      <s.Input type='checkbox' name='8' value='a' id='8_a' {...register('8')} />
                      <s.Label htmlFor='8_a'>
                        сбор и систематизация информации о себе, своих успехах и достижениях в портфолио
                      </s.Label>
                    </s.AnswerWrapper>
                    <s.AnswerWrapper>
                      <s.Input type='checkbox' name='8' value='b' id='8_b' {...register('8')} />
                      <s.Label htmlFor='8_b'>
                        оценка и мониторинг реальных конкурентов
                      </s.Label>
                    </s.AnswerWrapper>
                    <s.AnswerWrapper>
                      <s.Input type='checkbox' name='8' value='c' id='8_c' {...register('8')} />
                      <s.Label htmlFor='8_c'>
                        составление плана продвижения личного бренда в онлайн и офлайн
                      </s.Label>
                    </s.AnswerWrapper>
                    <s.AnswerWrapper>
                      <s.Input type='checkbox' name='8' value='d' id='8_d' {...register('8')} />
                      <s.Label htmlFor='8_d'>
                        поиск администратора социальных сетей
                      </s.Label>
                    </s.AnswerWrapper>
                    <s.AnswerWrapper>
                      <s.Input type='checkbox' name='8' value='e' id='8_e' {...register('8')} />
                      <s.Label htmlFor='8_e'>
                        выбор социальных сетей, которые стоит использовать для продвижения личного бренда
                      </s.Label>
                    </s.AnswerWrapper>
                    <s.AnswerWrapper>
                      <s.Input type='checkbox' name='8' value='f' id='8_f' {...register('8')} />
                      <s.Label htmlFor='8_f'>
                        личное участие в профессиональных мероприятиях
                      </s.Label>
                    </s.AnswerWrapper>
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    9. На какие критерии успешности следует опираться при составлении своего портфолио как бренда педагога?
                  </s.Question>
                  <s.Answers>
                    <s.AnswerWrapper>
                      <s.Input type='checkbox' name='9' value='a' id='9_a' {...register('9')} />
                      <s.Label htmlFor='9_a'>
                        образование и самообразование педагога, курсы повышения квалификации
                      </s.Label>
                    </s.AnswerWrapper>
                    <s.AnswerWrapper>
                      <s.Input type='checkbox' name='9' value='b' id='9_b' {...register('9')} />
                      <s.Label htmlFor='9_b'>
                        принятие инноваций и степень внедрения этих инноваций
                      </s.Label>
                    </s.AnswerWrapper>
                    <s.AnswerWrapper>
                      <s.Input type='checkbox' name='9' value='c' id='9_c' {...register('9')} />
                      <s.Label htmlFor='9_c'>
                        уровень профессиональных (цифровых и специальных) компетенций педагога
                      </s.Label>
                    </s.AnswerWrapper>
                    <s.AnswerWrapper>
                      <s.Input type='checkbox' name='9' value='d' id='9_d' {...register('9')} />
                      <s.Label htmlFor='9_d'>
                        уровень успешности обучающихся
                      </s.Label>
                    </s.AnswerWrapper>
                  </s.Answers>
                </s.QuestionWrapper>
                <s.QuestionWrapper>
                  <s.Question>
                    10. Цифровое портфолио по субъекту деятельности может быть:
                  </s.Question>
                  <s.Answers>
                    <s.AnswerWrapper>
                      <s.Input type='checkbox' name='10' value='a' id='10_a' {...register('10')} />
                      <s.Label htmlFor='10_a'>
                        индивидуальное
                      </s.Label>
                    </s.AnswerWrapper>
                    <s.AnswerWrapper>
                      <s.Input type='checkbox' name='10' value='b' id='10_b' {...register('10')} />
                      <s.Label htmlFor='10_b'>
                        групповое
                      </s.Label>
                    </s.AnswerWrapper>
                    <s.AnswerWrapper>
                      <s.Input type='checkbox' name='10' value='c' id='10_c' {...register('10')} />
                      <s.Label htmlFor='10_c'>
                        практико-ориентированное
                      </s.Label>
                    </s.AnswerWrapper>
                    <s.AnswerWrapper>
                      <s.Input type='checkbox' name='10' value='d' id='10_d' {...register('10')} />
                      <s.Label htmlFor='10_d'>
                        профессиональное
                      </s.Label>
                    </s.AnswerWrapper>
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
