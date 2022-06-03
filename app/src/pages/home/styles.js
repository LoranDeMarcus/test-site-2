import { styled } from '@linaria/react'
import { css } from '@linaria/core'
import { colors } from '../../assets/constants'

export const Section = styled.section`
  padding: 80px 0 130px;
  background-color: ${colors.blue};

  & > div> h3 {
    color: ${colors.white};
  }
`

export const SectionInner = styled.div`
  margin-top: 60px;
  display: flex;
  gap: 80px;
`

export const TextWrapper = styled.div`
`

export const image = css`
  margin: 0 auto;
  height: 350px;
`

export const Title = styled.h1`
  margin-top: 20px;
  font-size: 40px;
  line-height: 55px;
  font-weight: 700;
  color: ${colors.white};
  text-align: center;
`

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 18px;
  font-size: 18px;
  line-height: 24px;
  color: ${colors.white};
`

export const TextDark = styled.p`
  margin-top: 0;
  margin-bottom: 18px;
  font-size: 18px;
  line-height: 24px;
  color: ${colors.black};
`

export const TransparentSection = styled.section`
  padding: 60px 0;
  background-color: ${colors.white};
`

export const TitleThird = styled.h3`
  padding-bottom: 20px;
  font-size: 22px;
  line-height: 28px;
  font-weight: 700;
  border-bottom: 2px solid ${colors.gray};
`

export const Wrapper = styled.div`
  margin-top: 50px;
`

export const CardsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
`

export const Card = styled.div`
  width: 200px;
  height: 100px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  color: ${colors.blue};
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    right: -40px;
    top: 20px;
    width: 0;
    height: 0;
    border-width: 27.5px 0 27.5px 20px;
    border-color: transparent transparent transparent ${colors.orange};
    border-style: solid;
  }
`
