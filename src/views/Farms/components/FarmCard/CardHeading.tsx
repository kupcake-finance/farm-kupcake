import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image } from '@pancakeswap-libs/uikit'
import { NoFeeTag } from 'components/Tags'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  risk?: number
  depositFee?: number
  farmImage?: string
  tokenSymbol?: string
  isTokenOnly?: boolean
}

const Wrapper = styled(Flex)`
  flex-direction: column;
  svg {
    margin-right: 0.25rem;
  }
`

const Relative = styled.div`
  position: relative;
  width: 100%;
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const StyledImg = styled(Image)`
  z-index: 2;
`

const FullFlex = styled(Flex)`
  width: 100%;
  padding: 0 5px;
`

const StyledNoFeeTag = styled(NoFeeTag)`
  color: #ff629a !important;

  & > svg,
  & > svg > *,
  & > * > svg {
    fill: #ff629a !important;
    color: #ff629a !important;
  }
`
const BoxShadowBlock = styled.div`
  z-index: 6;
  position: absolute;
  left: 67px;
  top: 17px;
  width: 72px;
  height: 72px;
  border-radius: 50px;
  background-color: transparent;
  box-shadow: 6px 0px 7px 0px #323232;
`

const TokenImg = styled.img`
  max-height: 75px;
  margin-bottom: 20px;
`
const TokenLeft = styled(TokenImg)`
  margin-right: -8px;
  z-index: 7;
`
const TokenRight = styled(TokenImg)`
  margin-left: -8px;
  z-index: 5;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  risk,
  farmImage,
  tokenSymbol,
  depositFee,
  isTokenOnly,
}) => {
  const getSplitToken = () => {
    return lpLabel.split(' ')[0].split('-')
  }

  return (
    <Relative>
      <Wrapper justifyContent="space-between" alignItems="center" mb="15px" mt="15px">
        {!isTokenOnly ? (
          <Flex justifyContent="center">
            <>
              <BoxShadowBlock />
              <TokenLeft src={`/images/farms/${getSplitToken()[0]}.png`} alt={getSplitToken()[0]} />
            </>
            <TokenRight src={`/images/farms/${getSplitToken()[1]}.png`} alt={getSplitToken()[1]} />
          </Flex>
        ) : (
          <StyledImg src={`/images/farms/${farmImage}.png`} alt={tokenSymbol} width={92} height={92} mb={10} />
        )}
        {/* <Blur /> */}
        <FullFlex flexDirection="column" alignItems="center">
          <Heading mb="10px">{lpLabel}</Heading>
          <FullFlex justifyContent="space-between" mt={20}>
            <StyledNoFeeTag />
            {/* {isCommunityFarm ? <CommunityTag /> : <CoreTag />} */}
            {/* <RiskTag risk={risk} /> */}
            <MultiplierTag variant="secondary">{multiplier}</MultiplierTag>
          </FullFlex>
        </FullFlex>
      </Wrapper>
    </Relative>
  )
}

export default CardHeading
