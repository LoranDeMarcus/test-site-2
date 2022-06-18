import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '../../../components/Button'
import Container from '../../../components/Container'

import { PageWrapper, Wrapper } from '../styles'
import * as s from './styles'
import { Radio, RadioGroup } from '../../../components/Radio'
import { Pie } from 'react-chartjs-2'

const labels = [
  'Замкнутость/общительность',
  'Интеллект',
  'Эмоц. стабильность',
  'Подчиненность/доминантность',
  'Сдержанность/экспрессивность',
  'Моральная нормативность',
  'Робость/смелость',
  'Практицизм/чувствительность',
  'Доверчивость/подозрительность',
  'Практичность/мечтательность',
  'Прямолинейность/дипломатичность',
  'Спокойствие/тревожность',
  'Консерватизм/радикализм',
  'Конформизм/нонконформизм',
  'Самоконтроль',
  'Расслабленность/напряженность',
  'Тревога',
  'Интроверсия/экстраверсия',
  'Чувствительность/уравновешенность',
  'Конформность/независимость',
]

const resultData = [
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
  Math.ceil(Math.random() * 10),
]

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
  `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  `#${Math.floor(Math.random() * 16777215).toString(16)}`,
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

export const Cattel = () => {
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
            Личностный опросник Кеттела
          </s.Tittle>
          {hasReadDescription && isDone && (
            <s.ResultWrapper>
              <s.ResultTitle>
                Результаты тестирования:
              </s.ResultTitle>
              <s.TestResultWrapper>
                <s.TestResult>
                  {labels.map((item, index) => {
                    return (
                      <s.TestResultText key={item}>
                        <s.Color bgc={colors[index]} />
                        {item} - {resultData[index]}
                      </s.TestResultText>
                    )
                  })}
                </s.TestResult>
                <s.ChartWrapper>
                  <Pie type="pie" data={data} options={options} />
                </s.ChartWrapper>
              </s.TestResultWrapper>
              <s.Recommendations>
                Рекоммендации для преподавателя:
                <s.List>
                  <li>
                    Избегать агрссивных форм общения со студентом (агрессия порождает агрессию)
                  </li>
                  <li>
                    Построение взаимотношений не по типу вторжения, а на основе совета
                  </li>
                  <li>
                    Поощрение и одобрение инициативы
                  </li>
                </s.List>
              </s.Recommendations>
            </s.ResultWrapper>
          )}
          {hasReadDescription
            ? (
              <>
                <s.Subtitle>
                  Bам будет задан ряд вопросов, на каждый из которых Вы должны выбрать один из трех
                  предлагаемых ответов,
                  - тот, который в наибольшей степени соответствует Вашим взглядам, Вашему мнению о
                  себе.
                  Обязательно отвечайте на все вопросы подряд, ничего не пропуская. Не нужно много
                  времени тратить на обдумывание ответов.
                  Давайте тот ответ, который первым приходит Вам в голову. Отвечать надо
                  приблизительно на 5-6 вопросов за минуту.
                  Прохождение теста должно занять у Вас около 50 мин. Возможно, некоторые вопросы
                  покажутся вам неясными
                  или сформулированными не так подробно, как Вам хотелось бы. В таких случаях,
                  отвечая, старайтесь
                  представить "среднюю", наиболее обычную ситуацию, которая соответствует смыслу
                  вопроса, и на основе
                  этого выбирайте свой ответ. Старайтесь не прибегать слишком часто к промежуточным,
                  неопределенным ответам,
                  типа "не знаю", "нечто среднее" и т.п. Отвечайте честно и искренне. Не стремитесь
                  произвести хорошее
                  впечатление своими ответами. Здесь не может быть ответов "правильных" или
                  "ошибочных". Люди различны,
                  и каждый может высказать свое мнение. Ваши ответы должны соответствовать
                  действительности - в этом случае
                  Вы сможете лучше узнать себя.
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
                      1. Я хорошо понял инструкцию к этому опроснику
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="1"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="1" value="true" id="1_true">
                              да
                            </Radio>
                            <Radio name="1" value="half" id="1_half">
                              не уверен
                            </Radio>
                            <Radio name="1" value="false" id="1_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      2. Я готов как можно искренней ответить на вопросы
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="2"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="2" value="true" id="2_true">
                              да
                            </Radio>
                            <Radio name="2" value="half" id="2_half">
                              не уверен
                            </Radio>
                            <Radio name="2" value="false" id="2_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      3. Я предпочел бы иметь дачу
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="3"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="3" value="true" id="3_true">
                              в оживленном дачном поселке
                            </Radio>
                            <Radio name="3" value="half" id="3_half">
                              нечто среднее
                            </Radio>
                            <Radio name="3" value="false" id="3_false">
                              уединенную, в лесу
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      4. Я могу найти в себе достаточно сил, чтобы справиться с жизненными
                      трудностями.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="4"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="4" value="true" id="4_true">
                              всегда
                            </Radio>
                            <Radio name="4" value="half" id="4_half">
                              обычно
                            </Radio>
                            <Radio name="4" value="false" id="4_false">
                              редко
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      5. При виде диких животных мне становится несколько не по себе, даже если они
                      надежно заперты в клетках.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="5"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="5" value="true" id="5_true">
                              да, это верно
                            </Radio>
                            <Radio name="5" value="half" id="5_half">
                              не уверен
                            </Radio>
                            <Radio name="5" value="false" id="5_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      6. Я воздерживаюсь от критики людей и их взглядов
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="6"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="6" value="true" id="6_true">
                              да
                            </Radio>
                            <Radio name="6" value="half" id="6_half">
                              иногда
                            </Radio>
                            <Radio name="6" value="false" id="6_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      7. Я делаю людям резкие, критические замечания, если мне кажется, что они
                      этого заслуживают
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="7"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="7" value="true" id="7_true">
                              обычно
                            </Radio>
                            <Radio name="7" value="half" id="7_half">
                              иногда
                            </Radio>
                            <Radio name="7" value="false" id="7_false">
                              никогда не делаю
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      8. Я предпочитаю несложную классическую музыку современным популярным мелодиям
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="8"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="8" value="true" id="8_true">
                              верно
                            </Radio>
                            <Radio name="8" value="half" id="8_half">
                              не уверен
                            </Radio>
                            <Radio name="8" value="false" id="8_false">
                              неверно
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      9. Если бы я увидел ссорящихся не на шутку соседских детей
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="9"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="9" value="true" id="9_true">
                              я предоставил бы им самим выяснить свои отношения
                            </Radio>
                            <Radio name="9" value="half" id="9_half">
                              не знаю, что предпринял бы
                            </Radio>
                            <Radio name="9" value="false" id="9_false">
                              я постарался бы разобраться в их ссоре
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      10. На собраниях и в компаниях:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="10"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="10" value="true" id="10_true">
                              я легко выхожу вперед
                            </Radio>
                            <Radio name="10" value="half" id="10_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="10" value="false" id="10_false">
                              я предпочитаю держаться в стороне
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      11. По-моему, интереснее быть:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="11"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="11" value="true" id="11_true">
                              инженером – конструктором
                            </Radio>
                            <Radio name="11" value="half" id="11_false">
                              не знаю, что предпочесть
                            </Radio>
                            <Radio name="11" value="false" id="11_false">
                              драматургом
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      12. На улице я скорее остановлюсь, чтобы посмотреть, как работает художник,
                      чем стану наблюдать за уличной ссорой.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="12"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="12" value="true" id="12_true">
                              да, это верно
                            </Radio>
                            <Radio name="12" value="half" id="12_half">
                              не уверен
                            </Radio>
                            <Radio name="12" value="false" id="12_false">
                              нет, это не верно
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      13. Обычно я спокойно переношу самодовольство людей, даже когда они хвастаются
                      или другим образом показывают, что они высокого мнения о себе
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="13"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="13" value="true" id="13_true">
                              да
                            </Radio>
                            <Radio name="13" value="half" id="13_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="13" value="false" id="13_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      14. Если человек обманывает, я почти всегда могу заметить это по выражению его
                      лицаю
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="14"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="14" value="true" id="14_true">
                              да
                            </Radio>
                            <Radio name="14" value="half" id="14_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="14" value="false" id="14_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      15. Легко ли Вам выполнять работу, требующую длительного внимания и большой
                      сосредоточенности?
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="15"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="15" value="true" id="15_true">
                              согласен
                            </Radio>
                            <Radio name="15" value="half" id="15_half">
                              не уверен
                            </Radio>
                            <Radio name="15" value="false" id="15_false">
                              не согласен
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      16. Я предпочел бы взяться за работу:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="16"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="16" value="true" id="16_true">
                              где можно много зарабатывать, даже если заработки не постоянны
                            </Radio>
                            <Radio name="16" value="half" id="16_half">
                              не знаю, что выбрать
                            </Radio>
                            <Radio name="16" value="false" id="16_false">
                              с постоянной, но относительно невысокой зарплатой
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      17. Я говорю о своих чувствах:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="17"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="17" value="true" id="17_true">
                              только в случае необходимости
                            </Radio>
                            <Radio name="17" value="half" id="17_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="17" value="false" id="17_false">
                              охотно, когда предоставляется возможность
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      18. Изредка я испытываю чувство внезапного страха или неопределенного
                      беспокойства, сам не знаю от чего
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="18"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="18" value="true" id="18_true">
                              да
                            </Radio>
                            <Radio name="18" value="half" id="18_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="18" value="false" id="18_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      19. Когда меня несправедливо критикуют за то, в чем я не виноват:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="19"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="19" value="true" id="19_true">
                              никакого чувства вины у меня не возникает
                            </Radio>
                            <Radio name="19" value="half" id="19_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="19" value="false" id="19_false">
                              я все же чувствую себя немного виноватым
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      20. На работе у меня бывает больше затруднений с людьми, которые:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="20"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="20" value="true" id="20_true">
                              отказываюсь использовать современные методы
                            </Radio>
                            <Radio name="20" value="half" id="20_half">
                              не знаю, что выбрать
                            </Radio>
                            <Radio name="20" value="false" id="20_false">
                              постоянно пытаюсь что-то изменить в работе, которая и так идет
                              нормально
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      21. Принимая решения, я руководствуюсь больше:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="21"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="21" value="true" id="21_true">
                              сердцем
                            </Radio>
                            <Radio name="21" value="half" id="21_half">
                              сердцем и рассудком в равной иерее
                            </Radio>
                            <Radio name="21" value="false" id="21_false">
                              рассудком
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      22. Люди были бы счастливее, если бы они больше времени проводили в обществе
                      своих друзей.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="22"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="22" value="true" id="22_true">
                              да
                            </Radio>
                            <Radio name="22" value="half" id="22_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="22" value="false" id="22_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      23. Строя планы на будущее, я часто рассчитываю на удачу.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="23"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="23" value="true" id="23_true">
                              да
                            </Radio>
                            <Radio name="23" value="half" id="23_half">
                              затрудняюсь ответить
                            </Radio>
                            <Radio name="23" value="false" id="23_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      24. Разговаривая, я склонен:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="24"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="24" value="true" id="24_true">
                              высказывать свои мысли сразу, как только они приходят
                            </Radio>
                            <Radio name="24" value="half" id="24_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="24" value="false" id="24_false">
                              прежде хорошенько собраться с мыслями
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      25. Даже если я чем-нибудь сильно взбешен, я успокаиваюсь довольно быстро.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="25"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="25" value="true" id="25_true">
                              да
                            </Radio>
                            <Radio name="25" value="half" id="25_half">
                              верно
                            </Radio>
                            <Radio name="25" value="false" id="25_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      26. При равной продолжительности рабочего дня и одинаковой зарплате мне было
                      бы интереснее работать:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="26"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="26" value="true" id="26_true">
                              столяром или поваром
                            </Radio>
                            <Radio name="26" value="half" id="26_half">
                              не знаю, что выбрать
                            </Radio>
                            <Radio name="26" value="false" id="26_false">
                              официантом в хорошем ресторане
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      27. У меня было:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="27"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="27" value="true" id="27_true">
                              очень мало выборных должностей
                            </Radio>
                            <Radio name="27" value="half" id="27_half">
                              несколько
                            </Radio>
                            <Radio name="27" value="false" id="27_false">
                              много выборных должностей
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      28. Слово «Лопата» так относится к слову «копать», как слово «нож» к слову:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="28"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="28" value="true" id="28_true">
                              острый
                            </Radio>
                            <Radio name="28" value="half" id="28_half">
                              резать
                            </Radio>
                            <Radio name="28" value="false" id="28_false">
                              точить
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      29. Иногда какая-нибудь навязчивая мысль не дает мне заснуть.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="29"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="29" value="true" id="29_true">
                              да, это верно
                            </Radio>
                            <Radio name="29" value="half" id="29_half">
                              не уверен
                            </Radio>
                            <Radio name="29" value="false" id="29_false">
                              нет, это не верно
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      30. В своей жизни я, как правило, достигаю тех целей, которые ставлю перед
                      собой.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="30"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="30" value="true" id="30_true">
                              да, это верно
                            </Radio>
                            <Radio name="30" value="half" id="30_half">
                              не уверен
                            </Radio>
                            <Radio name="30" value="false" id="30_false">
                              нет, это не верно
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      31. Устаревший закон должен быть изменен:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="31"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="31" value="true" id="31_true">
                              только после основательного обсуждения
                            </Radio>
                            <Radio name="31" value="half" id="31_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="31" value="false" id="31_false">
                              немедленно
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      32. Мне становится не по себе, когда дело требует от меня быстрых действий,
                      которые как-то влияют на других людей.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="32"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="32" value="true" id="32_true">
                              да, это верно
                            </Radio>
                            <Radio name="32" value="half" id="32_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="32" value="false" id="32_false">
                              нет, это не верно
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      33. Большинство знакомых считают меня веселым собеседником.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="33"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="33" value="true" id="33_true">
                              да
                            </Radio>
                            <Radio name="33" value="half" id="33_half">
                              не уверен
                            </Radio>
                            <Radio name="33" value="false" id="33_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      34. Когда я вижу неопрятных, неряшливых людей:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="34"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="34" value="true" id="34_true">
                              Меня это не волнует
                            </Radio>
                            <Radio name="34" value="half" id="34_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="34" value="false" id="34_false">
                              верно нечто среднее
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      35. Я слегка теряюсь, неожиданно оказавшись в центре внимания.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="35"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="35" value="true" id="35_true">
                              да
                            </Radio>
                            <Radio name="35" value="half" id="35_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="35" value="false" id="35_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      36. Я всегда рад присоединиться к большой компании, например: встретится
                      вечером с друзьями, пойти на танцы, принять участие в интересном общественном
                      мероприятии.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="36"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="36" value="true" id="36_true">
                              да
                            </Radio>
                            <Radio name="36" value="half" id="36_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="36" value="false" id="36_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      37. В школе я предпочитал:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="37"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="37" value="true" id="37_true">
                              уроки музыки (пения)
                            </Radio>
                            <Radio name="37" value="half" id="37_half">
                              затрудняюсь сказать
                            </Radio>
                            <Radio name="37" value="false" id="37_false">
                              занятия в мастерских, ручной тру
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      38. Если меня назначают ответственным за что-либо, я настаиваю, чтобы мои
                      распоряжения строго выполнялись, а иначе я отказываюсь от поручения.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="38"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="38" value="true" id="38_true">
                              да
                            </Radio>
                            <Radio name="38" value="half" id="38_half">
                              иногда
                            </Radio>
                            <Radio name="38" value="false" id="38_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      39. Важнее, чтобы родители:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="39"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="39" value="true" id="39_true">
                              способствовали тонкому развитию чувств у своих детей
                            </Radio>
                            <Radio name="39" value="half" id="39_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="39" value="false" id="39_false">
                              учили детей управлять своими чувствами
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      40. Участвуя в коллективной работе, я предпочел бы:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="40"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="40" value="true" id="40_true">
                              попытаться внести улучшения в организацию работы
                            </Radio>
                            <Radio name="40" value="half" id="40_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="40" value="false" id="40_false">
                              вести записи и следить за тем, чтобы соблюдались правила
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      41. Время от времени я чувствую потребность заняться чем-нибудь, что требует
                      значительных физических усилий
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="41"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="41" value="true" id="41_true">
                              да
                            </Radio>
                            <Radio name="41" value="half" id="41_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="41" value="false" id="41_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      42. Я предпочел бы общаться с людьми вежливыми и деликатными, чем с
                      грубоватыми и прямолинейными.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="42"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="42" value="true" id="42_true">
                              да
                            </Radio>
                            <Radio name="42" value="half" id="42_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="42" value="false" id="42_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      43. Когда меня критикуют на людях, это меня крайне угнетает.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="43"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="43" value="true" id="43_true">
                              да
                            </Radio>
                            <Radio name="43" value="half" id="43_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="43" value="false" id="43_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      44. Если меня вызывает к себе начальник, я :
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="44"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="44" value="true" id="44_true">
                              использую этот случай, чтобы попросить о том, что мне нужно
                            </Radio>
                            <Radio name="44" value="half" id="44_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="44" value="false" id="44_false">
                              беспокоюсь, что сделал что-то не так
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      45. Я считаю, что люди должны очень серьезно подумать прежде чем отказываться
                      от опыта прошлых веков.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="45"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="45" value="true" id="45_true">
                              да
                            </Radio>
                            <Radio name="45" value="half" id="45_half">
                              не уверен
                            </Radio>
                            <Radio name="45" value="false" id="45_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      46. Читая что-либо, я всегда хорошо осознаю скрытое намерение автора убедить
                      меня в чем-то.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="46"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="46" value="true" id="46_true">
                              да
                            </Radio>
                            <Radio name="46" value="half" id="46_half">
                              не уверен
                            </Radio>
                            <Radio name="46" value="false" id="46_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      47. Когда я учился в 9 – 11 классах, я участвовал в спортивной жизни школы:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="47"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="47" value="true" id="47_true">
                              очень редко
                            </Radio>
                            <Radio name="47" value="half" id="47_half">
                              от случая к случаю
                            </Radio>
                            <Radio name="47" value="false" id="47_false">
                              довольно часто
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      48. Я поддерживаю дома хороший порядок и почти всегда знаю, что где лежит.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="48"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="48" value="true" id="48_true">
                              да
                            </Radio>
                            <Radio name="48" value="half" id="48_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="48" value="false" id="48_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      49. Когда я думаю о том, что произошло в течении дня, я нередко испытываю
                      беспокойство.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="49"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="49" value="true" id="49_true">
                              да
                            </Radio>
                            <Radio name="49" value="half" id="49_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="49" value="false" id="49_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      50. Иногда я сомневаюсь, действительно ли люди, с которыми я беседую,
                      интересуются тем, что я говорю.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="50"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="50" value="true" id="50_true">
                              да
                            </Radio>
                            <Radio name="50" value="half" id="50_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="50" value="false" id="50_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      51. Если бы мне пришлось выбирать, я предпочел бы быть:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="51"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="51" value="true" id="51_true">
                              лесничим
                            </Radio>
                            <Radio name="51" value="half" id="51_half">
                              трудно выбрать
                            </Radio>
                            <Radio name="51" value="false" id="51_false">
                              учителем старших классов
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      52. Ко дню рождения, к праздникам:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="52"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="52" value="true" id="52_true">
                              я люблю делать подарки
                            </Radio>
                            <Radio name="52" value="half" id="52_half">
                              затрудняюсь ответить
                            </Radio>
                            <Radio name="52" value="false" id="52_false">
                              считаю, что покупка подарков – несколько неприятная обязанность
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      53. Слово «усталый» так относится к слову «работа», как слово «гордый» к
                      слову:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="53"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="53" value="true" id="53_true">
                              улыбка
                            </Radio>
                            <Radio name="53" value="half" id="53_half">
                              успех
                            </Radio>
                            <Radio name="53" value="false" id="53_false">
                              счастливый
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      54. Какое из данных слов не подходит к двум остальным:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="54"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="54" value="true" id="54_true">
                              свеча
                            </Radio>
                            <Radio name="54" value="half" id="54_half">
                              луна
                            </Radio>
                            <Radio name="54" value="false" id="54_false">
                              лампа
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      55. Мои друзья:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="55"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="55" value="true" id="55_true">
                              меня не подводили
                            </Radio>
                            <Radio name="55" value="half" id="55_half">
                              изредка
                            </Radio>
                            <Radio name="55" value="false" id="55_false">
                              подводили довольно часто
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      56. У меня есть такие качества, по которым я определенно превосхожу других
                      людей.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="56"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="56" value="true" id="56_true">
                              да
                            </Radio>
                            <Radio name="56" value="half" id="56_half">
                              не уверен
                            </Radio>
                            <Radio name="56" value="false" id="56_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      57. Когда я расстроен, я всячески стараюсь скрыть свои чувства от других.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="57"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="57" value="true" id="57_true">
                              да, это верно
                            </Radio>
                            <Radio name="57" value="half" id="57_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="57" value="false" id="57_false">
                              нет, это не верно
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      58. Мне хотелось бы ходить в кино, на разные представления и в другие места,
                      где можно развлечься.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="58"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="58" value="true" id="58_true">
                              чаще одного раза в неделю (чаще, чем большинство людей)
                            </Radio>
                            <Radio name="58" value="half" id="58_half">
                              примерно раз в неделю (как большинство)
                            </Radio>
                            <Radio name="58" value="false" id="58_false">
                              реже одного раза в неделю (реже, чем большинство)
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      59. Я думаю, что личная свобода в поведении важнее хороших манер и соблюдения
                      этикета.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="59"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="59" value="true" id="59_true">
                              да
                            </Radio>
                            <Radio name="59" value="half" id="59_half">
                              не уверен
                            </Radio>
                            <Radio name="59" value="false" id="59_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      60. В присутствии людей, более значительных, чем я (людей старше меня, или с
                      большим опытом, или с более высоким положением), я склонен держаться скромно.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="60"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="60" value="true" id="60_true">
                              да
                            </Radio>
                            <Radio name="60" value="half" id="60_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="60" value="false" id="60_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      61. Мне трудно рассказать что-либо большой группе людей или выступать перед
                      большой аудиторией.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="61"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="61" value="true" id="61_true">
                              да
                            </Radio>
                            <Radio name="61" value="half" id="61_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="61" value="false" id="61_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      62. Я хорошо ориентируюсь в незнакомой местности: легко могу сказать, где
                      север, где юг, где восток или запад:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="62"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="62" value="true" id="62_true">
                              да
                            </Radio>
                            <Radio name="62" value="half" id="62_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="62" value="false" id="62_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      63. Если бы кто-то разозлился на меня:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="63"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="63" value="true" id="63_true">
                              я постарался бы его успокоить
                            </Radio>
                            <Radio name="63" value="half" id="63_half">
                              не знаю, что бы я предпринял
                            </Radio>
                            <Radio name="63" value="false" id="63_false">
                              это вызвало бы у меня раздражение
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      64. Когда я вижу статью, которую считаю несправедливой, я скорее склонен
                      забыть об этом, чем с возмущением ответить автору
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="64"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="64" value="true" id="64_true">
                              да
                            </Radio>
                            <Radio name="64" value="half" id="64_half">
                              не уверен
                            </Radio>
                            <Radio name="64" value="false" id="64_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      65. В моей памяти не задерживаются надолго несущественные мелочи, например,
                      названия улиц, магазинов.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="65"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="65" value="true" id="65_true">
                              да
                            </Radio>
                            <Radio name="65" value="half" id="65_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="65" value="false" id="65_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      66. Мне могла бы понравиться профессия ветеринара, который лечит и оперирует
                      животных.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="66"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="66" value="true" id="66_true">
                              да
                            </Radio>
                            <Radio name="66" value="half" id="66_half">
                              трудно сказать
                            </Radio>
                            <Radio name="66" value="false" id="66_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      67. Я ем с наслаждением и не всегда столь тщательно забочусь о своих манерах,
                      как это делают другие люди.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="67"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="67" value="true" id="67_true">
                              да, это верно
                            </Radio>
                            <Radio name="67" value="half" id="67_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="67" value="false" id="67_false">
                              нет, это не верно
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      68. Бывают периоды, когда мне ни с кем не хочется встречаться.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="68"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="67" value="true" id="67_true">
                              очень редко
                            </Radio>
                            <Radio name="67" value="half" id="67_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="67" value="false" id="67_false">
                              довольно часто
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      69. Иногда мне говорят, что мой голос и вид слишком явно выдают мое волнение.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="69"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="69" value="true" id="69_true">
                              да
                            </Radio>
                            <Radio name="69" value="half" id="69_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="69" value="false" id="69_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      70. Когда я был подростком и мое мнение расходилось с родительским, я обычно:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="70"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="70" value="true" id="70_true">
                              оставался при своем мнении
                            </Radio>
                            <Radio name="70" value="half" id="70_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="70" value="false" id="70_false">
                              уступал, признавая их авторитет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      71. Мне хотелось бы работать в отдельной комнате, а не вместе с коллегами.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="71"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="71" value="true" id="71_true">
                              да
                            </Radio>
                            <Radio name="71" value="half" id="71_half">
                              не уверен
                            </Radio>
                            <Radio name="71" value="false" id="71_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      72. Я предпочел бы жить тихо, так, как мне нравится, нежели быть предметом
                      восхищения благодаря своим успехам.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="72"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="72" value="true" id="72_true">
                              да
                            </Radio>
                            <Radio name="72" value="half" id="72_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="72" value="false" id="72_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      73. Во многих отношениях я считаю себя вполне зрелым человеком.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="73"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="73" value="true" id="73_true">
                              это верно
                            </Radio>
                            <Radio name="73" value="half" id="73_half">
                              не уверен
                            </Radio>
                            <Radio name="73" value="false" id="73_false">
                              это неверно
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      74. Критика в том виде, в каком ее осуществляют многие люди, скорее выбивает
                      меня из колеи, чем помогает.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="74"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="74" value="true" id="74_true">
                              часто
                            </Radio>
                            <Radio name="74" value="half" id="74_half">
                              изредка
                            </Radio>
                            <Radio name="74" value="false" id="74_false">
                              никогда
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      75. Я всегда в состоянии строго контролировать проявление своих чувств.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="75"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="75" value="true" id="75_true">
                              да
                            </Radio>
                            <Radio name="75" value="half" id="75_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="75" value="false" id="75_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      76. Если бы я сделал полезное изобретение, я предпочел бы:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="76"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="76" value="true" id="76_true">
                              работать над ним в лаборатории дальше
                            </Radio>
                            <Radio name="76" value="half" id="76_half">
                              трудно выбрать
                            </Radio>
                            <Radio name="76" value="false" id="76_false">
                              позаботиться о его практическом использовании
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      77. Слово «удивление» так относится к слову «необычный», как слово «страх» к
                      слову:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="77"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="77" value="true" id="77_true">
                              храбрый
                            </Radio>
                            <Radio name="77" value="half" id="77_half">
                              беспокойный
                            </Radio>
                            <Radio name="77" value="false" id="77_false">
                              ужасный
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      78. Какая из следующих дробей не подходит к двум остальным:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="78"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="78" value="true" id="78_true">
                              3/7
                            </Radio>
                            <Radio name="78" value="half" id="78_half">
                              3/9
                            </Radio>
                            <Radio name="78" value="false" id="78_false">
                              3/11
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      79. Мне кажется, что некоторые люди не замечают или избегают меня, хотя и не
                      знаю, почему.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="79"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="79" value="true" id="79_true">
                              верно
                            </Radio>
                            <Radio name="79" value="half" id="79_half">
                              не уверен
                            </Radio>
                            <Radio name="79" value="false" id="79_false">
                              неверно
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      80. Люди относятся ко мне более доброжелательно, чем я того заслуживаю своим
                      добрым к ним отношением.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="80"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="80" value="true" id="80_true">
                              очень часто
                            </Radio>
                            <Radio name="80" value="half" id="80_half">
                              иногда
                            </Radio>
                            <Radio name="80" value="false" id="80_false">
                              никогда
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      81. Употребление нецензурных выражений мне всегда противно (даже если при этом
                      нет лица другого пола)
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="81"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="81" value="true" id="81_true">
                              да
                            </Radio>
                            <Radio name="81" value="half" id="81_half">
                              среднее между
                            </Radio>
                            <Radio name="81" value="false" id="81_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      82. У меня безусловно меньше друзей, чем у большинства людей.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="82"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="82" value="true" id="82_true">
                              да
                            </Radio>
                            <Radio name="82" value="half" id="82_half">
                              среднее между
                            </Radio>
                            <Radio name="82" value="false" id="82_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      83. Очень не люблю бывать там, где не с кем поговорить.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="83"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="83" value="true" id="83_true">
                              верно
                            </Radio>
                            <Radio name="83" value="half" id="83_half">
                              не уверен
                            </Radio>
                            <Radio name="83" value="false" id="83_false">
                              неверно
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      84. Люди иногда называют меня легкомысленным, хотя и считают приятным
                      человеком.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="84"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="84" value="true" id="84_true">
                              да
                            </Radio>
                            <Radio name="84" value="half" id="84_half">
                              среднее между
                            </Radio>
                            <Radio name="84" value="false" id="84_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      85. В различных ситуациях в обществе я испытывал волнение, похожее на то,
                      которое испытывает человек перед выходом на сцену.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="85"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="85" value="true" id="85_true">
                              довольно часто
                            </Radio>
                            <Radio name="85" value="half" id="85_half">
                              изредка
                            </Radio>
                            <Radio name="85" value="false" id="85_false">
                              едва ли когда-нибудь
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      86. Находясь в небольшой группе людей, я довольствуюсь тем, что держусь в
                      стороне и по большей части предоставляю говорить другим.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="86"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="86" value="true" id="86_true">
                              да
                            </Radio>
                            <Radio name="86" value="half" id="86_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="86" value="false" id="86_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      87. Мне больше нравится читать:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="87"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="87" value="true" id="87_true">
                              еалистические описания острых военных и политических конфликтов
                            </Radio>
                            <Radio name="87" value="half" id="87_half">
                              не знаю, что выбрать
                            </Radio>
                            <Radio name="87" value="false" id="87_false">
                              роман, возбуждающий воображения и чувства
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      88. Когда мною пытаются командовать, я нарочно делаю все наоборот.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="88"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="88" value="true" id="88_true">
                              да
                            </Radio>
                            <Radio name="88" value="half" id="88_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="88" value="false" id="88_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      89. Если начальство или члены семьи в чем-то меня упрекают, то, как правило,
                      только за дело.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="89"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="89" value="true" id="89_true">
                              верно
                            </Radio>
                            <Radio name="89" value="half" id="89_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="89" value="false" id="89_false">
                              неверно
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      90. Мне не нравится манера некоторых людей «уставится» и бесцеремонно смотреть
                      на человека в магазине или на улице.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="90"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="90" value="true" id="90_true">
                              верно
                            </Radio>
                            <Radio name="90" value="half" id="90_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="90" value="false" id="90_false">
                              неверно
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      91. Во время продолжительного путешествия я предпочел бы:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="91"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="91" value="true" id="91_true">
                              читать что-нибудь сложное, но интересное
                            </Radio>
                            <Radio name="91" value="half" id="91_half">
                              не знаю, что выбрал бы
                            </Radio>
                            <Radio name="91" value="false" id="91_false">
                              провести время, беседуя с попутчиком
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      92. В шутках о смерти нет ничего дурного или противного хорошему вкусу.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="92"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="92" value="true" id="92_true">
                              верно
                            </Radio>
                            <Radio name="92" value="half" id="92_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="92" value="false" id="92_false">
                              неверно
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      93. Если мои знакомые плохо обращаются со мной и не скрывают своей неприязни:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="93"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="93" value="true" id="93_true">
                              это нисколько меня не угнетает
                            </Radio>
                            <Radio name="93" value="half" id="93_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="93" value="false" id="93_false">
                              я падаю духом
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      94. Мне становится не по себе, когда мне говорят комплименты и хвалят в лицо.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="94"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="94" value="true" id="94_true">
                              верно
                            </Radio>
                            <Radio name="94" value="half" id="94_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="94" value="false" id="94_false">
                              неверно
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      95. Я предпочел бы иметь работу:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="95"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="95" value="true" id="95_true">
                              с четко определенным и постоянным заработком
                            </Radio>
                            <Radio name="95" value="half" id="95_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="95" value="false" id="95_false">
                              с более высокой зарплатой, которая бы зависела от моих усилий и
                              продуктивности
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      96. Мне легче решить трудный вопрос или проблему:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="96"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="96" value="true" id="96_true">
                              если я обсуждаю их с другими
                            </Radio>
                            <Radio name="96" value="half" id="96_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="96" value="false" id="96_false">
                              если я обдумываю их в одиночестве
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      97. Я охотно участвую в общественной жизни, в работе разных комиссий и т.д.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="97"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="97" value="true" id="97_true">
                              да
                            </Radio>
                            <Radio name="97" value="half" id="97_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="97" value="false" id="97_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      98. Выполняя какую-либо работу, я не успокаиваюсь, пока не будут учтены даже
                      самые незначительные детали.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="98"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="98" value="true" id="98_true">
                              да
                            </Radio>
                            <Radio name="98" value="half" id="98_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="98" value="false" id="98_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      99. Иногда совсем незначительные препятствия очень сильно раздражают меня.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="99"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="99" value="true" id="99_true">
                              да
                            </Radio>
                            <Radio name="99" value="half" id="99_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="99" value="false" id="99_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      100. Я сплю крепко, никогда не разговариваю во сне.
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="100"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="100" value="true" id="100_true">
                              да
                            </Radio>
                            <Radio name="100" value="half" id="100_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="100" value="false" id="100_false">
                              нет
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      101. Если бы я работал в хозяйственной сфере, мне было бы интереснее:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="101"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="101" value="true" id="101_true">
                              работать с клиентами
                            </Radio>
                            <Radio name="101" value="half" id="101_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="101" value="false" id="101_false">
                              работать с документацией
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      102. Слово «размер» так относится к слову «длина», как слово «нечестный» к
                      слову:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="102"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="102" value="true" id="102_true">
                              тюрьма
                            </Radio>
                            <Radio name="102" value="half" id="102_half">
                              грешный
                            </Radio>
                            <Radio name="102" value="false" id="102_false">
                              укравший
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      103. АБ так относится к ГВ, как СР к:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="103"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="103" value="true" id="103_true">
                              ПО
                            </Radio>
                            <Radio name="103" value="half" id="103_half">
                              ОП
                            </Radio>
                            <Radio name="103" value="false" id="103_false">
                              ТУ
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      104. Когда люди ведут себя неблагоразумно и безрассудно:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="104"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="104" value="true" id="104_true">
                              я отношусь к этому спокойно
                            </Radio>
                            <Radio name="104" value="half" id="104_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="104" value="false" id="104_false">
                              испытываю к ним чувство презрения
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      105. Когда я слушаю музыку, а рядом громко разговаривают:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="105"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="105" value="true" id="105_true">
                              это мне не мешает, я могу сосредоточиться
                            </Radio>
                            <Radio name="105" value="half" id="105_half">
                              верно нечто среднее
                            </Radio>
                            <Radio name="105" value="false" id="105_false">
                              это портит мне все удовольствие и злит меня
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
