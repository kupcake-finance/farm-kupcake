import React, { useEffect, useCallback, useState } from 'react'
import styled from 'styled-components'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Image, Heading } from '@pancakeswap-libs/uikit'
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID } from 'config'
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

const StyledFlexLayout = styled(FlexLayout)`
  max-width: 1200px;
  margin: 0 auto;
`

const StyledHeading = styled(Heading)`
  display: flex;
  justify-content: center;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: #48cae4;
  font-size: 65px;
  font-weight: 800;

  & > div {
    font-family: 'M PLUS Rounded 1c', sans-serif;
    margin: 0 8px;
    font-weight: 500;
    color: #000;
  }
  & > span {
    font-family: 'M PLUS Rounded 1c', sans-serif;
    color: #ff629a;
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

  const CHAIN_ID = process.env.REACT_APP_CHAIN_ID
  // console.log(CHAIN_ID)

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [stakedOnly, setStakedOnly] = useState(false)

  const activeFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier === '0X')

  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )

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

      return farmsToDisplayWithAPY.map((farm) => {
        return (
          <FarmCard
            key={farm.pid}
            farm={farm}
            removed={removed}
            bnbPrice={bnbPrice}
            cakePrice={cakePrice}
            ethereum={ethereum}
            account={account}
          />
        )
      })
    },
    [bnbPrice, account, cakePrice, ethereum],
  )

  const getSubTitle = () => {
    const shortname = window.location.pathname.substring(0, 6)

    return shortname === '/farms' ? ' Withdraw your LPs at any time' : ' Withdraw your tokens at any time'
  }

  return (
    <Page>
      <StyledHeading
        as="h1"
        size="lg"
        color="primary"
        mb="20px"
        pt="100px"
        style={{ textAlign: 'center', fontSize: '60px' }}
      >
        <span>STAKE </span> <div>&</div> EARN
      </StyledHeading>
      <Heading as="h2" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
        No Deposit Fee.
        {getSubTitle()}
      </Heading>
      <FarmTabButtons stakedOnly={stakedOnly} setStakedOnly={setStakedOnly} />
      <div>
        <Divider />
        <StyledFlexLayout>
          <Route exact path={`${path}`}>
            {stakedOnly ? farmsList(stakedOnlyFarms, false) : farmsList(activeFarms, false)}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsList(inactiveFarms, true)}
          </Route>
        </StyledFlexLayout>
      </div>
      <Divider />
    </Page>
  )
}

export default Farms
