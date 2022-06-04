import { styled } from '@linaria/react'
import { colors } from '../../assets/constants'

export const PageWrapper = styled.div`
  padding-top: 80px;
  background-color: ${colors.blue};
  padding-bottom: 80px;
`

export const Wrapper = styled.div`
`

export const Section = styled.section`
  padding: 90px 0;
  background-color: ${colors.blue};
`

export const Title = styled.h3`
  display: inline-block;
  padding-bottom: 40px;
  width: 100%;
  font-size: 30px;
  line-height: 38px;
  font-weight: 700;
  color: ${colors.white};
  text-align: center;
  border-bottom: 1px solid ${colors.white};
`

export const Subtitle = styled.span`
  display: block;
  margin-top: 40px;
  font-size: 22px;
  line-height: 28px;
  font-weight: 400;
  color: ${colors.white}
`

export const CardsWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  
  & > a {
    width: 32%;
  }
`
