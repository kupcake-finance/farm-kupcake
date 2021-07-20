import React from 'react'
import styled from 'styled-components'
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown'
import { withStyles } from '@material-ui/core/styles'
import { Button, Flex, Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import CustomizedMenus from '../../../components/NewMenu/CustomizedMenus'

const PinkSpan = styled.span`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: #ff629a;
`

const PinkSpanBubble = styled(PinkSpan)`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`

const InfoContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 100px auto;
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 30px;

  ${({ theme }) => theme.mediaQueries.xs} {
    margin-top: 30px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 30px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: 180px;
  }
`

const CountDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 30px;
`

const MainTitle = styled(Heading)`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: #48cae4;
  font-weight: 300;

  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 45px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 55px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 65px;
  }
`

const MainBubbleTitle = styled(MainTitle)`
  text-transform: uppercase;
  margin-top: 25px;
  font-weight: 600;

  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 25px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 35px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 40px;
  }
`
const TimerContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
`

const TimeElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 15px;
  border-radius: 20px;
`

const TimeValue = styled.div`
  font-weight: 500;
  color: #48cae4;
  font-family: 'M PLUS Rounded 1c', sans-serif;

  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 35px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 55px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 55px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 60px;
  }
`

const TimeLabel = styled.div`
  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 15px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 20px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 20px;
  }
`

const BubbleText = styled.p`
  text-align: center;
  font-size: 20px;
  margin-top: 30px;
`

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 50px;

  ${({ theme }) => theme.mediaQueries.xs} {
    flex-direction: column;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
  }
`

const RobotoButton = styled(Button)`
  font-family: 'Roboto', sans-serif;
  width: 300px;
  font-weight: 500;
  font-size: 28px;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.5) !important;
  border: none;
  box-shadow: 0 0 10px #ff629a;
  border-radius: 60px;
  /* font-family: 'Gloria Hallelujah', cursive; */
  color: #48cae4;
  transition: all 0.5s ease;
  padding: 8px;

  ${({ theme }) => theme.mediaQueries.xs} {
    margin: 10px auto;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0px auto;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0px auto;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.5) !important;
    border-color: white !important;
    box-shadow: 0 0 35px #ff629a;
  }

  & > span {
    font-family: 'Gloria Hallelujah', cursive;
    margin-left: 6px;
    font-weight: 600;
    color: #ff629a;
  }
`

export default function InfoContainerBlock() {
  return (
    <InfoContainer>
      <CountDownContainer>
        <MainBubbleTitle as="h1" size="xl" mb="24px" mt="30px" color="#fff">
          presale launch
        </MainBubbleTitle>
        <Countdown
          date={1626364800000}
          // date={1625320800000}
          renderer={(props) => (
            <TimerContainer>
              <TimeElement>
                <TimeValue>
                  {' '}
                  <PinkSpan>COMING</PinkSpan>SOON
                </TimeValue>
                {/* <TimeValue>{zeroPad(props.days)}</TimeValue> */}
                <TimeLabel>Follow our social medias for live updates</TimeLabel>
              </TimeElement>
              {/* <TimeElement>
                <TimeValue>{zeroPad(props.hours)}</TimeValue>
                <TimeLabel>Hours</TimeLabel>
              </TimeElement>
              <TimeElement>
                <TimeValue>{zeroPad(props.minutes)}</TimeValue>
                <TimeLabel>Minutes</TimeLabel>
              </TimeElement>
              <TimeElement>
                <TimeValue>
                  <PinkSpan>{zeroPad(props.seconds)}</PinkSpan>
                </TimeValue>
                <TimeLabel>Seconds</TimeLabel>
              </TimeElement> */}
            </TimerContainer>
          )}
        />
      </CountDownContainer>

      <BubbleText>Be amongst the first to be listed on KupcakeSwap AMM</BubbleText>
      <ButtonContainer>
        <Flex flexDirection="column" alignItems="center">
          <a href="https://qugkgjziv7l.typeform.com/to/PxxOYSX4" target="_blank" rel="noreferrer">
            <RobotoButton>Submit your token</RobotoButton>
          </a>
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          {/* <a href="https://presale.kupcakeswap.finance"> */}
          <a href="/">
            <RobotoButton>
              <span>presale</span> (soon)
            </RobotoButton>
          </a>
        </Flex>
      </ButtonContainer>
    </InfoContainer>
  )
}
