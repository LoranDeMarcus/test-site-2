import React, { useEffect, useState } from 'react'
import { ColorHex, MainColor, TwoStageTest } from 'luscher-test'
import * as s  from './styles'
import { Button } from '../Button'

const initialColors = Object.values(ColorHex)

export const Luscher = ({ setIsDone }) => {
  const [interpretation, setInterpretation] = useState('')
  const [colors, setColors] = useState(initialColors)
  const [selectedColors, setSelectedColors] = useState([])
  const [selectedColorsReverse, setSelectedColorsReverse] = useState([])
  const [isFirstDone, setIsFirstDone] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const firstArray = []
  const secondArray = []
  const firstResultArray = []
  const secondResultArray = []

  const handleClick = (event) => {
    const clickedColor = event.target.dataset.bgColor
    setColors(colors.filter((color) => color !== clickedColor))
    if (!isFirstDone) {
      setSelectedColors([...selectedColors, clickedColor])
    }
    if (isFirstDone && !isFinished) {
      setSelectedColorsReverse([...selectedColorsReverse, clickedColor])
    }
  }

  const handleFirstDone = () => {
    setIsFirstDone(true)
  }

  const colorsCards = colors.map((color) => {
    return (
      <s.ColorContainer
        key={color}
        data-bg-color={color}
        color={color.toString()}
        onClick={handleClick}
      />
    )})


  useEffect(() => {
    if (isFirstDone) {
      setColors(initialColors)
    }
  }, [isFirstDone])

  useEffect(() => {

  }, [isFinished])

  useEffect(() => {
    console.log(interpretation)
  }, [interpretation])

  const handleTestResult = async () => {
    selectedColors.map((color) => {
      const [key] = Object.entries(ColorHex).find(([, name]) => color === name)
      firstArray.push(key)
    })
    firstArray.map((color) => {
      const [key] = Object.entries(MainColor).find(([, name]) => color === name)
      firstResultArray.push(Number(key))
    })

    selectedColorsReverse.map((color) => {
      const [key] = Object.entries(ColorHex).find(([, name]) => color === name)
      secondArray.push(key)
    })
    secondArray.map((color) => {
      const [key] = Object.entries(MainColor).find(([, name]) => color === name)
      secondResultArray.push(Number(key))
    })

    const test = new TwoStageTest(firstResultArray, secondResultArray)
    const testInterpretation = await test.getInterpretation('ru')
    setInterpretation(testInterpretation)
    setIsFinished(true)
    setIsDone(true)
  }

  if (isFinished) {
    return (
      <>
        <s.SubTitle>
          Результат:
        </s.SubTitle>
        <s.LightText>
          {interpretation[0][0].interpretation}
        </s.LightText>
        <s.LightText>
          {interpretation[0][1].interpretation[0].physio}
        </s.LightText>
        <s.LightText>
          {interpretation[0][1].interpretation[0].physcho}
        </s.LightText>
        <s.LightText>
          {interpretation[0][2].interpretation[0]}
        </s.LightText>
        <s.LightText>
          {interpretation[0][3].interpretation[0]}
          {interpretation[0][3].interpretation[1]}
        </s.LightText>
      </>
    )
  }

  return (
    <s.Wrapper>
      {selectedColors.length < 8 && colorsCards}
      {selectedColors.length >= 8 && !isFirstDone && (
        <>
          <s.Text>
            Методика Люшера требует двух выборок. Просим Вас отдохнуть
            одну-две минуты и продолжить тестирование.
          </s.Text>
          <Button onClick={handleFirstDone}>
            Продолжить
          </Button>
        </>
      )}
      {isFirstDone && !isFinished && colorsCards}
      {selectedColors.length >= 8 && selectedColorsReverse.length >= 8 && (
        <Button onClick={handleTestResult}>
          Завершить
        </Button>
      )}
    </s.Wrapper>
  )
}
