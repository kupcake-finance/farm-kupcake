import React, { useRef } from 'react'
import styled from 'styled-components'
import FlexLayout from 'components/layout/Flex'
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown'
import { withStyles } from '@material-ui/core/styles'
import { Button, Flex, Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import CustomizedMenus from '../../../components/NewMenu/CustomizedMenus'
import CustomizedTimeline from './CustomizedTimeline'

const PinkSpan = styled.span`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: #ff629a;
`

const PinkSpanBubble = styled(PinkSpan)`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`

const Global = styled.div`
  /* background-image: url('/images/common/main-bg.png');
  background-repeat: no-repeat;
  background-size: cover; */
  padding: 62px 0;
`

const BigCard = styled.div`
  /* border-radius: 20px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background-color: #ffd4e1;
  padding: 35px;
  margin-bottom: 15px;
`

const BigCardBlue = styled(BigCard)`
  background-color: #d0eff7;
`

const BigCardBlueWithBg = styled(BigCardBlue)`
  background-image: url('/images/common/logo-small.png');
  background-size: 350px 450px;
  background-repeat: no-repeat;
  background-position: bottom -30px right -30px;
`

const BigCardImage = styled.img`
  max-width: 500px;
  margin: auto;
  margin-bottom: 50px;

  ${({ theme }) => theme.mediaQueries.xs} {
    max-width: 100%;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 500px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: 500px;
  }
`
const BigCardText = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 23px;
  margin-top: 30px;
  margin-bottom: 30px;
`

const MiniCardTitle = styled.div`
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 600;
  text-shadow: 1px 1px 1px #fff;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: #48cae4;
  margin-bottom: 15px;
  text-align: center;
`

const MiniCardTitlePink = styled(MiniCardTitle)`
  color: #ff629a;
  margin-bottom: 35px;
`

const MiniCardImage = styled.img`
  height: 150px;
`

const MiniCardText = styled.div`
  padding: 10px;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
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

export default function GlobalContent() {
  return (
    <Global>
      <BigCard>
        <BigCardImage src="/images/common/kupcake-starter.png" alt="kupcake" />
        <MiniCardTitle>Buy new tokens using KUP-KCS LP tokens (coming soon...)</MiniCardTitle>
        <BigCardText>
          The project gets the KCS, KupcakeSwap burns the KUP -&gt; You get the tokens. <br />
          <br /> You will need KUP-KCS LP tokens to participate <br />
          KUP tokens equating to half of the total funds raised will be burned forever: <br />
          <br />
          <PinkSpan>
            For example, if the full $500,000 USD allocation is raised, then $250,000 of KUP tokens will be burned
          </PinkSpan>
        </BigCardText>
      </BigCard>

      <BigCardBlueWithBg id="roadmap">
        <BigCardImage src="/images/common/kupcake-roadmap.png" alt="kupcake" />
        <CustomizedTimeline />
      </BigCardBlueWithBg>

      <BigCard>
        <BigCardImage src="/images/common/the-team.png" alt="kupcake" />
        <MiniCardTitlePink>The guys and girls who make your life on KCC easier</MiniCardTitlePink>
        <CardsContainer>
          <MiniCard>
            <MiniCardTitle>
              <PinkSpan>Ku</PinkSpan>pcat
            </MiniCardTitle>
            <MiniCardImage src="/images/common/avatar-kupcat.png" alt="kupcake" />
            <MiniCardText>Smart Contract Developer</MiniCardText>
          </MiniCard>
          <MiniCard>
            <MiniCardTitle>
              <PinkSpan>Ku</PinkSpan>pid
            </MiniCardTitle>
            <MiniCardImage src="/images/common/avatar-kupid.png" alt="kupcake" />
            <MiniCardText>Web 3 Developer</MiniCardText>
          </MiniCard>
          <MiniCard>
            <MiniCardTitle>
              <PinkSpan>Ku</PinkSpan>ptain
            </MiniCardTitle>
            <MiniCardImage src="/images/common/avatar-kuptain.png" alt="kupcake" />
            <MiniCardText>Front-end Developer</MiniCardText>
          </MiniCard>
          <MiniCard>
            <MiniCardTitle>
              Ice<PinkSpan>ku</PinkSpan>p
            </MiniCardTitle>
            <MiniCardImage src="/images/common/avatar-icekup.png" alt="kupcake" />
            <MiniCardText>Head of Marketing</MiniCardText>
          </MiniCard>
          <MiniCard>
            <MiniCardTitle>
              Director&apos;s <PinkSpan>Ku</PinkSpan>p
            </MiniCardTitle>
            <MiniCardImage src="/images/common/avatar-directorscup.png" alt="kupcake" />
            <MiniCardText>Graphics Designer</MiniCardText>
          </MiniCard>
          <MiniCard>
            <MiniCardTitle>
              <PinkSpan>Ku</PinkSpan>pofti
            </MiniCardTitle>
            <MiniCardImage src="/images/common/avatar-kupofti.png" alt="kupcake" />
            <MiniCardText>Community Manager</MiniCardText>
          </MiniCard>
        </CardsContainer>
      </BigCard>
    </Global>
  )
}
