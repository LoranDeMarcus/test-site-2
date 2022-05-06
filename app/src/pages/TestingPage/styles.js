import { styled } from '@linaria/react'
import { colors } from '../../assets/constants'

export const Wrapper = styled.div`
  margin-top: 80px;
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
  border-bottom: 1px solid ${colors.blue};
`

export const CardsWrapper = styled.div`
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  
  & > a {
    width: 32%;
  }
`
