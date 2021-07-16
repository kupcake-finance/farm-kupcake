import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image } from '@pancakeswap-libs/uikit'
import { CommunityTag, CoreTag, NoFeeTag, RiskTag } from 'components/Tags'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  risk?: number
  depositFee?: number
  farmImage?: string
  tokenSymbol?: string
}

const Wrapper = styled(Flex)`
  flex-direction: column;
  svg {
    margin-right: 0.25rem;
  }
`

const Relative = styled.div`
  position: relative;
  width:100%;
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`
const Blur = styled.div`
      height: 70px;
    width: 70px;
    background-color: transparent;
    box-shadow: 0 0 30px #000;
    position: absolute;
    border-radius: 100px;
    left: 33px;
    top: 28px;
    z-index: 1;
`

const StyledImg = styled(Image)`
  z-index:2;
`

const FullFlex = styled(Flex)`
  width: 100%;
  padding: 0 5px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  risk,
  farmImage,
  tokenSymbol,
  depositFee,
}) => {
  return (
    <Relative>
    <Wrapper justifyContent="space-between" alignItems="center" mb="15px" mt="15px">
      <StyledImg src={`/images/farms/${farmImage}.png`} alt={tokenSymbol} width={92} height={92} mb={10}/>
        {/* <Blur /> */}
      <FullFlex flexDirection="column" alignItems="center">
        <Heading mb="10px">{lpLabel}</Heading>
        <FullFlex justifyContent="space-between" mt={20}>
          <NoFeeTag />
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
