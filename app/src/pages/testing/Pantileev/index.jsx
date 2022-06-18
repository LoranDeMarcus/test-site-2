import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '../../../components/Button'
import Container from '../../../components/Container'

import { PageWrapper, Wrapper } from '../styles'
import * as s from './styles'
import { Radio, RadioGroup } from '../../../components/Radio'
import { Pie } from 'react-chartjs-2'

const labels = [
  'Шкала открытость-закрытость',
  'Шкала самообвинение',
  'Шкала внутренняя конфликтность',
  'Шкала самопривязанность',
  'Шкала самопринятие',
  'Шкала самоценность',
  'Шкала отраженное самоотношение',
  'Шкала самоуверенность',
]

const resultData = [8, 2, 5, 4, 7, 3, 6, 6]

const colors = [
  `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  `#${Math.floor(Math.random() * 16777215).toString(16)}`,
]

const data = {
  labels,
  datasets: [{
    data: resultData,
    backgroundColor: colors,
    hoverOffset: 4
  }]

}

const options = {
  plugins: {
    legend: false
  },
  elements: {}
}


export const Pantileev = () => {
  const [hasReadDescription, setHasReadDescription] = useState(true)
  const { control, handleSubmit, formState: { errors } } = useForm()
  const [isDone, setIsDone] = useState(false)

  console.log(errors)

  const onSubmit = (data) => {
    setIsDone(true)
    console.log(data)
  }

  return (
    <PageWrapper>
      <Container>
        <Wrapper>
          <s.Tittle>
            Опросник исследования самоотношения С.Р. Пантилеева
          </s.Tittle>
          {hasReadDescription && isDone && (
            <s.ResultWrapper>
              <s.ResultTitle>
                Результаты тестирования:
              </s.ResultTitle>
              <s.TestResultWrapper>
                <s.TestResult>
                  <s.TestResultText>
                    <s.Color bgc={colors[0]} />
                    Шкала открытость-закрытость - 8
                  </s.TestResultText>
                  <s.TestResultText>
                    <s.Color bgc={colors[1]} />
                    Шкала самообвинение - 2
                  </s.TestResultText>
                  <s.TestResultText>
                    <s.Color bgc={colors[2]} />
                    Шкала внутренняя конфликтность - 4
                  </s.TestResultText>
                  <s.TestResultText>
                    <s.Color bgc={colors[3]} />
                    Шкала самопривязанность - 4
                  </s.TestResultText>
                  <s.TestResultText>
                    <s.Color bgc={colors[4]} />
                    Шкала самопринятие - 7
                  </s.TestResultText>
                  <s.TestResultText>
                    <s.Color bgc={colors[5]} />
                    Шкала самоценность - 3
                  </s.TestResultText>
                  <s.TestResultText>
                    <s.Color bgc={colors[6]} />
                    Шкала отраженное самоотношение - 4
                  </s.TestResultText>
                  <s.TestResultText>
                    <s.Color bgc={colors[7]} />
                    Шкала самоуверенность - 6
                  </s.TestResultText>
                </s.TestResult>
                <s.ChartWrapper>
                  <Pie type="pie" data={data} options={options} />
                </s.ChartWrapper>
              </s.TestResultWrapper>
              <s.Recommendations>
                Рекоммендации для преподавателя:
                <s.ListRes>
                  <li>
                    Избегать агрссивных форм общения со студентом (агрессия порождает агрессию)
                  </li>
                  <li>
                    Построение взаимотношений не по типу вторжения, а на основе совета
                  </li>
                  <li>
                    Поощрение и одобрение инициативы
                  </li>
                </s.ListRes>
              </s.Recommendations>
            </s.ResultWrapper>
          )}
          {hasReadDescription
            ? (
              <>
                <s.Subtitle>
                  Вам предлагается ответить на вопросы (в форме возможных утверждений) об
                  особенностях Вашего
                  характера, привычках, интересах и т.п. На эти вопросы не может быть "правильных"
                  или "неправильных"
                  ответов т.к. каждый человек имеет право на свою собственную точку зрения. Для
                  того, чтобы полученные
                  на основании Ваших ответов результаты оказались наиболее информативными и
                  плодотворными
                  для конкретизации собственного представления о себе, Вам нужно постараться выбрать
                  наиболее
                  точные и правильные ответы. Отвечая, помните простые правила:
                </s.Subtitle>
                <s.List>
                  <s.ListItem>
                    Вопросы составлены так, что особого времени на обдумывание не требуется. Давайте
                    первым ответ,
                    который придет Вам в голову (как правило, он оказывается наиболее естественным).
                    Конечно,
                    вопросы слишком коротки, чтобы в них содержались все необходимые подробности.
                    Поэтому отвечайте,
                    представляя себе самые типичные ситуации, не задумываясь над деталями.
                  </s.ListItem>
                  <s.ListItem>
                    Возможно, некоторые вопросы Вам трудно отнести к себе. В таком случае
                    постарайтесь
                    дать наилучший предположительный ответ.
                  </s.ListItem>
                  <s.ListItem>
                    Помните, что - плохих ответов быть не может. Не пытайтесь произвести своими
                    ответами
                    благоприятное впечатление. Свободно выражайте свое собственное мнение. Читайте
                    последовательно
                    каждое из приведенных выше утверждений и решайте, верно оно по отношению к Вам
                    или неверно.
                  </s.ListItem>
                </s.List>
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
                      1. Мои слова довольно редко расходятся с делом.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="1"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="1" value="true" id="1_true">
                              Да
                            </Radio>
                            <Radio name="1" value="false" id="1_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      2. Случайному человеку я скорее всего покажусь человеком приятным.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="2"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="2" value="true" id="2_true">
                              Да
                            </Radio>
                            <Radio name="2" value="false" id="2_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      3. К чужим проблемам я всегда отношусь с тем же пониманием, что и к своим.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="3"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="3" value="true" id="3_true">
                              Да
                            </Radio>
                            <Radio name="3" value="false" id="3_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      4. У меня нередко возникает чувство, что то, о чем я с собой мысленно
                      разговариваю, мне неприятно.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="4"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="4" value="true" id="4_true">
                              Да
                            </Radio>
                            <Radio name="4" value="false" id="4_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      5. Думаю, что все мои знакомые относятся ко мне с симпатией.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="5"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="5" value="true" id="5_true">
                              Да
                            </Radio>
                            <Radio name="5" value="false" id="5_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      6. Самое разумное, что может сделать человек в своей жизни это не противиться
                      своей судьбе.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="6"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="6" value="true" id="6_true">
                              Да
                            </Radio>
                            <Radio name="6" value="false" id="6_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      7. У меня достаточно способностей и энергии воплотить в жизнь задуманное.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="7"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="7" value="true" id="7_true">
                              Да
                            </Radio>
                            <Radio name="7" value="false" id="7_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      8. Если бы я раздвоился, то мне было бы довольно интересно общаться со своим
                      двойником.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="8"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="8" value="true" id="8_true">
                              Да
                            </Radio>
                            <Radio name="8" value="false" id="8_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      9. Я не способен причинять душевную боль самым родным и любимым мною людям.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="9"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="9" value="true" id="9_true">
                              Да
                            </Radio>
                            <Radio name="9" value="false" id="9_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      10. Я считаю, что не грех пожалеть иногда самого себя.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="10"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="10" value="true" id="10_true">
                              Да
                            </Radio>
                            <Radio name="10" value="false" id="10_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      11. Совершив какой-то промах, я часто не могу понять, как мне могло прийти в
                      голову, что из задуманного могло получиться что-то хорошее.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="11"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="11" value="true" id="11_true">
                              Да
                            </Radio>
                            <Radio name="11" value="false" id="11_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      12. Чаще всего я одобряю свои планы и поступки.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="12"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="12" value="true" id="12_true">
                              Да
                            </Radio>
                            <Radio name="12" value="false" id="12_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      13. В моей личности есть, наверное, что-то такое, что способно вызвать у
                      других острую неприязнь.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="13"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="13" value="true" id="13_true">
                              Да
                            </Radio>
                            <Radio name="13" value="false" id="13_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      14. Когда я пытаюсь оценить себя, я прежде всего вижу свои недостатки.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="14"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="14" value="true" id="14_true">
                              Да
                            </Radio>
                            <Radio name="14" value="false" id="14_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      15. Я не могу быть для любимого человека интересным длительное время.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="15"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="15" value="true" id="15_true">
                              Да
                            </Radio>
                            <Radio name="15" value="false" id="15_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      16. Можно сказать, что я ценю себя достаточно высоко.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="16"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="16" value="true" id="16_true">
                              Да
                            </Radio>
                            <Radio name="16" value="false" id="16_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      17. Мой внутренний голос редко подсказывает мне то, с чем бы я в конце концов
                      не согласился.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="17"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="17" value="true" id="17_true">
                              Да
                            </Radio>
                            <Radio name="17" value="false" id="17_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      18. Многие мои знакомые не принимают меня всерьез.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="18"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="18" value="true" id="18_true">
                              Да
                            </Radio>
                            <Radio name="18" value="false" id="18_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      19. Бывало и не раз, что я сам остро ненавидел себя.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="19"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="19" value="true" id="19_true">
                              Да
                            </Radio>
                            <Radio name="19" value="false" id="19_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      20. Мне очень мешает недостаток энергии, волн и целеустремленности.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="20"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="20" value="true" id="20_true">
                              Да
                            </Radio>
                            <Radio name="20" value="false" id="20_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      21. В моей жизни возникали такие обстоятельства, когда я шел на сделку с
                      собственной совестью.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="21"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="21" value="true" id="21_true">
                              Да
                            </Radio>
                            <Radio name="21" value="false" id="21_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      22. Иногда я сам себя плохо понимаю.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="22"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="22" value="true" id="22_true">
                              Да
                            </Radio>
                            <Radio name="22" value="false" id="22_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      23. Порой бывает мучительно больно общаться с самим собой.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="23"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="23" value="true" id="23_true">
                              Да
                            </Radio>
                            <Radio name="23" value="false" id="23_false">
                              Нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      24. Думаю, что без труда смог бы найти общий язык с любым разумным и знающим
                      человеком.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="24"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="24" value="true" id="24_true">
                              Да
                            </Radio>


                            <Radio name="24" value="false" id="24_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      25. Если я и отношусь к кому-нибудь с укоризной, то прежде всего к самому
                      себе.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="25"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="25" value="true" id="25_true">
                              Да
                            </Radio>


                            <Radio name="25" value="false" id="25_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      26. Иногда я сомневаюсь, можно ли любить меня по-настоящему.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="26"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="26" value="true" id="26_true">
                              Да
                            </Radio>


                            <Radio name="26" value="false" id="26_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      27. Нередко мои споры с самим собой обрываются мыслью, что все равно выйдет не
                      так, как я решил.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="27"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="27" value="true" id="27_true">
                              Да
                            </Radio>


                            <Radio name="27" value="false" id="27_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      28. Мое отношение к самому себе можно назвать дружеским.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="28"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="28" value="true" id="28_true">
                              Да
                            </Radio>


                            <Radio name="28" value="false" id="28_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      29. Вряд ли найдутся люди, которым я не по душе.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="29"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="29" value="true" id="29_true">
                              Да
                            </Radio>


                            <Radio name="29" value="false" id="29_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      30. Часто я не без издевки подшучиваю над собой.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="30"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="30" value="true" id="30_true">
                              Да
                            </Radio>


                            <Radio name="30" value="false" id="30_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      31. Если бы мое второе Я существовало, то для меня это был бы довольно скучный
                      партнер в общении.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="31"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="31" value="true" id="31_true">
                              Да
                            </Radio>


                            <Radio name="31" value="false" id="31_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      32. Мне представляется, что я сложился как личность и поэтому не трачу много
                      сил на то, чтобы в чем-то стать другим.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="32"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="32" value="true" id="32_true">
                              Да
                            </Radio>


                            <Radio name="32" value="false" id="32_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      33. В целом меня устраивает то, какой я есть.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="33"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="33" value="true" id="33_true">
                              Да
                            </Radio>


                            <Radio name="33" value="false" id="33_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      34. К сожалению, слишком многие не разделяют моих взглядов на жизнь.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="34"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="34" value="true" id="34_true">
                              Да
                            </Radio>


                            <Radio name="34" value="false" id="34_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      35. Я вполне могу сказать, что уважаю себя.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="35"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="35" value="true" id="35_true">
                              Да
                            </Radio>


                            <Radio name="35" value="false" id="35_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      36. Я думаю, что имею умного и надежного советчика в своем лице.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="36"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="36" value="true" id="36_true">
                              Да
                            </Radio>


                            <Radio name="36" value="false" id="36_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      37. Сам у себя я довольно часто вызываю раздражение.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="37"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="37" value="true" id="37_true">
                              Да
                            </Radio>


                            <Radio name="37" value="false" id="37_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      38. Я часто, но довольно безуспешно, пытаюсь в себе что-то изменить.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="38"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="38" value="true" id="38_true">
                              Да
                            </Radio>


                            <Radio name="38" value="false" id="38_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      39. Я думаю, что моя личность гораздо интереснее и богаче, чем это может
                      показаться на первый взгляд.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="39"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="39" value="true" id="39_true">
                              Да
                            </Radio>


                            <Radio name="39" value="false" id="39_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      40. Мои достоинства более значительны, чем недостатки.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="40"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="40" value="true" id="40_true">
                              Да
                            </Radio>


                            <Radio name="40" value="false" id="40_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      41. Я редко остаюсь непонятным в самом важном для меня.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="41"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="41" value="true" id="41_true">
                              Да
                            </Radio>


                            <Radio name="41" value="false" id="41_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      42. Думаю, что другие в целом оценивают меня достаточно высоко.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="42"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="42" value="true" id="42_true">
                              Да
                            </Radio>


                            <Radio name="42" value="false" id="42_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      43. Ко всему, что со мной случается, я приложил старание.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="43"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="43" value="true" id="43_true">
                              Да
                            </Radio>


                            <Radio name="43" value="false" id="43_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      44. Если я спорю с собой, то уверен, что найду единственно правильное решение.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="44"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="44" value="true" id="44_true">
                              Да
                            </Radio>


                            <Radio name="44" value="false" id="44_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      45. Когда со мной случаются неприятности, я говорю: "И поделом тебе!".
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="45"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="45" value="true" id="45_true">
                              Да
                            </Radio>


                            <Radio name="45" value="false" id="45_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      46. Я не считаю, что достаточно интересен духовно для того, чтобы быть
                      притягательным для многих людей.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="46"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="46" value="true" id="46_true">
                              Да
                            </Radio>


                            <Radio name="46" value="false" id="46_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      47. У меня нередко возникает сомнение: таков ли я на самом деле, каким себе
                      кажусь.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="47"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="47" value="true" id="47_true">
                              Да
                            </Radio>


                            <Radio name="47" value="false" id="47_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      48. Я не способен на измену даже в мыслях.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="48"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="48" value="true" id="48_true">
                              Да
                            </Radio>


                            <Radio name="48" value="false" id="48_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      49. Чаще всего я думаю о себе с дружеской иронией.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="49"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="49" value="true" id="49_true">
                              Да
                            </Radio>


                            <Radio name="49" value="false" id="49_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      50. Мне кажется, что мало кто может подумать обо мне плохо.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="50"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="50" value="true" id="50_true">
                              Да
                            </Radio>


                            <Radio name="50" value="false" id="50_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      51. Уверен, что на меня можно положиться в самых ответственных делах.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="51"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="51" value="true" id="51_true">
                              Да
                            </Radio>


                            <Radio name="51" value="false" id="51_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      52. Я могу сказать, что в целом контролирую свою судьбу.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="52"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="52" value="true" id="52_true">
                              Да
                            </Radio>


                            <Radio name="52" value="false" id="52_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      53. Я никогда не выдаю чужие мысли за свои.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="53"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="53" value="true" id="53_true">
                              Да
                            </Radio>


                            <Radio name="53" value="false" id="53_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      54. Каким бы я ни казался окружающим, я-то знаю, что в глубине души я лучше,
                      чем большинство других.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="54"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="54" value="true" id="54_true">
                              Да
                            </Radio>


                            <Radio name="54" value="false" id="54_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      55. Я хотел бы оставаться таким, какой есть.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="55"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="55" value="true" id="55_true">
                              Да
                            </Radio>


                            <Radio name="55" value="false" id="55_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      56. Я всегда рад критике в свой адрес, если она обоснована и справедлива.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="56"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="56" value="true" id="56_true">
                              Да
                            </Radio>


                            <Radio name="56" value="false" id="56_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      57. Мне кажется, что если бы таких людей, как я, было больше, то жизнь
                      изменилась бы в лучшую сторону.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="57"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="57" value="true" id="57_true">
                              Да
                            </Radio>


                            <Radio name="57" value="false" id="57_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      58. Мое мнение имеет достаточный вес в глазах окружающих.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="58"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="58" value="true" id="58_true">
                              Да
                            </Radio>


                            <Radio name="58" value="false" id="58_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      59. Что-то мешает мне понять себя по-настоящему.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="59"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="59" value="true" id="59_true">
                              Да
                            </Radio>


                            <Radio name="59" value="false" id="59_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      60. Во мне есть немало такого, что вряд ли вызывает симпатию.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="60"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="60" value="true" id="60_true">
                              Да
                            </Radio>


                            <Radio name="60" value="false" id="60_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      61. В сложных обстоятельствах я обычно не жду, пока проблемы решатся сами
                      собой.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="61"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="61" value="true" id="61_true">
                              Да
                            </Radio>


                            <Radio name="61" value="false" id="61_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      62. Иногда я пытаюсь выдать себя не за того, кто я есть.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="62"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="62" value="true" id="62_true">
                              Да
                            </Radio>


                            <Radio name="62" value="false" id="62_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      63. Быть снисходительным к собственным слабостям вполне естественно.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="63"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="63" value="true" id="63_true">
                              Да
                            </Radio>


                            <Radio name="63" value="false" id="63_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      64. Я убедился, что глубокое проникновение в себя мало приятное и довольно
                      рискованное занятие.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="64"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="64" value="true" id="64_true">
                              Да
                            </Radio>


                            <Radio name="64" value="false" id="64_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      65. Я никогда не раздражаюсь и не злюсь без особых на то причин.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="65"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="65" value="true" id="65_true">
                              Да
                            </Radio>


                            <Radio name="65" value="false" id="65_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      66. У меня бывали такие моменты, когда я понимал, что и меня есть за что
                      презирать.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="66"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="66" value="true" id="66_true">
                              Да
                            </Radio>


                            <Radio name="66" value="false" id="66_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      67. Я часто чувствую, что мало влияю на то, что со мной происходит.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="67"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="67" value="true" id="67_true">
                              Да
                            </Radio>


                            <Radio name="67" value="false" id="67_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      68. Именно богатство и глубина моего внутреннего мира и определяют мою
                      ценность как личности.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="68"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="68" value="true" id="68_true">
                              Да
                            </Radio>


                            <Radio name="68" value="false" id="68_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      69. Долгие споры с собой чаще всего оставляют горький осадок в моей душе, чем
                      приносят облегчение.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="69"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="69" value="true" id="69_true">
                              Да
                            </Radio>


                            <Radio name="69" value="false" id="69_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      70. Думаю, что общение со мной доставляет людям удовольствие.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="70"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="70" value="true" id="70_true">
                              Да
                            </Radio>


                            <Radio name="70" value="false" id="70_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      71. Если говорить откровенно, иногда я бываю очень неприятен.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="71"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="71" value="true" id="71_true">
                              Да
                            </Radio>


                            <Radio name="71" value="false" id="71_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      72. Можно сказать, что я себе нравлюсь.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="72"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="72" value="true" id="72_true">
                              Да
                            </Radio>


                            <Radio name="72" value="false" id="72_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      73. Я - человек ненадежный.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="73"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="73" value="true" id="73_true">
                              Да
                            </Radio>


                            <Radio name="73" value="false" id="73_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      74. Осуществление моих желаний мало зависит от везения.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="74"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="74" value="true" id="74_true">
                              Да
                            </Radio>


                            <Radio name="74" value="false" id="74_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      75. Мое внутреннее Я всегда мне интересно.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="75"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="75" value="true" id="75_true">
                              Да
                            </Radio>


                            <Radio name="75" value="false" id="75_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      76. Мне очень просто убедить себя не расстраиваться по пустякам.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="76"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="76" value="true" id="76_true">
                              Да
                            </Radio>


                            <Radio name="76" value="false" id="76_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      77. Близким людям свойственно недооценивать меня.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="77"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="77" value="true" id="77_true">
                              Да
                            </Radio>


                            <Radio name="77" value="false" id="77_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      78. У меня в жизни нередко бывают минуты, когда я сам себе противен.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="78"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="78" value="true" id="78_true">
                              Да
                            </Radio>


                            <Radio name="78" value="false" id="78_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      79. Мне кажется, что я все-таки не умею злиться на себя по- настоящему.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="79"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="79" value="true" id="79_true">
                              Да
                            </Radio>


                            <Radio name="79" value="false" id="79_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      80. Я убедился, что в серьезных делах на меня лучше не рассчитывать.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="80"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="80" value="true" id="80_true">
                              Да
                            </Radio>


                            <Radio name="80" value="false" id="80_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      81. Порой мне кажется, что я какой-то странный.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="81"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="81" value="true" id="81_true">
                              Да
                            </Radio>


                            <Radio name="81" value="false" id="81_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      82. Я не склонен пасовать перед трудностями.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="82"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="82" value="true" id="82_true">
                              Да
                            </Radio>


                            <Radio name="82" value="false" id="82_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      83. Мое собственное Я не представляется мне чем-то достойным глубокого
                      внимания.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="83"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="83" value="true" id="83_true">
                              Да
                            </Radio>


                            <Radio name="83" value="false" id="83_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      84. Мне кажется, что глубоко обдумывая свои внутренние проблемы, я научился
                      гораздо лучше себя понимать.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="84"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="84" value="true" id="84_true">
                              Да
                            </Radio>


                            <Radio name="84" value="false" id="84_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      85. Сомневаюсь, что вызываю симпатию у большинства окружающих.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="85"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="85" value="true" id="85_true">
                              Да
                            </Radio>


                            <Radio name="85" value="false" id="85_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      86. Мне случалось совершать такие поступки, которым вряд ли можно найти
                      оправдание.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="86"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="86" value="true" id="86_true">
                              Да
                            </Radio>


                            <Radio name="86" value="false" id="86_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      87. Где-то в глубине души я считаю себя слабаком.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="87"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="87" value="true" id="87_true">
                              Да
                            </Radio>


                            <Radio name="87" value="false" id="87_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      88. Если я искренне обвиняю себя в чем-то, то, как правило, обличительного
                      запала хватает ненадолго.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="88"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="88" value="true" id="88_true">
                              Да
                            </Radio>


                            <Radio name="88" value="false" id="88_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      89. Мой характер, каким бы он ни был, вполне меня устраивает.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="89"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="89" value="true" id="89_true">
                              Да
                            </Radio>


                            <Radio name="89" value="false" id="89_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      90. Я вполне представляю себе, что меня ждет впереди.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="90"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="90" value="true" id="90_true">
                              Да
                            </Radio>


                            <Radio name="90" value="false" id="90_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      91. Иногда мне бывает трудно найти общий язык со своим внутренним Я.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="91"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="91" value="true" id="91_true">
                              Да
                            </Radio>


                            <Radio name="91" value="false" id="91_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      92. Мои мысли о себе в большей части сводятся к обвинениям в собственный
                      адрес.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="92"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="92" value="true" id="92_true">
                              Да
                            </Radio>


                            <Radio name="92" value="false" id="92_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      93. Я не хотел бы сильно меняться даже в лучшую сторону, потому что каждое
                      изменение есть потеря какой-то частицы самого себя.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="93"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="93" value="true" id="93_true">
                              Да
                            </Radio>


                            <Radio name="93" value="false" id="93_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      94. В результате моих действий слишком часто получается совсем не то, на что я
                      рассчитывал.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="94"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="94" value="true" id="94_true">
                              Да
                            </Radio>


                            <Radio name="94" value="false" id="94_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      95. Вряд ли во мне есть что-то, чего бы я не знал.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="95"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="95" value="true" id="95_true">
                              Да
                            </Radio>


                            <Radio name="95" value="false" id="95_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      96. Мне еще многого не хватает, чтобы с уверенностью сказать себе: "Да, я
                      вполне созрел как личность".
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="96"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="96" value="true" id="96_true">
                              Да
                            </Radio>


                            <Radio name="96" value="false" id="96_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      97. Во мне вполне мирно уживаются как мои достоинства, так и мои недостатки.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="97"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="97" value="true" id="97_true">
                              Да
                            </Radio>


                            <Radio name="97" value="false" id="97_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      98. Иногда я оказываю "бескорыстную" помощь людям только для того, чтобы лучше
                      выглядеть в собственных глазах.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="98"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="98" value="true" id="98_true">
                              Да
                            </Radio>


                            <Radio name="98" value="false" id="98_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      99. Мне слишком часто и безуспешно приходится оправдываться перед самим собой.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="99"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="99" value="true" id="99_true">
                              Да
                            </Radio>


                            <Radio name="99" value="false" id="99_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      100. Те, кто меня не любит, просто не знают, что я за человек.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="100"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="100" value="true" id="100_true">
                              Да
                            </Radio>


                            <Radio name="100" value="false" id="100_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      101. Убедить себя в чем-то не составляет для меня особого труда.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="101"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="101" value="true" id="101_true">
                              Да
                            </Radio>


                            <Radio name="101" value="false" id="101_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      102. Я не испытываю недостатка в близких и понимающих меня людях.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="102"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="102" value="true" id="102_true">
                              Да
                            </Radio>


                            <Radio name="102" value="false" id="102_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      103. Мне кажется, что мало кто уважает меня по-настоящему.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="103"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="103" value="true" id="103_true">
                              Да
                            </Radio>


                            <Radio name="103" value="false" id="103_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      104. Если не мелочиться, то в целом меня не в чем упрекнуть.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="104"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="104" value="true" id="104_true">
                              Да
                            </Radio>


                            <Radio name="104" value="false" id="104_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      105. Я сам создал себя таким, каков я есть.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="105"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="105" value="true" id="105_true">
                              Да
                            </Radio>


                            <Radio name="105" value="false" id="105_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      106. Мнение других обо мне вполне совпадает с моим собственным.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="105"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="106" value="true" id="106_true">
                              Да
                            </Radio>


                            <Radio name="106" value="false" id="106_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      107. Мне бы очень хотелось во многом себя переделать.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="107"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="107" value="true" id="107_true">
                              Да
                            </Radio>


                            <Radio name="107" value="false" id="107_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      108. Ко мне относятся так, как я того заслуживаю.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="108"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="108" value="true" id="108_true">
                              Да
                            </Radio>


                            <Radio name="108" value="false" id="108_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      109. Думаю, что моя судьба сложится все равно не так, как бы мне хотелось
                      теперь.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="105"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="105" value="true" id="105_true">
                              Да
                            </Radio>


                            <Radio name="105" value="false" id="105_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      110. Уверен, что в жизни я на своем месте.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="110"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>

                            <Radio name="110" value="true" id="110_true">
                              Да
                            </Radio>


                            <Radio name="110" value="false" id="110_false">
                              Нет
                            </Radio>

                          </RadioGroup>
                        )}
                      />
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
