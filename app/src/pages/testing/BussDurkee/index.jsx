import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '../../../components/Button'
import Container from '../../../components/Container'

import { PageWrapper, Wrapper } from '../styles'
import * as s from './styles'
import { Radio, RadioGroup } from '../../../components/Radio'

export const BussDurkee = () => {
  const [hasReadDescription, setHasReadDescription] = useState(true)
  const { control, handleSubmit, formState: { errors } } = useForm()

  console.log(errors)

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <PageWrapper>
      <Container>
        <Wrapper>
          <s.Tittle>
            Опросник Басса-Дарки
          </s.Tittle>
          {hasReadDescription
            ? (
              <>
                <s.Subtitle>
                  Данный опросник делает диагностику по состоянию агрессии личности.
                  Опросник включает в себя 56 утверждений, на которые необходимо ответить «ДА» или «НЕТ».
                  Ответы на утверждения человек дает, основываясь на себя, своей реакции на других людей или же на какие-то события.
                  Отметьте «да», если вы согласны с утверждением, и «нет» - если не согласны. Старайтесь долго над вопросами не раздумывать.
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
                      1. Временами я не могу справиться с желанием причинить вред другим
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
                      2. Иногда сплетничаю о людях, которых не люблю
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
                      3. Я легко раздражаюсь, но быстро успокаиваюсь
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
                      4. Если меня не попросят по-хорошему, я не выполню
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
                      5. Я не всегда получаю то, что мне положено
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
                      6. Я не знаю, что люди говорят обо мне за моей спиной
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
                      7. Если я не одобряю поведение друзей, я даю им это почувствовать
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
                      8. Когда мне случалось обмануть кого-нибудь, я испытывал мучительные угрызения совести
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
                      9. Мне кажется, что я не способен ударить человека
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
                      10. Я никогда не раздражаюсь настолько, чтобы кидаться предметами
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
                      11. Я всегда снисходителен к чужим недостаткам
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
                      12. Если мне не нравится установленное правило, мне хочется нарушить его
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
                      13. Другие умеют почти всегда пользоваться благоприятными обстоятельствами
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
                      14. Я держусь настороженно с людьми, которые относятся ко мне несколько более дружественно, чем я ожидал
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
                      15. Я часто бываю не согласен с людьми
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
                      16. Иногда мне на ум приходят мысли, которых я стыжусь
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
                      17. Если кто-нибудь первым ударит меня, я не отвечу ему
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
                      18. Когда я раздражаюсь, я хлопаю дверьми
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
                      19. Я гораздо более раздражителен, чем кажется
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
                      20. Если кто-то воображает себя начальником, я всегда поступаю ему наперекор
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
                      21. Меня немного огорчает моя судьба
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
                      22. Я думаю, что многие люди не любят меня
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
                      23. Я не могу удержаться от спора, если люди не согласны со мной
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
                      24. Люди, увиливающие от работы, должны испытывать чувство вины
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
                      25. Тот, кто оскорбляет меня и мою семью, напрашивается на драку
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
                      26. Я не способен на грубые шутки
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
                      27. Меня охватывает ярость, когда надо мной насмехаются
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
                      28. Когда люди строят из себя начальников, я делаю все, чтобы они не зазнавались
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
                      29. Почти каждую неделю я вижу кого-нибудь, кто мне не нравится
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
                      30. Довольно многие люди завидуют мне
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
                      31. Я требую, чтобы люди уважали меня
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
                      32. Меня угнетает то, что я мало делаю для своих родителей
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
                      33. Люди, которые постоянно изводят вас, стоят того, чтобы их "щелкнули по носу"
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
                      34. Я никогда не бываю мрачен от злости
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
                      35. Если ко мне относятся хуже, чем я того заслуживаю, я не расстраиваюсь
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
                      36. Если кто-то выводит меня из себя, я не обращаю внимания
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
                      37. Хотя я и не показываю этого, меня иногда гложет зависть
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
                      38. Иногда мне кажется, что надо мной смеются
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
                      39. Даже если я злюсь, я не прибегаю к "сильным" выражениям
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
                      40. Мне хочется, чтобы мои грехи были прощены
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
                      41. Я редко даю сдачи, даже если кто-нибудь ударит меня
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
                      42. Когда получается не по-моему, я иногда обижаюсь
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
                      43. Иногда люди раздражают меня одним своим присутствием
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
                      44. Нет людей, которых бы я по-настоящему ненавидел
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
                      45. Мой принцип: "Никогда не доверять "чужакам"
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
                      46. Если кто-нибудь раздражает меня, я готов сказать, что я о нем думаю
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
                      47. Я делаю много такого, о чем впоследствии жалею
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
                      48. Если я разозлюсь, я могу ударить кого-нибудь
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
                      49. С детства я никогда не проявлял вспышек гнева
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
                      50. Я часто чувствую себя как пороховая бочка, готовая взорваться
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
                      51. Если бы все знали, что я чувствую, меня бы считали человеком, с которым нелегко
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
                      52. Я всегда думаю о том, какие тайные причины заставляют людей делать что-нибудь приятное для меня
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
                      53. Когда на меня кричат, я начинаю кричать в ответ
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
                      54. Неудачи огорчают меня
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
                      55. Я дерусь не реже и не чаще, чем другие
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
                      56. Я могу вспомнить случаи, когда я был настолько зол, что хватал попавшуюся мне под руку вещь и ломал
                      ее
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
                      57. Иногда я чувствую, что готов первым начать драку
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
                      58. Иногда я чувствую, что жизнь поступает со мной несправедливо
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
                      59. Раньше я думал, что большинство людей говорит правду, но теперь я в это не верю
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
                      60. Я ругаюсь только со злости
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
                      61. Когда я поступаю неправильно, меня мучает совесть
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
                      62. Если для защиты своих прав мне нужно применить физическую силу, я применяю ее
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
                      63. Иногда я выражаю свой гнев тем, что стучу кулаком по столу
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
                      64. Я бываю грубоват по отношению к людям, которые мне не нравятся
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
                      65. У меня нет врагов, которые бы хотели мне навредить
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
                      66. Я не умею поставить человека на место, даже если он того заслуживает
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
                      67. Я часто думаю, что жил неправильно
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
                      68. Я знаю людей, которые способны довести меня до драки
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
                      Я не огорчаюсь из-за мелочей
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
                      70. Мне редко приходит в голову, что люди пытаются разозлить или оскорбить меня
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
                      71. Я часто только угрожаю людям, хотя и не собираюсь приводить угрозы в исполнение
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
                      72. В последнее время я стал занудой
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
                      73. В споре я часто повышаю голос
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
                      74. Я стараюсь обычно скрывать свое плохое отношение к людям
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
                      75. Я лучше соглашусь с чем-либо, чем стану спорить
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
