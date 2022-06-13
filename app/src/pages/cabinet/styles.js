import { styled } from '@linaria/react'
import { css } from '@linaria/core'
import { colors } from '../../assets/constants'

export const Section = styled.section`
  padding: 80px 0;
  background-color: ${colors.blue};
`

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: calc(100vh - 260px);
`

export const Title = styled.h2`
  margin: 0 0 30px;
  text-align: center;
  font-size: 22px;
`

export const H1 = styled.h1`
  font-size: 30px;
  color: ${colors.white};
`

export const form = css`
  margin-top: 30px;
  width: 500px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  border-radius: 8px;
  background-color: ${colors.white};
  box-shadow: 0 0 20px 6px ${colors.orange};
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Profile = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 50px;
  color: ${colors.white};
`

export const ProfilePhoto = styled.div`
  width: 200px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
  border: 1px solid ${colors.lightOrange};
`

export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileTitle = styled.h3`
  font-size: 22px;
`

export const Data = styled.div`
  margin-top: 20px;
`

export const Info = styled.p`
  margin-bottom: 15px;
  
  & > b {
    font-weight: 700;
  }
`

export const Table = styled.table`
  margin: 80px auto 0;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid ${colors.white};
  color: ${colors.white};
`

export const Tr = styled.tr`
  & > td {
    &:last-child {
      width: 30%;
    }
  }
`

export const Td = styled.td`
  border: 1px solid ${colors.white};
  border-bottom: none;
  padding: 15px;
  width: 30px;
  height: 35px;
  font-size: 16px;
  line-height: 24px;
`

export const Th = styled.th`
  border: 1px solid ${colors.white};
  padding: 3px;
  width: 30px;
  height: 35px;
  background: #347c99;
  color: #fff;
  font-weight: normal;
`
