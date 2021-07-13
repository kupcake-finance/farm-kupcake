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
  background-color: transparent;
  min-height: 376px;
  border-bottom: 0px slid black;
`

const Block = styled(Flex)`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  margin-bottom: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  box-shadow: 0px 5px 10px #9f9f9f;
  border: 7px solid white;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
    transform: translate3d(0px, -4px, 0px);
  }

  ${({ theme }) => theme.mediaQueries.xs} {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    width: 48%;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 48%;
  }
`

const SmallBlock = styled(Block)`
  width: 23%;
  background-color: transparent;
`

const BlockWallet = styled(Block)`
  border-radius: 20px;
  flex-direction: column;
`
const BlockHarvest = styled(Block)`
  border-radius: 20px;
  flex-direction: column;
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
  font-size: 44px !important;
`
const StyledCakeHarvestBalance = styled(CakeHarvestBalance)`
  font-size: 24px !important;
`

const StyledHarvestButton = styled(Button)`
  width: 50%;
  font-size: 22px;
  padding-top: 2px;
`

const StyledUnlockButton = styled(UnlockButton)`
  width: 50%;
  font-size: 22px;
  padding-top: 2px;
  margin-top: 10px;

  & > div {
    left: 0;
    background-image: url(/images/common/metamask.png) !important;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 60px;
    background-size: 34%;
    opacity: 0.7;
    background-repeat: no-repeat;
    overflow: hidden;
    background-position-x: -17px;
    background-position-y: -4px;
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 35px #ff9e62 !important;
  }

  &:focus {
    & > div {
      opacity: 1;
    }
  }
`

const StyledLabel = styled(Label)`
  font-family: 'M PLUS Rounded 1c', sans-serif !important;
  text-align: center;
  color: #48cae4;
`

const RestrictedFlex = styled(Flex)`
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 15px;

  ${({ theme }) => theme.mediaQueries.xs} {
    flex-direction: column;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
  }
`

const MarginLabel = styled(Label)`
  font-size: 28px;
`

const LineFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
`
const DesktopRowMobileColumn = styled.div`
  display: flex;
  width: 100%;
  ${({ theme }) => theme.mediaQueries.xs} {
    flex-direction: column;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
  }
`

const RobotoButton = styled(Button)`
  position: relative !important;
  font-family: 'Roboto', sans-serif;
  max-width: 45%;
  min-width: 200px;
  font-weight: 500;
  font-size: 22px;
  height: 70px;
  background-color: rgba(255, 255, 255, 0) !important;
  border: none;
  box-shadow: 0 0 10px #ff629a;
  border-radius: 60px;
  /* font-family: 'Gloria Hallelujah', cursive; */
  color: #48cae4;
  transition: all 0.5s ease;
  padding: 0 30px;

  ${({ theme }) => theme.mediaQueries.xs} {
    max-width: 85%;
    padding: 0 10px;
    margin: 10px auto;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 45%;
    margin: 10px auto;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: 45%;
    margin: 10px auto;
  }

  & > img {
    max-height: 40px;
    margin: 0 5px;
  }

  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus,
  &:visited {
    background-color: rgba(255, 255, 255, 0.5) !important;
    border-color: transparent !important;
    box-shadow: 0 8px 25px #ff629a !important;
    transform: translate3d(0px, -3px, 0px);
  }

  & > span {
    font-family: 'Gloria Hallelujah', cursive;
    margin-left: 6px;
    font-weight: 600;
    color: #ff629a;
  }
`

const MetaRobotoButton = styled(RobotoButton)`
  min-width: 210px;
  text-align: left;
  justify-content: flex-start;
  padding-left: 55px;
  box-shadow: 0 0 15px #ff9e62;

  & > div {
    left: 0;
    background-image: url(/images/common/metamask.png) !important;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 60px;
    background-size: 34%;
    opacity: 0.7;
    background-repeat: no-repeat;
    overflow: hidden;
    background-position-x: -17px;
    background-position-y: -4px;
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 35px #ff9e62 !important;
  }

  &:focus {
    & > div {
      opacity: 1;
    }
  }
`

const Spacer = styled.div`
  margin-right: 20px;
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
          <LineFlex>
            <StyledLabel>{TranslateString(50044, 'SUBMIT TOKEN FOR LISTING')}</StyledLabel>
          </LineFlex>

          <a href="https://qugkgjziv7l.typeform.com/to/PxxOYSX4" target="_blank" rel="noreferrer">
            <RobotoButton id="submit-token" fullWidth variant="primary">
              Access <span>form</span>
            </RobotoButton>
          </a>
        </BlockHarvest>

        {/* <SmallBlock><Text>Toto</Text></SmallBlock> */}
        <BlockHarvest>
          <LineFlex>
            <StyledLabel>{TranslateString(50044, 'JOIN THE PRESALE')}</StyledLabel>
          </LineFlex>
          <>
            <RobotoButton id="submit-token" disabled fullWidth variant="primary">
              <span>Soon</span>
            </RobotoButton>
          </>
        </BlockHarvest>
      </RestrictedFlex>
      <RestrictedFlex justifyContent="space-between">
        <BlockHarvest>
          <LineFlex>
            <StyledLabel>{TranslateString(50044, 'KUP TO HARVEST')}</StyledLabel>
            <Flex flexDirection="row" alignItems="center">
              <Spacer>
                <StyledCakeHarvestBalance earningsSum={earningsSum} />
              </Spacer>
              <MarginLabel>~${(nativePrice * earningsSum).toFixed(2)}</MarginLabel>
            </Flex>
          </LineFlex>
          <>
            {account ? (
              <RobotoButton
                id="harvest-all"
                disabled={balancesWithValue.length <= 0 || pendingTx}
                onClick={harvestAllFarms}
                fullWidth
                variant="primary"
              >
                {pendingTx ? (
                  <>
                    Collecting <span>kup</span>
                  </>
                ) : (
                  <>Harvest all ({balancesWithValue.length})</>
                )}
              </RobotoButton>
            ) : (
              <StyledUnlockButton fullWidth />
            )}
          </>
        </BlockHarvest>

        {/* <SmallBlock><Text>Toto</Text></SmallBlock> */}
        <BlockWallet>
          <LineFlex>
            <StyledLabel>{TranslateString(54006, 'KUP IN WALLET')}</StyledLabel>
            <Flex flexDirection="row" alignItems="center">
              <Spacer>
                <StyledCakeWalletBalance cakeBalance={cakeBalance} />
              </Spacer>
              <MarginLabel>~${(nativePrice * cakeBalance).toFixed(2)}</MarginLabel>
            </Flex>
          </LineFlex>
          <DesktopRowMobileColumn>
            <MetaRobotoButton>
              <div />
              {/* <img src="/images/common/metamask.png" alt="metamask" /> */}
              Switch to KCC
            </MetaRobotoButton>
            <MetaRobotoButton>
              <div />
              Add KUP
              {/* <img src="/images/common/metamask-back.png" alt="metamask" /> */}
            </MetaRobotoButton>
          </DesktopRowMobileColumn>
        </BlockWallet>
      </RestrictedFlex>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
