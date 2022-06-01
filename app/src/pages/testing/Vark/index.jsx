import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '../../../components/Button'
import Container from '../../../components/Container'

import { PageWrapper, Wrapper } from '../styles'
import * as s from './styles'
import { Radio, RadioGroup } from '../../../components/Radio'

export const Vark = () => {
  const [hasReadDescription, setHasReadDescription] = useState(true)
  const { control, handleSubmit, register, formState: { errors } } = useForm()

  console.log(errors)

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <PageWrapper>
      <Container>
        <Wrapper>
          <s.Tittle>
            Опросник Vark
          </s.Tittle>
          {hasReadDescription
            ? (
              <>
                <s.Subtitle>
                  Данная методика позволяет определить ведущие и репрезентативные системы восприятия.
                  Это инвентаризация самоотчетов, в которой представлен ряд ситуаций,
                  и респондентов просят выбрать ответы, которые лучше всего соответствуют их предпочтительному
                  подходу к обучению.
                  Выберите ответы, которые больше всего Вам подходят. Вариантов может быть несколько.
                  Если ни один из ответов не подходит, оставьте поле незаполненным
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
                <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                  <s.QuestionWrapper>
                    <s.Question>
                      1.	Группа туристов хочет побольше узнать о парках и заповедниках, которые расположены в Вашей местности. Вы:
                    </s.Question>
                    <s.Answers>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="1" value="a" id="1_a" {...register('1')} />
                        <s.Label htmlFor="1_a">
                          предложите почитать книгу или брошюру о парках и заповедниках.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="1" value="b" id="1_b" {...register('1')} />
                        <s.Label htmlFor="1_b">
                          предложите прогуляться по паркам и заповедникам вместе с Вами.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="1" value="c" id="1_c" {...register('1')} />
                        <s.Label htmlFor="1_c">
                          расскажете о парках и заповедниках сами или организуете встречу с экскурсоводом.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="1" value="d" id="1_d" {...register('1')} />
                        <s.Label htmlFor="1_d">
                          покажете им фотографии или книги с иллюстрациями.
                        </s.Label>
                      </s.AnswerWrapper>
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      2.	Для того, чтобы научиться делать фотографии на своем новом цифровом фотоаппарате Вы используете книгу, учебный диск или веб-сайт и хотели бы:
                    </s.Question>
                    <s.Answers>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="2" value="a" id="2_a" {...register('2')} />
                        <s.Label htmlFor="2_a">
                          иметь достаточно большое количество примеров хорошо и плохо сделанных фотографий и рекомендаций по их улучшению.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="2" value="b" id="2_b" {...register('2')} />
                        <s.Label htmlFor="2_b">
                          иметь возможность задать вопросы и побеседовать по поводу строения и работы фотоаппарата.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="2" value="c" id="2_c" {...register('2')} />
                        <s.Label htmlFor="2_c">
                          пользоваться четкими словесными   инструкциями с перечнем ключевых понятий и того, что необходимо сделать.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="2" value="d" id="2_d" {...register('2')} />
                        <s.Label htmlFor="2_d">
                          чтобы были представлены схемы, изображающие фотоаппарат и его отдельные части с указанием на то, какую роль они играют.
                        </s.Label>
                      </s.AnswerWrapper>
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      3.	Вы отдаете предпочтение преподавателю или докладчику, который в процессе своей речи использует:
                    </s.Question>
                    <s.Answers>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="3" value="a" id="3_a" {...register('3')} />
                        <s.Label htmlFor="3_a">
                          графики, таблицы, схемы или диаграммы.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="3" value="b" id="3_b" {...register('3')} />
                        <s.Label htmlFor="3_b">
                          демонстрационные модели или практические задания.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="3" value="c" id="3_c" {...register('3')} />
                        <s.Label htmlFor="3_c">
                          интерактивные методы, т.е. вопрос – ответ, беседа, групповая дискуссия, приглашенные гости.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="3" value="d" id="3_d" {...register('3')} />
                        <s.Label htmlFor="3_d">
                          раздаточный материал, книги или зачитывание отдельных фрагментов информации.
                        </s.Label>
                      </s.AnswerWrapper>
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      4.	Вы приняли участие в соревнованиях или прошли тест и хотели бы получить оценку своих результатов. Желательно, чтобы она была представлена Вам:
                    </s.Question>
                    <s.Answers>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="4" value="a" id="4_a" {...register('4')} />
                        <s.Label htmlFor="4_a">
                          с использованием графиков, демонстрирующих Ваши достижения.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="4" value="b" id="4_b" {...register('4')} />
                        <s.Label htmlFor="4_b">
                          с использованием примеров того, что Вы сделали.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="4" value="c" id="4_c" {...register('4')} />
                        <s.Label htmlFor="4_c">
                          кем - то устно.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="4" value="d" id="4_d" {...register('4')} />
                        <s.Label htmlFor="4_d">
                          письменно, в виде описаний Ваших результатов.
                        </s.Label>
                      </s.AnswerWrapper>
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      5.	Вы собираетесь приготовить что-то особенное для своей семьи и для этого:
                    </s.Question>
                    <s.Answers>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="5" value="a" id="5_a" {...register('5')} />
                        <s.Label htmlFor="5_a">
                          используете уже проверенную Вами на практике книгу с кулинарными рецептами.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="5" value="b" id="5_b" {...register('5')} />
                        <s.Label htmlFor="5_b">
                          найдете блюдо в кулинарной книге, отдавая предпочтение тому, что изображено на картинках более привлекательным.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="5" value="c" id="5_c" {...register('5')} />
                        <s.Label htmlFor="5_c">
                          приготовите то, что Вы знаете без каких-либо инструкций.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="5" value="d" id="5_d" {...register('5')} />
                        <s.Label htmlFor="5_d">
                          спросите рецепт у друзей.
                        </s.Label>
                      </s.AnswerWrapper>
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      6.	Я отдаю предпочтение веб-сайтам с:
                    </s.Question>
                    <s.Answers>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="6" value="a" id="6_a" {...register('6')} />
                        <s.Label htmlFor="6_a">
                          виртуальными кнопками, на которые необходимо нажать, “ перетянуть ” или попробовать выполнить определенное задание.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="6" value="b" id="6_b" {...register('6')} />
                        <s.Label htmlFor="6_b">
                          интересными словесными описаниями, перечнем понятий с сопутствующими пояснениями.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="6" value="c" id="6_c" {...register('6')} />
                        <s.Label htmlFor="6_c">
                          аудио компонентами, с помощью которых можно слушать музыку, радиопрограммы, интервью.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="6" value="d" id="6_d" {...register('6')} />
                        <s.Label htmlFor="6_d">
                          красочным, продуманным веб-дизайном.
                        </s.Label>
                      </s.AnswerWrapper>
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      7.	К Вам обратился человек, оторый хочет добраться до аэропорта, вокзала или центра города, в котором Вы живете. Вы:
                    </s.Question>
                    <s.Answers>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="7" value="a" id="7_a" {...register('7')} />
                        <s.Label htmlFor="7_a">
                          проведете этого человека.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="7" value="b" id="7_b" {...register('7')} />
                        <s.Label htmlFor="7_b">
                          объясните на словах, в каком направлении двигаться.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="7" value="c" id="7_c" {...register('7')} />
                        <s.Label htmlFor="7_c">
                          изобразите дорогу схематично (в виде карты).
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="7" value="d" id="7_d" {...register('7')} />
                        <s.Label htmlFor="7_d">
                          напишете нструкции ( без карты ).
                        </s.Label>
                      </s.AnswerWrapper>
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      8.	Вы собираетесь купить цифровой фотоаппарат или мобильный телефон. Что , кроме цены, может повлиять на Ваше решение?
                    </s.Question>
                    <s.Answers>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="8" value="a" id="8_a" {...register('8')} />
                        <s.Label htmlFor="8_a">
                          Демонстрация работы технического устройства.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="8" value="b" id="8_b" {...register('8')} />
                        <s.Label htmlFor="8_b">
                          Чтение технических характеристик.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="8" value="c" id="8_c" {...register('8')} />
                        <s.Label htmlFor="8_c">
                          Современный дизайн и привлекательный внешний вид.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="8" value="d" id="8_d" {...register('8')} />
                        <s.Label htmlFor="8_d">
                          Продавец, который демонстрирует товар.
                        </s.Label>
                      </s.AnswerWrapper>
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      9.	Вы организовываете вечеринку для группы людей. Для того, чтобы узнать их мнение по поводу предстоящего праздника Вы:
                    </s.Question>
                    <s.Answers>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="9" value="a" id="9_a" {...register('9')} />
                        <s.Label htmlFor="9_a">
                          опишете на словах самые интересные моменты предстоящего праздника.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="9" value="b" id="9_b" {...register('9')} />
                        <s.Label htmlFor="9_b">
                          позвоните или напишите электронное письмо.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="9" value="c" id="9_c" {...register('9')} />
                        <s.Label htmlFor="9_c">
                          предоставите им сценарий праздника в письменном виде.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="9" value="d" id="9_d" {...register('9')} />
                        <s.Label htmlFor="9_d">
                          красочным, продуманным веб-дизайном.
                        </s.Label>
                      </s.AnswerWrapper>
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      10.	Сайт имеет видео, показывающее, как сделать специальный график. Существует говорящий, некоторые списки и слова, описывающие то, что должен делать и некоторые схемы. Вы бы узнать больше всего от:
                    </s.Question>
                    <s.Answers>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="10" value="a" id="10_a" {...register('10')} />
                        <s.Label htmlFor="10_a">
                          наблюдая за действиями.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="10" value="b" id="10_b" {...register('10')} />
                        <s.Label htmlFor="10_b">
                          видя диаграммы.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="10" value="c" id="10_c" {...register('10')} />
                        <s.Label htmlFor="10_c">
                          читая слова.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="10" value="d" id="10_d" {...register('10')} />
                        <s.Label htmlFor="10_d">
                          прослушивание
                        </s.Label>
                      </s.AnswerWrapper>
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      11.	Что, кроме цены, может повлиять на Ваше решение купить новую документальную или научную книгу?
                    </s.Question>
                    <s.Answers>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="11" value="a" id="11_a" {...register('11')} />
                        <s.Label htmlFor="11_a">
                          Ее внешний вид.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="11" value="b" id="11_b" {...register('11')} />
                        <s.Label htmlFor="11_b">
                          Наличие в ней событий, основанных на реальных жизненных фактах.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="11" value="c" id="11_c" {...register('11')} />
                        <s.Label htmlFor="11_c">
                          Рекомендация друга.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="11" value="d" id="11_d" {...register('11')} />
                        <s.Label htmlFor="11_d">
                          Прочтение отдельных фрагментов книги.
                        </s.Label>
                      </s.AnswerWrapper>
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      12.	Вспомните время, когда Вы учились чему-то впервые. Постарайтесь не выбирать в качестве
                      примера обучение физическому навыку, например, езду на велосипеде. Обучение Вам давалось легче
                      всего, когда информация:
                    </s.Question>
                    <s.Answers>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="12" value="a" id="12_a" {...register('12')} />
                        <s.Label htmlFor="12_a">
                          была представлена в виде диаграмм и графиков, т.е. визуальных компонентов.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="12" value="b" id="12_b" {...register('12')} />
                        <s.Label htmlFor="12_b">
                          была наглядно продемонстрирована.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="12" value="c" id="12_c" {...register('12')} />
                        <s.Label htmlFor="12_c">
                          была представлена в виде письменных инструкций, например, в справочнике, руководстве по пользованию или в учебнике.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="12" value="d" id="12_d" {...register('12')} />
                        <s.Label htmlFor="12_d">
                          исходила от человека, который объяснял основные моменты и отвечал на задаваемые вопросы.веб-дизайном.
                        </s.Label>
                      </s.AnswerWrapper>
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      13.	Вы должны выступить с важной речью на конференции или по особому случаю, поэтому Вы:
                    </s.Question>
                    <s.Answers>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="13" value="a" id="13_a" {...register('13')} />
                        <s.Label htmlFor="13_a">
                          соберете достаточно много примеров и реальных фактов, чтобы сделать доклад более интересным и содержательным.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="13" value="b" id="13_b" {...register('13')} />
                        <s.Label htmlFor="13_b">
                          напишете речь полностью и выучите ее, прочитав несколько раз.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="13" value="c" id="13_c" {...register('13')} />
                        <s.Label htmlFor="13_c">
                          предложите графики, диаграммы или таблицы, чтобы помочь объяснить основные моменты.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="13" value="d" id="13_d" {...register('13')} />
                        <s.Label htmlFor="13_d">
                          составите краткий план и попрактикуетесь говорить.
                        </s.Label>
                      </s.AnswerWrapper>
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      14.	Вы хотите изучить новую компьютерную программу или игру. Для этого Вы:
                    </s.Question>
                    <s.Answers>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="14" value="a" id="14_a" {...register('14')} />
                        <s.Label htmlFor="14_a">
                          будете действовать, опираясь на графики и схемы, представленные в руководстве.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="14" value="b" id="14_b" {...register('14')} />
                        <s.Label htmlFor="14_b">
                          побеседуете с людьми, которые разбираются в программе.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="14" value="c" id="14_c" {...register('14')} />
                        <s.Label htmlFor="14_c">
                          воспользуетесь клавиатурой или панелью управления без ознакомления с инструкцией.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="14" value="d" id="14_d" {...register('14')} />
                        <s.Label htmlFor="14_d">
                          прочитаете письменные инструкции, которые прилагаются к программе.
                        </s.Label>
                      </s.AnswerWrapper>
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      15.	У Вас болит колено. Будучи на приеме у врача, Вы хотели бы, чтобы он:
                    </s.Question>
                    <s.Answers>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="15" value="a" id="15_a" {...register('15')} />
                        <s.Label htmlFor="15_a">
                          предложил почитать книгу, в которой описана проблема или предоставил адрес Интернет-сайта, на котором можно найти всю нужную информацию.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="15" value="b" id="15_b" {...register('15')} />
                        <s.Label htmlFor="15_b">
                          словесно описал причину болей.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="15" value="c" id="15_c" {...register('15')} />
                        <s.Label htmlFor="15_c">
                          использовал пластмассовую модель колена для того, чтобы наглядно продемонстрировать источник болей.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="15" value="d" id="15_d" {...register('15')} />
                        <s.Label htmlFor="15_d">
                          схематически изобразил причину неприятных ощущений.
                        </s.Label>
                      </s.AnswerWrapper>
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      16.	Вы собираетесь сделать заказ в ресторане или кафе. Он будет основан на:
                    </s.Question>
                    <s.Answers>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="16" value="a" id="16_a" {...register('16')} />
                        <s.Label htmlFor="16_a">
                          внешнем виде блюд, которые едят остальные или на изображении блюда в меню.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="16" value="b" id="16_b" {...register('16')} />
                        <s.Label htmlFor="16_b">
                          описании блюда в меню.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="16" value="c" id="16_c" {...register('16')} />
                        <s.Label htmlFor="16_c">
                          уже опробованных блюдах.
                        </s.Label>
                      </s.AnswerWrapper>
                      <s.AnswerWrapper>
                        <s.Input type="checkbox" name="16" value="d" id="16_d" {...register('16')} />
                        <s.Label htmlFor="16_d">
                          совете официанта или друзей.
                        </s.Label>
                      </s.AnswerWrapper>
                    </s.Answers>
                  </s.QuestionWrapper>
                  <Button type="submit" onClick={() => handleSubmit(onSubmit)}>
                    Показать результат
                  </Button>
                </form>
              </>
            )
          }
        </Wrapper>
      </Container>
    </PageWrapper>
  )
}
