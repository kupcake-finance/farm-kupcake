import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Text, Flex, Heading, Card, CardBody, Button } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'
import { usePriceCakeBusd } from '../../../state/hooks'
import useTokenBalance from '../../../hooks/useTokenBalance'
import { getCakeAddress } from '../../../utils/addressHelpers'
import useAllEarnings from '../../../hooks/useAllEarnings'
import { getBalanceNumber } from '../../../utils/formatBalance'

const StyledFarmStakingCard = styled(Card)`
  /* background-image: url('/images/common/2a.png'); */
  background-repeat: no-repeat;
  background-position: top right;
  background-color: #eff9fb;
  min-height: 376px;
  /* background-color: transparent; */
  border-bottom: 0px slid black;
  /* border-bottom: 1px solid black; */
  /* border-right: 1px solid black; */
`

const Block = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-bottom: 16px;
  align-items: center;
  padding: 15px;
`

const SmallBlock = styled(Block)`
  width: 23%;
  background-color: transparent;
`

const BlockWallet = styled(Block)`
  border-radius: 20px;
  background-image: url('/images/common/metamask-bg.png');
  background-size: 261px;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
`
const BlockHarvest = styled(Block)`
  border-radius: 20px;
  background-image: url('/images/common/harvest-bg.png');
  background-size: 261px;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
`

const CardImage = styled.img`
  /* margin-bottom: 16px; */
  margin: 0 auto;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 34px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 20px;
`

const Actions = styled.div`
  margin-top: 24px;
`

const Countdown = styled.p`
  margin-bottom: 24px;
`

const CountdownLink = styled.a`
  color: ${({ theme }) => theme.colors.textSubtle};
  margin-left: 5px;
`

const FlexBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Relative = styled.div`
  position: relative;
  margin: 0 auto;
`

const HidingBlock = styled.div`
  position: absolute;
  bottom: 0;
  left: -97px;
  width: 150%;
  height: 84px;
  background-color: #eff9fb;
  border-top: 1px solid #dadada;
`

const StyledCakeWalletBalance = styled(CakeWalletBalance)`
  font-size: 64px !important;
`
const StyledCakeHarvestBalance = styled(CakeHarvestBalance)`
  font-size: 64px !important;
`

const StyledHarvestButton = styled(Button)`
  width: 50%;
  font-size: 22px;
  padding-top: 2px;
  margin-top: 170px;
  &:hover {
    color: #06c;
  }
`

const StyledUnlockButton = styled(UnlockButton)`
  width: 50%;
  font-size: 22px;
  padding-top: 2px;
  margin-top: 170px;

  &:hover {
    color: #06c;
  }
`

const StyledLabel = styled(Label)`
  color: #000;
`

const RestrictedFlex = styled(Flex)`
  max-width: 1200px;
  margin: 0 auto;
`

const MarginLabel = styled(Label)`
  margin-bottom: 35px;
`

const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWallet()
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const cakeBalance = getBalanceNumber(useTokenBalance(getCakeAddress()))
  const nativePrice = usePriceCakeBusd().toNumber()
  const allEarnings = useAllEarnings()
  const earningsSum = allEarnings.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // TODO: find a way to handle when the user rejects transaction or it fails
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <StyledFarmStakingCard>
      <FlexBody>
        {/* <Heading size="xl" mb="24px" color="#000">
          {TranslateString(542, 'Farms & Staking')}
        </Heading>
        <Countdown>
          Farming starts at block
          <CountdownLink href="https://bscscan.com/block/countdown/7921200">7921200</CountdownLink>
        </Countdown> */}
      </FlexBody>
      <RestrictedFlex justifyContent="space-between">
        <BlockHarvest>
          <StyledLabel>{TranslateString(50044, 'To harvest.')}</StyledLabel>
          <StyledCakeHarvestBalance earningsSum={earningsSum} />
          <MarginLabel>~${(nativePrice * earningsSum).toFixed(2)}</MarginLabel>
          {account ? (
            <StyledHarvestButton
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              fullWidth
              variant="primary"
            >
              {pendingTx
                ? TranslateString(548, 'Collecting SIMPLE')
                : TranslateString(999, `Harvest all (${balancesWithValue.length})`)}
            </StyledHarvestButton>
          ) : (
            <StyledUnlockButton fullWidth />
          )}
        </BlockHarvest>
        {/* <SmallBlock><Text>Toto</Text></SmallBlock> */}
        <BlockWallet>
          <StyledLabel>{TranslateString(54006, 'In wallet.')}</StyledLabel>
          <StyledCakeWalletBalance cakeBalance={cakeBalance} />
          <MarginLabel>~${(nativePrice * cakeBalance).toFixed(2)}</MarginLabel>
          <StyledHarvestButton>Add to Metamask</StyledHarvestButton>
        </BlockWallet>
      </RestrictedFlex>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
