import React, { useMemo, useState } from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes } from 'styled-components'
import { Flex, Text, Card, Link, Skeleton, LinkExternal } from '@pancakeswap-libs/uikit'
import { communityFarms } from 'config/constants'
import { Farm } from 'state/types'
import { provider } from 'web3-core'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import useI18n from 'hooks/useI18n'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
import { QuoteToken } from 'config/constants/types'
import DetailsSection from './DetailsSection'
import CardHeading from './CardHeading'
import CardActionsContainer from './CardActionsContainer'
import ApyButton from './ApyButton'

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

const RainbowLight = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`
const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 0;
`
const StyledDetailsCard = styled(Card)`
  font-family: 'Roboto', sans-serif;
  position: relative;
  width: 100%;
  max-width: 700px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 5px 10px #9f9f9f;
  border: 7px solid white;
  transition: all 0.2s ease-in-out;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;

  ${({ theme }) => theme.mediaQueries.xs} {
    margin-top: 30px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 30px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: 30px;
  }
`

const InfoBanner = styled(Flex)`
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0px 15px #d3d3d3;
  padding: 15px 30px;
  margin: 25px auto;
`

const StyledCardAccent = styled.div`
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  background-size: 300% 300%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 16px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`

const FCardContainer = styled.div`
  display: flex;
  max-width: 23%;
  border-radius: 30px;
`

const FCard = styled.div`
  border: 7px solid #fff;
  border-radius: 30px;
  align-self: baseline;
  background-color: rgba(255, 255, 255, 0.9);
  /* border-radius: 32px; */
  box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  text-align: center;
  margin: 0 !important;
  width: 100%;
`

const Divider = styled.div`
  background-color: #dadada;
  height: 1px;
  margin: 28px auto;
  width: 100%;
`

const StyledContainer = styled.div`
  box-shadow: 0px 5px 10px #9f9f9f;
  margin: 10px auto;
  width: 100%;
  background-color: #fff;
`

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
`

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

  svg {
    padding-left: 4px;
    height: 18px;
    width: auto;
    fill: ${({ theme }) => theme.colors.primary};
  }
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
  const earnLabel = 'KUP'
  const farmAPY =
    farm.apy &&
    farm.apy.times(new BigNumber(100)).toNumber().toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

  const { quoteTokenAdresses, quoteTokenSymbol, tokenAddresses, risk } = farm
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })
  return (
    <FCardContainer>
      <StyledDetailsCard>
        {farm.tokenSymbol === 'KUP' && <StyledCardAccent />}
        <CardHeading
          lpLabel={lpLabel}
          multiplier={farm.multiplier}
          risk={risk}
          depositFee={farm.depositFeeBP}
          farmImage={farmImage}
          tokenSymbol={farm.tokenSymbol}
        />
        {!removed && (
          <Flex justifyContent="space-between" alignItems="center" style={{ width: '100%', padding: '0 10px' }}>
            <Text style={{ color: '#48cae4', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
              {TranslateString(352, 'APR')}
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
            </Text>
            <Text bold style={{ display: 'flex', alignItems: 'center' }}>
              {farm.apy ? <>{farmAPY}%</> : <Skeleton height={24} width={80} />}
            </Text>
          </Flex>
        )}
        <Flex justifyContent="space-between" style={{ width: '100%', padding: '0 10px' }}>
          <Text style={{ color: '#48cae4', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
            {TranslateString(318, 'Earn')}:
          </Text>
          <Text bold>{earnLabel}</Text>
        </Flex>

        <Container>
          <InfoBanner>
            <CardActionsContainer farm={farm} ethereum={ethereum} account={account} />
          </InfoBanner>
        </Container>

        <Flex justifyContent="space-between" style={{ width: '100%', padding: '0 10px' }}>
          <Text style={{ color: '#48cae4', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
            {TranslateString(99999, 'Deposit')}:
          </Text>

          <StyledLinkExternal
            style={{ display: 'flex', alignItems: 'center' }}
            href={
              farm.isTokenOnly
                ? `https://exchange.goosedefi.com/#/swap/${tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
                : `https://exchange.goosedefi.com/#/add/${liquidityUrlPathParts}`
            }
          >
            {lpLabel}
          </StyledLinkExternal>
        </Flex>
        <Flex justifyContent="space-between" style={{ width: '100%', padding: '0 10px' }}>
          <Text style={{ color: '#48cae4', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
            {TranslateString(90000, 'Liquidity in Pool')}:
          </Text>
          <Text bold>{totalValueFormated}</Text>
        </Flex>
        <Flex justifyContent="flex-start">
          {' '}
          <Link
            external
            href={
              farm.isTokenOnly
                ? `https://explorer.kcc.io/en/token/${farm.tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
                : `https://explorer.kcc.io/en/token/${farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]}`
            }
            bold={false}
            mt={10}
            mb={10}
          >
            {TranslateString(356, 'View KCC Explorer')}
          </Link>
        </Flex>
      </StyledDetailsCard>
    </FCardContainer>
  )
}

export default FarmCard
