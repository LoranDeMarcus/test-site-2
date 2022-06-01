import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '../../../components/Button'
import Container from '../../../components/Container'

import { PageWrapper, Wrapper } from '../styles'
import * as s from './styles'
import { Radio, RadioGroup } from '../../../components/Radio'

export const KOT = () => {
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
            Краткий отборочный тест В.Н.Бузина, Э.Ф.Вандерлика
          </s.Tittle>
          {hasReadDescription
            ? (
              <>
                <s.Subtitle>
                  Тест, который Вам будет предложен сейчас, содержит 50 вопросов. На выполнение теста
                  Вам дается 15 минут. Ответьте на столько вопросов, на сколько сможете, и не тратьте
                  много времени на один вопрос. Если необходимо - пользуйтесь бумагой для записи.
                  Во время выполнения теста ответы на ваши вопросы даваться не будут.
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
                      1. "Быстрый" является противоположным по смыслу слову:
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="1"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="1" value="a" id="1_a">
                              тяжелый
                            </Radio>
                            <Radio name="1" value="b" id="1_b">
                              упругий
                            </Radio>
                            <Radio name="1" value="c" id="1_c">
                              скрытный
                            </Radio>
                            <Radio name="1" value="d" id="1_d">
                              легкий
                            </Radio>
                            <Radio name="1" value="e" id="1_e">
                              медленный
                            </Radio>
                          </RadioGroup>
                        )}
                      />
                    </s.Answers>
                  </s.QuestionWrapper>
                  <s.QuestionWrapper>
                    <s.Question>
                      2. Бензин стоит 44 цента за литр. Сколько стоит 2,5 литра?
                    </s.Question>
                    <s.Answers>
                      <Controller
                        name="2"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <RadioGroup value={value} onChange={onChange}>
                            <Radio name="2" value="a" id="2_a">
                              тяжелый
                            </Radio>
                            <Radio name="2" value="b" id="2_b">
                              упругий
                            </Radio>
                            <Radio name="2" value="c" id="2_c">
                              скрытный
                            </Radio>
                            <Radio name="2" value="d" id="2_d">
                              легкий
                            </Radio>
                            <Radio name="2" value="e" id="2_e">
                              медленный
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
                            <Radio name="3" value="a" id="3_a">
                              Да
                            </Radio>
                            <Radio name="3" value="b" id="3_b">
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
                            <Radio name="4" value="a" id="4_a">
                              Да
                            </Radio>
                            <Radio name="4" value="b" id="4_b">
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
                            <Radio name="5" value="a" id="5_a">
                              Да
                            </Radio>
                            <Radio name="5" value="b" id="5_b">
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
                            <Radio name="6" value="a" id="6_a">
                              Да
                            </Radio>
                            <Radio name="6" value="b" id="6_b">
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
                            <Radio name="7" value="a" id="7_a">
                              Да
                            </Radio>
                            <Radio name="7" value="b" id="7_b">
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
                            <Radio name="8" value="a" id="8_a">
                              Да
                            </Radio>
                            <Radio name="8" value="b" id="8_b">
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
                            <Radio name="9" value="a" id="9_a">
                              Да
                            </Radio>
                            <Radio name="9" value="b" id="9_b">
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
                            <Radio name="10" value="a" id="10_a">
                              Да
                            </Radio>
                            <Radio name="10" value="b" id="10_b">
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
                            <Radio name="11" value="a" id="11_a">
                              Да
                            </Radio>
                            <Radio name="11" value="b" id="11_b">
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
                            <Radio name="12" value="a" id="12_a">
                              Да
                            </Radio>
                            <Radio name="12" value="b" id="12_b">
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
                            <Radio name="13" value="a" id="13_a">
                              Да
                            </Radio>
                            <Radio name="13" value="b" id="13_b">
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
                            <Radio name="14" value="a" id="14_a">
                              Да
                            </Radio>
                            <Radio name="14" value="b" id="14_b">
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
                            <Radio name="15" value="a" id="15_a">
                              Да
                            </Radio>
                            <Radio name="15" value="b" id="15_b">
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
                            <Radio name="16" value="a" id="16_a">
                              Да
                            </Radio>
                            <Radio name="16" value="b" id="16_b">
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
                            <Radio name="17" value="a" id="17_a">
                              Да
                            </Radio>
                            <Radio name="17" value="b" id="17_b">
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
                            <Radio name="18" value="a" id="18_a">
                              Да
                            </Radio>
                            <Radio name="18" value="b" id="18_b">
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
                            <Radio name="19" value="a" id="19_a">
                              Да
                            </Radio>
                            <Radio name="19" value="b" id="19_b">
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
                            <Radio name="20" value="a" id="20_a">
                              Да
                            </Radio>
                            <Radio name="20" value="b" id="20_b">
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
                            <Radio name="21" value="a" id="21_a">
                              Да
                            </Radio>
                            <Radio name="21" value="b" id="21_b">
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
                            <Radio name="22" value="a" id="22_a">
                              Да
                            </Radio>
                            <Radio name="22" value="b" id="22_b">
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
                            <Radio name="23" value="a" id="23_a">
                              Да
                            </Radio>
                            <Radio name="23" value="b" id="23_b">
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

                            <Radio name="24" value="a" id="24_a">
                              Да
                            </Radio>


                            <Radio name="24" value="b" id="24_b">
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

                            <Radio name="25" value="a" id="25_a">
                              Да
                            </Radio>


                            <Radio name="25" value="b" id="25_b">
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

                            <Radio name="26" value="a" id="26_a">
                              Да
                            </Radio>


                            <Radio name="26" value="b" id="26_b">
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

                            <Radio name="27" value="a" id="27_a">
                              Да
                            </Radio>


                            <Radio name="27" value="b" id="27_b">
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

                            <Radio name="28" value="a" id="28_a">
                              Да
                            </Radio>


                            <Radio name="28" value="b" id="28_b">
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

                            <Radio name="29" value="a" id="29_a">
                              Да
                            </Radio>


                            <Radio name="29" value="b" id="29_b">
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

                            <Radio name="30" value="a" id="30_a">
                              Да
                            </Radio>


                            <Radio name="30" value="b" id="30_b">
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

                            <Radio name="31" value="a" id="31_a">
                              Да
                            </Radio>


                            <Radio name="31" value="b" id="31_b">
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

                            <Radio name="32" value="a" id="32_a">
                              Да
                            </Radio>


                            <Radio name="32" value="b" id="32_b">
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

                            <Radio name="33" value="a" id="33_a">
                              Да
                            </Radio>


                            <Radio name="33" value="b" id="33_b">
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

                            <Radio name="34" value="a" id="34_a">
                              Да
                            </Radio>


                            <Radio name="34" value="b" id="34_b">
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

                            <Radio name="35" value="a" id="35_a">
                              Да
                            </Radio>


                            <Radio name="35" value="b" id="35_b">
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

                            <Radio name="36" value="a" id="36_a">
                              Да
                            </Radio>


                            <Radio name="36" value="b" id="36_b">
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

                            <Radio name="37" value="a" id="37_a">
                              Да
                            </Radio>


                            <Radio name="37" value="b" id="37_b">
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

                            <Radio name="38" value="a" id="38_a">
                              Да
                            </Radio>


                            <Radio name="38" value="b" id="38_b">
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

                            <Radio name="39" value="a" id="39_a">
                              Да
                            </Radio>


                            <Radio name="39" value="b" id="39_b">
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

                            <Radio name="40" value="a" id="40_a">
                              Да
                            </Radio>


                            <Radio name="40" value="b" id="40_b">
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

                            <Radio name="41" value="a" id="41_a">
                              Да
                            </Radio>


                            <Radio name="41" value="b" id="41_b">
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

                            <Radio name="42" value="a" id="42_a">
                              Да
                            </Radio>


                            <Radio name="42" value="b" id="42_b">
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

                            <Radio name="43" value="a" id="43_a">
                              Да
                            </Radio>


                            <Radio name="43" value="b" id="43_b">
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

                            <Radio name="44" value="a" id="44_a">
                              Да
                            </Radio>


                            <Radio name="44" value="b" id="44_b">
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

                            <Radio name="45" value="a" id="45_a">
                              Да
                            </Radio>


                            <Radio name="45" value="b" id="45_b">
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

                            <Radio name="46" value="a" id="46_a">
                              Да
                            </Radio>


                            <Radio name="46" value="b" id="46_b">
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

                            <Radio name="47" value="a" id="47_a">
                              Да
                            </Radio>


                            <Radio name="47" value="b" id="47_b">
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

                            <Radio name="48" value="a" id="48_a">
                              Да
                            </Radio>


                            <Radio name="48" value="b" id="48_b">
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

                            <Radio name="49" value="a" id="49_a">
                              Да
                            </Radio>


                            <Radio name="49" value="b" id="49_b">
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

                            <Radio name="50" value="a" id="50_a">
                              Да
                            </Radio>


                            <Radio name="50" value="b" id="50_b">
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

                            <Radio name="51" value="a" id="51_a">
                              Да
                            </Radio>


                            <Radio name="51" value="b" id="51_b">
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

                            <Radio name="52" value="a" id="52_a">
                              Да
                            </Radio>


                            <Radio name="52" value="b" id="52_b">
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

                            <Radio name="53" value="a" id="53_a">
                              Да
                            </Radio>


                            <Radio name="53" value="b" id="53_b">
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

                            <Radio name="54" value="a" id="54_a">
                              Да
                            </Radio>


                            <Radio name="54" value="b" id="54_b">
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

                            <Radio name="55" value="a" id="55_a">
                              Да
                            </Radio>


                            <Radio name="55" value="b" id="55_b">
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

                            <Radio name="56" value="a" id="56_a">
                              Да
                            </Radio>


                            <Radio name="56" value="b" id="56_b">
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

                            <Radio name="57" value="a" id="57_a">
                              Да
                            </Radio>


                            <Radio name="57" value="b" id="57_b">
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

                            <Radio name="58" value="a" id="58_a">
                              Да
                            </Radio>


                            <Radio name="58" value="b" id="58_b">
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

                            <Radio name="59" value="a" id="59_a">
                              Да
                            </Radio>


                            <Radio name="59" value="b" id="59_b">
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

                            <Radio name="60" value="a" id="60_a">
                              Да
                            </Radio>


                            <Radio name="60" value="b" id="60_b">
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

                            <Radio name="61" value="a" id="61_a">
                              Да
                            </Radio>


                            <Radio name="61" value="b" id="61_b">
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

                            <Radio name="62" value="a" id="62_a">
                              Да
                            </Radio>


                            <Radio name="62" value="b" id="62_b">
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

                            <Radio name="63" value="a" id="63_a">
                              Да
                            </Radio>


                            <Radio name="63" value="b" id="63_b">
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

                            <Radio name="64" value="a" id="64_a">
                              Да
                            </Radio>


                            <Radio name="64" value="b" id="64_b">
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

                            <Radio name="65" value="a" id="65_a">
                              Да
                            </Radio>


                            <Radio name="65" value="b" id="65_b">
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

                            <Radio name="66" value="a" id="66_a">
                              Да
                            </Radio>


                            <Radio name="66" value="b" id="66_b">
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

                            <Radio name="67" value="a" id="67_a">
                              Да
                            </Radio>


                            <Radio name="67" value="b" id="67_b">
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

                            <Radio name="68" value="a" id="68_a">
                              Да
                            </Radio>


                            <Radio name="68" value="b" id="68_b">
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

                            <Radio name="69" value="a" id="69_a">
                              Да
                            </Radio>


                            <Radio name="69" value="b" id="69_b">
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

                            <Radio name="70" value="a" id="70_a">
                              Да
                            </Radio>


                            <Radio name="70" value="b" id="70_b">
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

                            <Radio name="71" value="a" id="71_a">
                              Да
                            </Radio>


                            <Radio name="71" value="b" id="71_b">
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

                            <Radio name="72" value="a" id="72_a">
                              Да
                            </Radio>


                            <Radio name="72" value="b" id="72_b">
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

                            <Radio name="73" value="a" id="73_a">
                              Да
                            </Radio>


                            <Radio name="73" value="b" id="73_b">
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

                            <Radio name="74" value="a" id="74_a">
                              Да
                            </Radio>


                            <Radio name="74" value="b" id="74_b">
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

                            <Radio name="75" value="a" id="75_a">
                              Да
                            </Radio>


                            <Radio name="75" value="b" id="75_b">
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
