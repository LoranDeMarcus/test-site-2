import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '../../../components/Button'
import Container from '../../../components/Container'
import Header from '../../../components/Header'

import { PageWrapper, Wrapper } from '../styles'
import * as s from './styles'
import { Radio, RadioGroup } from '../../../components/Radio'

export const Cattel = () => {
  const [hasReadDescription, setHasReadDescription] = useState(true)
  const { control, handleSubmit, formState: { errors } } = useForm()

  console.log(errors)

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <PageWrapper>
      <Header />
      <Container>
        <Wrapper>
          <s.Tittle>
            Личностный опросник Кеттела
          </s.Tittle>
          {hasReadDescription
            ? (
              <>
                <s.Subtitle>
                  Bам будет задан ряд вопросов, на каждый из которых Вы должны выбрать один из трех предлагаемых ответов,
                  - тот, который в наибольшей степени соответствует Вашим взглядам, Вашему мнению о себе.
                  Обязательно отвечайте на все вопросы подряд, ничего не пропуская. Не нужно много времени тратить на обдумывание ответов.
                  Давайте тот ответ, который первым приходит Вам в голову. Отвечать надо приблизительно на 5-6 вопросов за минуту.
                  Прохождение теста должно занять у Вас около 50 мин. Возможно, некоторые вопросы покажутся вам неясными
                  или сформулированными не так подробно, как Вам хотелось бы. В таких случаях, отвечая, старайтесь
                  представить "среднюю", наиболее обычную ситуацию, которая соответствует смыслу вопроса, и на основе
                  этого выбирайте свой ответ. Старайтесь не прибегать слишком часто к промежуточным, неопределенным ответам,
                  типа "не знаю", "нечто среднее" и т.п. Отвечайте честно и искренне. Не стремитесь произвести хорошее
                  впечатление своими ответами. Здесь не может быть ответов "правильных" или "ошибочных". Люди различны,
                  и каждый может высказать свое мнение. Ваши ответы должны соответствовать действительности - в этом случае
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
                      1.	Я хорошо понял инструкцию к этому опроснику
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
                      2.	Я готов как можно искренней ответить на вопросы
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
                      3.	Я предпочел бы иметь дачу
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
                      4. Я могу найти в себе достаточно сил, чтобы справиться с жизненными трудностями.
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
                      5. При виде диких животных мне становится несколько не по себе, даже если они надежно заперты в клетках.
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
                      6.	Я воздерживаюсь от критики людей и их взглядов
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
                      7.	Я делаю людям резкие, критические замечания, если мне кажется, что они этого заслуживают
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
                      12. На улице я скорее остановлюсь, чтобы посмотреть, как работает художник, чем стану наблюдать за уличной ссорой.
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
                      13. Обычно я спокойно переношу самодовольство людей, даже когда они хвастаются или другим образом показывают, что они высокого мнения о себе
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
                      14. Если человек обманывает, я почти всегда могу заметить это по выражению его лицаю
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
                      15. Легко ли Вам выполнять работу, требующую длительного внимания и большой сосредоточенности?
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
                      18. Изредка я испытываю чувство внезапного страха или неопределенного беспокойства, сам не знаю от чего
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
                              постоянно пытаюсь что-то изменить в работе, которая и так идет нормально
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      21.  Принимая решения, я руководствуюсь больше:
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
                      22. Люди были бы счастливее, если бы они больше времени проводили в обществе своих друзей.
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
                      26. Возникают ли у Вас конфликты с Вашими друзьями из-за того, что Вы сказали им что-то, не подумав заранее?
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
                      27. Вы предпочитаете делать несложные дела, не требующие от Вас большой энергии?
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
                      28. Легко ли Вы расстраиваетесь, когда обнаруживаете незначительные недостатки в своей работе?
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
                      29. Любите ли Вы сидячую работу?
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
                      30. Легко ли Вам общаться с разными людьми?
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
                      31. Вы обычно предпочитаете подумать, взвесить и лишь потом высказаться?
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
                      32. Все ли Ваши привычки хороши и желательны?
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
                      33. Быстры ли у Вас движения рук?
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
                      34. Вы обычно молчите и не вступаете в контакты, когда находитесь в обществе малознакомых людей?
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
                      35. Легко ли Вам переключиться от одного варианта решения задачи на другой?
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
                      36. Склонны ли Вы иногда преувеличивать в своем воображении негативное отношение близких Вам людей?
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
                      37. Разговорчивый ли Вы человек?
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
                      38. Вам обычно легко выполнять дело, требующее мгновенных реакций?
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
                      40. Беспокоят ли Вас страхи, что Вы не справитесь с работой?
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
                      41. Легко ли Вы обижаетесь, когда близкие люди указывают на Ваши личные недостатки?
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
                      42. Испытываете ли Вы тягу к напряженной, ответственной деятельности?
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
                      43. Считаете ли Вы свои движения медленными и неторопливыми?
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
                      44. Бывают ли у Вас мысли, которые Вы хотели бы скрыть от других?
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
                      45. Можете ли Вы без долгих раздумий задать щекотливый вопрос другому человеку?
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
                      46. Доставляют ли Вам удовольствие быстрые движения?
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
                      47. Легко ли Вы "генерируете" новые идеи?
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
                      48. Сосет ли у Вас под ложечкой перед ответственным разговором?
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
                      49. Можно ли сказать, что Вы быстро выполняете порученное Вам дело?
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
                      50. Любите ли Вы браться за большие дела самостоятельно?
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
                      51. Богатая ли у Вас мимика в разговоре?
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
                      52. Если Вы обещали что-то сделать, всегда ли Вы выполняете свое обещание независимо от того, удобно Вам это или нет
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
                      53. Испытываете ли Вы чувство обиды от того, что окружающие Вас люди обходятся с Вами хуже, чем следовало бы?
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
                      54. Вы обычно предпочитаете выполнять одновременно только одну операцию?
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
                      55. Любите ли Вы игры в быстром темпе?
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
                      56. Много ли в Вашей речи длительных пауз?
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
                      57. Легко ли Вам внести оживление в компанию?
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
                      58. Вы обычно чувствуете в себе избыток сил, и Вам хочется заняться каким-нибудь трудным делом?
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
                      59. Обычно Вам трудно переключить внимание с одного дела на другое?
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
                      60. Бывает ли, что у Вас надолго портится настроение от того, что сорвалось запланированное дело?
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
                      61. Часто ли Вам не спится из-за того, что не ладятся дела, связанные непосредственно с работой?
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
                      62. Любите ли Вы бывать в большой компании?
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
                      63. Волнуетесь ли Вы, выясняя отношения с друзьями?
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
                      64. Испытываете ли Вы потребность в работе, требующей полной отдачи сил?
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
                      65. Выходите ли Вы иногда из себя, злитесь?
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
                      66. Склонны ли Вы решать много задач одновременно?
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
                      67. Держитесь ли Вы свободно в большой компании?
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
                      68. Часто ли Вы высказываете свое первое впечатление, не подумав?
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
                      69. Беспокоит ли Вас чувство неуверенности в процессе выполнения работы?
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
                      70. Медленны ли Ваши движения, когда Вы что-то мастерите?
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
                      71. Легко ли Вы переключаетесь с одной работы на другую?
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
                      72. Быстро ли Вы читаете вслух?
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
                      73. Вы иногда сплетничаете?
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
                      74. Молчаливы ли Вы, находясь в кругу друзей?
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
                      75. Нуждаетесь ли Вы в людях, которые бы Вас ободрили и утешили?
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
                      76. Охотно ли Вы выполняете множество разных поручений одновременно?
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
                      77. Охотно ли Вы выполняете работу в быстром темпе?
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
                      78. В свободное время Вас обычно тянет пообщаться с людьми?
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
                      79. Часто ли у Вас бывает бессонница при неудачах на работе?
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
                      80. Дрожат ли у Вас иногда руки во время ссоры?
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
                      81. Долго ли Вы мысленно готовитесь перед тем, как высказать свое мнение?
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
                      82. Есть ли среди Ваших знакомых люди, которые Вам явно не нравятся?
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
                      83. Обычно Вы предпочитаете легкую работу?
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
                      84. Легко ли Вас обидеть в разговоре по пустякам?
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
                      85. Обычно Вы первым в компании решаетесь начать разговор?
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
                      86. Испытываете ли Вы тягу к людям?
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
                      87. Склонны ли Вы вначале поразмыслить, а потом говорить?
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
                      88. Часто ли Вы волнуетесь по поводу своей работы?
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
                      89. Всегда ли Вы платили бы за провоз багажа на транспорте, если бы не опасались проверки?
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
                      90. Держитесь ли Вы обычно обособленно на вечеринках или в компаниях?
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
                      91. Склонны ли Вы преувеличивать в своем воображении неудачи, связанные с работой?
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
                      92. Нравится ли Вам быстро говорить?
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
                      93. Легко ли Вам удержаться от высказывания неожиданно возникшей идеи?
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
                      94. Предпочитаете ли Вы работать медленно?
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
                      95. Переживаете ли Вы из-за малейших неполадок на работе?
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
                      96. Вы предпочитаете медленный? спокойный разговор?
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
                      97. Часто ли Вы волнуетесь из-за ошибок в работе, которые были Вами допущены?
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
                      98. Способны ли Вы успешно выполнять длительную трудовую работу?
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
                      99. Можете ли Вы, не долго думая, обратиться с просьбой к другому человеку?
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
                      100. Часто ли Вас беспокоит чувство неуверенности в себе при общении с людьми?
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
                      101. Легко ли Вы беретесь за выполнение новых заданий?
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
                      102. Устаете ли Вы, когда Вам приходится говорить долго?
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
                      103. Вы предпочитаете работать с прохладцей, без особого напряжения?
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
                      104. Нравится ли Вам разнообразная работа, требующая переключения внимания?
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
                      105. Любите ли Вы подолгу бывать наедине с собой?
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
