import React from 'react'
import styled from 'styled-components'
import { Text, Heading, Card, CardHeader, CardBody } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import IFrame from 'views/Trade'
import UnlockButton from 'components/UnlockButton'
import Page from 'components/layout/Page'

export interface FarmsProps {
  isLiquidity?: boolean
}

const Con = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 2500px;
  margin: 0 auto;
`

const StyledCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const Actions = styled.div`
  margin-top: 24px;
`

const StyleHeading = styled(Heading)`
  margin-top: 15px;
`
const StyledPoocoinCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  min-height: 376px;
  border: 1px solid rgba(133, 133, 133, 0.3);
  background: #0f2943;
  box-shadow: 0 0 10px #000;
`

const PoocoinIframe = styled(IFrame)`
  height: 1000px;
  border-radius: 0px;
  z-index: -1;
`

const Relative = styled.div`
  position: relative;
`

const HidingMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #0c0c0c;
`

const HidingMaskBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #fff;
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
  padding-bottom: 120px;
  z-index: 100000000;

  & > img {
    position: absolute;
    z-index: 50;
    bottom: -30px;
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

const Chart: React.FC<FarmsProps> = (liquidity) => {
  const { account } = useWallet()
  const { isLiquidity } = liquidity

  const StyledHeading = styled(Heading)`
    color: ${(props) => props.theme.colors.primary};
  `

  return (
    <Page>
      <Con>
        <Header>
          <MainTitle as="h1" size="xl" mb="0px" mt="30px" color="tertiary">
            Chart.
          </MainTitle>

          <MarginLink href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xa874fa1A7a9C8696b95180646ccbC8ca6B4512d3">
            <Text color="textSubtle">Swap on pancakeswap website &gt;</Text>
          </MarginLink>

          <img src="/images/common/chart-bg.png" alt="Swap" />
        </Header>
        <Relative>
          <PoocoinIframe url="https://dex.guru/token/0xa874fa1a7a9c8696b95180646ccbc8ca6b4512d3-bsc" title="Swap" />

          <HidingMask />
          {/* <HidingMaskBottom /> */}
        </Relative>
      </Con>
    </Page>
  )
}

export default Chart
