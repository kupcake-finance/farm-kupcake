import React from 'react'
import styled from 'styled-components'
import { Flex, Heading } from '@pancakeswap-libs/uikit'
import Menu from './components/Menu'
import InfoContainer from './components/InfoContainer'
import GlobalContent from './components/GlobalContent'
import CardsContainer from './components/CardsContainer'

const PinkSpan = styled.span`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: #ff629a;
`

const Hero = styled.div`
  align-items: center;
  /* background-image: url('/images/banners/banner6.png'); */
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: auto;
  margin-bottom: 60px;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.xs} {
    margin-bottom: 0px;
    padding-top: 11px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0px;
    padding-top: 11px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    /* background-image: url('/images/banners/banner4.png'); */
    background-position: center;
    background-size: cover;
    margin-bottom: 50px;
    height: 180px;
    padding-top: 116px;
    /* padding-top: 116; */
  }
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
        <Menu />
        <Hero>
          <Flex flexDirection="column">
            <MainTitle as="h1" size="xl" mb="24px" mt="30px" color="tertiary">
              <PinkSpan>Ku</PinkSpan>pcakeSwap
            </MainTitle>
            <SubTitle>The #1 AMM on Kucoin Community Chain</SubTitle>
          </Flex>
        </Hero>

        <InfoContainer />
        <WhiteSubTitle>AUTOMATED MARKET MAKER</WhiteSubTitle>
        <CardsContainer />
      </Relative>

      <GlobalContent />
    </>
  )
}

export default Landing
