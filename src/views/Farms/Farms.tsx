import React, { useEffect, useCallback, useState } from 'react'
import styled from 'styled-components'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Heading } from '@pancakeswap-libs/uikit'
import { BLOCKS_PER_YEAR } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceBnbBusd, usePriceCakeBusd } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import FarmTabButtons from './components/FarmTabButtons'
import Divider from './components/Divider'

export interface FarmsProps {
  tokenMode?: boolean
}
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
  margin-top: 30px;
  color: #86868b;
`

const Dark = styled.div`
  background-color: #48cae4;
  padding: 20px 0;
  padding-top: 100px;
  border-bottom: 10px solid #fff;
  width: 100%100px;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 20px;
`

const HeaderFarm = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #48cae4;
`

const HeaderPool = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #48cae4;
  background-position-x: center;
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-size: 800px;
  padding-bottom: 350px;
`

const CardsContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const RestrictedFlexLayout = styled(FlexLayout)`
  max-width: 1300px;
  margin: 0 auto;

  ${({ theme }) => theme.mediaQueries.xs} {
    & > * {
      max-width: 100%;
    }
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    & > * {
      min-width: 300px;
      max-width: 45%;
      width: 100%;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > * {
      min-width: 280px;
      max-width: 31.5%;
      width: 100%;
    }
  }
`

const Farms: React.FC<FarmsProps> = (farmsProps) => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const cakePrice = usePriceCakeBusd()
  const bnbPrice = usePriceBnbBusd()
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const { tokenMode } = farmsProps

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [stakedOnly, setStakedOnly] = useState(false)

  const activeFarms = farmsLP.filter((farm) => farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => farm.multiplier === '0X')

  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )
  const HeaderZ = ({ children }) => {
    if (tokenMode) {
      return <HeaderPool>{children}</HeaderPool>
    }

    return <HeaderFarm>{children}</HeaderFarm>
  }
  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      // const cakePriceVsBNB = new BigNumber(farmsLP.find((farm) => farm.pid === CAKE_POOL_PID)?.tokenPriceVsQuote || 0)
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        // if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
        //   return farm
        // }
        const cakeRewardPerBlock = new BigNumber(farm.eggPerBlock || 1)
          .times(new BigNumber(farm.poolWeight))
          .div(new BigNumber(10).pow(18))
        const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

        let apy = cakePrice.times(cakeRewardPerYear)

        let totalValue = new BigNumber(farm.lpTotalInQuoteToken || 0)

        if (farm.quoteTokenSymbol === QuoteToken.BNB) {
          totalValue = totalValue.times(bnbPrice)
        }

        if (totalValue.comparedTo(0) > 0) {
          apy = apy.div(totalValue)
        }

        return { ...farm, apy }
      })

      return farmsToDisplayWithAPY.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          removed={removed}
          bnbPrice={bnbPrice}
          cakePrice={cakePrice}
          ethereum={ethereum}
          account={account}
        />
      ))
    },
    [bnbPrice, account, cakePrice, ethereum],
  )

  return (
    <Page>
      <Dark>
        <FarmTabButtons stakedOnly={stakedOnly} setStakedOnly={setStakedOnly} />
      </Dark>
      <div>
        <Divider />
        <CardsContainer>
          <Route exact path={`${path}`}>
            {stakedOnly ? farmsList(stakedOnlyFarms, false) : farmsList(activeFarms, false)}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsList(inactiveFarms, true)}
          </Route>
        </CardsContainer>
      </div>
    </Page>
  )
}

export default Farms
