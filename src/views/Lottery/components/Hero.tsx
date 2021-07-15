import React from 'react'
import styled from 'styled-components'
import { Heading, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Container from 'components/layout/Container'
import LotteryProgress from './LotteryProgress'

const Title = styled(Heading).attrs({ as: 'h1', size: 'xl' })`
  color: #fff;
  margin-bottom: 24px;
`

const Blurb = styled(Text)`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`

const StyledHero = styled.div`
  background-color: #fcfcfc;
  padding-bottom: 40px;
  padding-top: 40px;
`

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LeftWrapper = styled.div`
  flex: 1;
  padding-right: 0;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-right: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-right: 32px;
  }
`

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-left: 0;
  margin-top: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 0;
    padding-left: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 32px;
  }
`
const Header = styled.div`
  position: relative;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0c0c0c;
  background-position-x: center;
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-size: 800px;
  padding-bottom: 170px;
  z-index: 100000000;

  & > img {
    position: absolute;
    z-index: 50;
    bottom: 0px;
    max-width: 800px;
  }
`

const MainTitle = styled(Heading)`
  color: #fff;
  font-size: 60px;
  font-weight: 500;
`

const SubTitle = styled(MainTitle)`
  font-size: 40px;
  font-weight: 400;
  margin: 0;
  margin-top: -15px;
  font-weight: 500;
  color: #000;
`

const SubTitle2 = styled(SubTitle)`
  margin-top: 10px;
  margin-bottom: 10px;
  color: #86868b;
`
const MarginLink = styled.a`
  margin-top: -5px;
  margin-bottom: 50px;

  & > * {
    font-size: 20px;
  }
`
const Hero = () => {
  const TranslateString = useI18n()

  return (
    <>
      <Header>
        <MainTitle as="h1" size="xl" mb="0px" mt="30px" color="tertiary">
          The Lottery.
        </MainTitle>
        <SubTitle2>Buy tickets with KUP</SubTitle2>
        <img src="/images/common/lottery-bg.png" alt="Swap" />
      </Header>
      <StyledHero>
        <StyledContainer>
          <SubTitle>{TranslateString(999, 'Win if 2, 3, or 4 of your ticket numbers match.')}</SubTitle>
          <LotteryProgress />
        </StyledContainer>
      </StyledHero>
    </>
  )
}

export default Hero
