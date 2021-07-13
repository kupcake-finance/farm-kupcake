import React from 'react'
import styled from 'styled-components'
import FlexLayout from 'components/layout/Flex'
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

const CardsContainer = styled(FlexLayout)`
  display: flex;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`

const MiniCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 15px;
  border-radius: 15px;
  width: 100%;
  border: 7px solid white;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
    transform: translate3d(0px, -4px, 0px);
  }
`

const MiniCardTitle = styled.div`
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 600;
  text-shadow: 1px 1px 1px #fff;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: #48cae4;
  margin-bottom: 15px;
`

const MiniCardImage = styled.img`
  height: 150px;
  margin: 10px auto;
`

const MiniCardText = styled.div`
  padding: 10px;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
`

export default function GlobalContent() {
  return (
    <CardsContainer>
      <MiniCard>
        <MiniCardTitle>you&apos;re the chef</MiniCardTitle>
        <MiniCardImage src="/images/common/kupcake-chef.png" alt="kupcake" />
        <MiniCardText>
          Make LPs <br />
          Earn from trades, stake them and get some sweet $KUP toppings !
        </MiniCardText>
      </MiniCard>
      <MiniCard>
        <MiniCardTitle>swap at any time</MiniCardTitle>
        <MiniCardImage src="/images/common/kupcake-swap.png" alt="kupcake" />
        <MiniCardText>Instantly connect your wallet to swap any KCC token</MiniCardText>
      </MiniCard>
      <MiniCard>
        <MiniCardTitle>reliable team</MiniCardTitle>
        <MiniCardImage src="/images/common/kupcake-team.png" alt="kupcake" />
        <MiniCardText>
          <PinkSpan>Ku</PinkSpan>pcake team is here to stay and many tasty treats are coming
        </MiniCardText>
      </MiniCard>
    </CardsContainer>
  )
}
