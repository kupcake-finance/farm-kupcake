import React from 'react'
import styled from 'styled-components'
import { Flex, Heading, Text, BaseLayout } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
// import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import Hero from '../../components/NewMenu/Hero'
import FlexLayout from '../../components/layout/Flex'
import PoocoinCard from './components/PoocoinCard'
import LPSwapCard from './components/LPSwapCard'
import MetamaskCard from './components/MetamaskCard'
import PancakeCard from './components/PancakeCard'
import ToolCard from './components/ToolCard'


const PinkSpan = styled.span`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: #ff629a;
`

const MainTitle = styled(Heading)`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: #48cae4;
  font-size: 65px;
  font-weight: 300;
`

const CardImage = styled.img`
  /* margin-bottom: 16px; */
  margin: 0 auto;
  max-width: 120px;
`

const SubTitle = styled(MainTitle)`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  margin-top: -5px;
  font-family: 'Roboto', sans-serif;
  color: #ff629a;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const StyledFlex = styled(FlexLayout)`
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 50%;

  & > * {
    min-width: 280px;
    max-width: 100%;
    margin: 0 0;
    margin-bottom: 32px;
  }
`

const WrapperFlex = styled(FlexLayout)`
  flex-wrap: nowrap;
  flex-direction: row;
`

const StyledCards = styled(FlexLayout)`
  max-width: 25%;

  & > div {
    grid-column: span 3;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.xs} {
    display: none;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    display: none;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()
  // const cookies = new Cookies()
  // const [ref, setNum] = useQueryParam('ref', StringParam)

  // if (ref) {
  //   if (isAddress(rot13(ref))) {
  //     cookies.set('ref', ref)
  //   }
  // }

  return (
    <>
      <Hero />

      <Page>
        <div>
          {/* <PoocoinCard /> */}
          <TotalValueLockedCard />
          <FarmStakingCard />
          <CakeStats />
          {/* <TwitterCard /> */}
          {/* <WrapperFlex>
            <StyledCards>
              <MetamaskCard />
            </StyledCards>
            <PendingLotteryCard /> 
            <StyledFlex>
             
              
            </StyledFlex>
            <StyledCards>
              <PancakeCard />
            </StyledCards>
          </WrapperFlex> */}

          {/* <ToolCard /> */}
          {/* <Cards>
            <PoocoinCard />
            <LPSwapCard />
          </Cards> */}
        </div>
      </Page>
    </>
  )
}

export default Home
