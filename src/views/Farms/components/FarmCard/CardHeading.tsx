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
}

const CardImage = styled.img`
  margin-bottom: 16px;
  margin: 0 auto;
`

const Wrapper = styled(Flex)`
  flex-direction: column;
  svg {
    margin-right: 0.25rem;
  }
`

const MultiplierTag = styled(Tag)`
  position: absolute;
  top: 0px;
  right: -20px;
  min-width: 35px;
  background-color: transparent;
  margin: 1px solid #333 !important;
  color: #fff;
  background-color: #48cae4;
  border-color: #48cae4;
  display: flex;
  font-size: 18px;
  justify-content: flex-end;
`

const Relative = styled.div`
  position: relative;
  margin: 0 auto;
`

const HidingBlock = styled.div`
  position: absolute;
  bottom: 0;
  left: 20px;
  width: 90%;
  height: 60px;
  background-color: #f2f2f2;
  border-top: 1px solid #dadada;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({ lpLabel, multiplier, farmImage, tokenSymbol, depositFee }) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <Relative>
        {/* <MultiplierTag>{multiplier}</MultiplierTag> */}
        <CardImage src={`/images/farms/${farmImage}.png`} alt={tokenSymbol} height={256} />
        <HidingBlock />
      </Relative>
      <Flex flexDirection="column" alignItems="center">
        <Heading mb="14px">{lpLabel}</Heading>
        {/* <Flex justifyContent="center">{depositFee === 0 ? <NoFeeTag /> : null}</Flex> */}
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
