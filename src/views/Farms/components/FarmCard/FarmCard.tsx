import React, { useMemo, useState } from 'react'
import BigNumber from 'bignumber.js'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import styled, { keyframes } from 'styled-components'
import { Tag, Flex, Text, Skeleton } from '@pancakeswap-libs/uikit'
import { Farm } from 'state/types'
import { provider } from 'web3-core'
import useI18n from 'hooks/useI18n'
import { useFarmFromPid, useFarmUser } from 'state/hooks'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
import { QuoteToken } from 'config/constants/types'
import DetailsSection from './DetailsSection'
import CardHeading from './CardHeading'
import CardActionsContainer from './CardActionsContainer'
import ApyButton from './ApyButton'
import HarvestAction from './HarvestAction'

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

const AccentGradient = keyframes`  
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
`
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('/images/common/chef-bg.png');
  border-radius: 16px;
  /* background-size: 10%; */
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  opacity: 0.5;
`

const StyledCardAccent = styled.div`
  /* background: ${({ theme }) => `linear-gradient(180deg, #fcfcfc, #06c)`}; */
  background-size: 400% 400%;
  /* animation: ${AccentGradient} 2s linear infinite; */
  /* border-radius: 32px; */
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -4px;
  left: -2px;
  z-index: -1;
`

const FCard = styled.div`
  align-self: baseline;
  background: ${(props) => props.theme.card.background};
  /* border-radius: 32px; */
  /* box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05); */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  position: relative;
  text-align: center;
`

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.borderColor};
  height: 1px;
  margin: 28px auto;
  width: 100%;
`

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
`
const Elements = styled.div`
  max-width: 49%;
  min-width: 40%;
  padding: 15px;
  border: 1px solid #d2d2d7;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  margin-bottom: 15px;
`

const BigElements = styled(Elements)`
  max-width: 100%;
  min-width: 61%;
  position: relative;
`

const StyledApy = styled(ApyButton)`
  position: absolute;
  left: 10px;
  top: 10px;
`

const MultiplierTag = styled(Tag)`
  position: absolute;
  top: 25px;
  right: 10px;
  min-width: 35px;
  background-color: transparent;
  margin: 1px solid #333 !important;
  color: #fff;
  background-color: #48cae4;
  border-color: #48cae4;
  display: flex;
  justify-content: flex-end;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  position: relative;
`

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const NewCard = styled.div`
  position: relative;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  height: 140px;
  /* background-color: #f2f2f2; */
  background-color: #fff;
  /* border-radius: 20px; */
  padding: 5px 25px;
  margin-bottom: 14px;
  margin-left: auto;
  margin-right: auto;
  /* box-shadow: 0px 0px 1px black; */
  box-shadow: 0px 2px 10px #9f9f9f;
  border: 3px solid white;

  &:hover {
    border-color: #48cae4;
    /* box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px; */
    /* transform: translate3d(0px, -4px, 0px); */
    cursor: pointer;
  }
`

const CardImageBlock = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 130px;
  max-width: 30%;
  align-items: center;
`

const APRText = styled.p`
  color: #48cae4 !important;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
`

const Relative = styled.div`
  display: flex;
  position: relative;
`

const CardImage = styled.img`
  /* height: 120px; */
  height: 70px;
  margin-bottom: 7px;
`

const HidingBlock = styled.div`
  position: absolute;
  bottom: 0;
  left: 10px;
  width: 90%;
  height: 28px;
  background-color: #eff9fb;
  border-top: 1px solid #dadada;
`

const LPLabel = styled(Text)`
  color: #000;
  font-size: 18px;
  font-weight: 600;
  z-index: 1;
  color: #48cae4 !important;
  /* text-shadow: 2px 2px 3px #d9c8be; */
`

const VerticalDivider = styled.div`
  height: 80px;
  width: 1px;
  background-color: #fff;
  margin-left: 25px;
  margin-right: 25px;
`

const InfoContainer = styled.div`
  height: 100%;
  min-width: 250px;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const InfoElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* border: 1px solid #ccc; */
  position: relative;
  & > * {
    color: #000;
  }
`

const APRInfoElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  /* border: 1px solid #ccc; */
  position: relative;
  width: 20%;
  & > * {
    color: #000;
  }
`

const InfoKey = styled.p`
  margin-bottom: 10px;
  font-size: 15px;
`

const InfoValue = styled.p`
  font-weight: 500;
  font-size: 15px;
`

const Trigger = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

interface FarmCardProps {
  farm: FarmWithStakedValue
  removed: boolean
  cakePrice?: BigNumber
  bnbPrice?: BigNumber
  ethereum?: provider
  account?: string
}

const FarmCard: React.FC<FarmCardProps> = ({ farm, removed, cakePrice, bnbPrice, ethereum, account }) => {
  const TranslateString = useI18n()

  const [showExpandableSection, setShowExpandableSection] = useState(false)
  const { pid, lpAddresses, tokenAddresses, isTokenOnly, depositFeeBP, harvestInterval, userData } = useFarmFromPid(
    farm.pid,
  )
  const { allowance, tokenBalance, stakedBalance, earnings } = useFarmUser(pid)
  const tokenAddress = tokenAddresses[process.env.REACT_APP_CHAIN_ID]
  const [nextHarvest, setNextHarvest] = useState(Number)

  // const isCommunityFarm = communityFarms.includes(farm.tokenSymbol)
  // We assume the token name is coin pair + lp e.g. CAKE-BNB LP, LINK-BNB LP,
  // NAR-CAKE LP. The images should be cake-bnb.svg, link-bnb.svg, nar-cake.svg
  // const farmImage = farm.lpSymbol.split(' ')[0].toLocaleLowerCase()
  const farmImage = farm.isTokenOnly
    ? farm.tokenSymbol.toLowerCase()
    : `${farm.tokenSymbol.toLowerCase()}-${farm.quoteTokenSymbol.toLowerCase()}`

  const totalValue: BigNumber = useMemo(() => {
    if (!farm.lpTotalInQuoteToken) {
      return null
    }
    if (farm.quoteTokenSymbol === QuoteToken.BNB) {
      return bnbPrice.times(farm.lpTotalInQuoteToken)
    }
    if (farm.quoteTokenSymbol === QuoteToken.CAKE) {
      return cakePrice.times(farm.lpTotalInQuoteToken)
    }
    return farm.lpTotalInQuoteToken
  }, [bnbPrice, cakePrice, farm.lpTotalInQuoteToken, farm.quoteTokenSymbol])

  const totalValueFormated = totalValue
    ? `$${Number(totalValue).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
    : '-'

  const lpLabel = farm.lpSymbol
  const earnLabel = 'SIMPLE'
  const farmAPY =
    farm.apy &&
    farm.apy.times(new BigNumber(100)).toNumber().toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

  const { quoteTokenAdresses, quoteTokenSymbol, risk } = farm

  return (
    <CardContainer>
      <NewCard>
        <Background />
        <CardImageBlock>
          <Relative>
            <CardImage src={`/images/farms/${farmImage}.png`} alt={quoteTokenSymbol} height={88} />
            {/* <HidingBlock /> */}
          </Relative>
          <LPLabel>{lpLabel}</LPLabel>
        </CardImageBlock>

        <APRInfoElement>
          <InfoKey>Earned</InfoKey>
          {/* ##NB_TOKEN## */}
          <APRText>500 KUP</APRText>
        </APRInfoElement>

        <APRInfoElement>
          <InfoKey>APR</InfoKey>
          <APRText>
            {farmAPY}%
            {farm.apy ? (
              <>
                <ApyButton
                  lpLabel={lpLabel}
                  quoteTokenAdresses={quoteTokenAdresses}
                  quoteTokenSymbol={quoteTokenSymbol}
                  tokenAddresses={tokenAddresses}
                  cakePrice={cakePrice}
                  apy={farm.apy}
                />
              </>
            ) : (
              <Skeleton height={24} width={80} />
            )}
          </APRText>
        </APRInfoElement>

        <APRInfoElement>
          <InfoKey>Liquidity</InfoKey>
          {/* ##LIQUIDITY_IN_POOL## */}
          <APRText>$1,500,000</APRText>
        </APRInfoElement>

        <APRInfoElement>
          <InfoKey>Multiplier</InfoKey>
          <APRText>3x</APRText>
        </APRInfoElement>
        {/* <InfoContainer>
        <InfoElement>
          <InfoKey>EARN</InfoKey>
          <InfoValue>{earnLabel}</InfoValue>
        </InfoElement>

        <InfoElement>
          <InfoKey>Harvest Lockup</InfoKey>
          <InfoValue> {farm.harvestInterval / 3600} Hour(s)</InfoValue>
        </InfoElement>

        <InfoElement>
          <InfoKey>Deposit Fee</InfoKey>
          <InfoValue> {farm.depositFeeBP / 100}%</InfoValue>
        </InfoElement>

        <InfoElement>
          <InfoKey>TVL</InfoKey>
          <InfoValue>{totalValueFormated}</InfoValue>
        </InfoElement>
      </InfoContainer> */}

        {/* <Relative>
        <HarvestAction earnings={earnings} pid={pid} nextHarvest={nextHarvest} />
      </Relative> */}
      </NewCard>
    </CardContainer>
  )
}

export default FarmCard
