import React from 'react'
import styled from 'styled-components'
import { Flex, Heading } from '@pancakeswap-libs/uikit'
import Menu from '../../components/NewMenu/Menu'
import Hero from '../../components/NewMenu/Hero'
import InfoContainer from './components/InfoContainer'
import GlobalContent from './components/GlobalContent'
import CardsContainer from './components/CardsContainer'

const PinkSpan = styled.span`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: #ff629a;
`

const MainTitle = styled(Heading)`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: #48cae4;
  font-size: 65px;
  font-weight: 800;
  margin-top: 60px;

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

const SubTitle = styled(MainTitle)`
  font-weight: 500;
  margin: 0;
  margin-top: -5px;
  font-family: 'Roboto', sans-serif;
  color: #ff629a;

  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 15px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 18px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 20px;
  }
`

const Container = styled.div`
  margin: 0 auto;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  ${({ theme }) => theme.mediaQueries.xs} {
    background: url('/images/common/landing-bg-mobile.png');
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    background: url('/images/common/landing-bg.png');
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    background: url('/images/common/landing-bg.png');
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
  }
`

const WhiteSubTitle = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  margin-bottom: 40px;
  margin-top: 15px;

  ${({ theme }) => theme.mediaQueries.xs} {
    color: #48cae4;
    font-size: 35px;
    text-align: center;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 15px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    color: #48cae4;
    font-size: 40px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    color: #fff;
    font-size: 45px;
    background-color: rgba(255, 255, 255, 0);
  }
`

const Relative = styled.div`
  margin: 0 auto;
  position: relative;
  max-width: 2500px;
  padding-bottom: 45px;
`

const Footer = styled.div``

// const PinkColorSpan
const Landing: React.FC = () => {
  return (
    <>
      <Relative>
        <Container />
        <Hero />

        <InfoContainer />
        <WhiteSubTitle>AUTOMATED MARKET MAKER</WhiteSubTitle>
        <CardsContainer />
      </Relative>

      <GlobalContent />
    </>
  )
}

export default Landing
