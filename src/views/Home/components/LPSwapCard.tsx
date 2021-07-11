import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useTotalValue } from '../../../state/hooks'
import LPSwapIFrame from './LPSwapIFrame'

const StyledLPSwapCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  min-height: 376px;
  border: 1px solid rgba(133, 133, 133, 0.3);
  background: #0f2943;
  box-shadow: 0 0 10px #000;
`

const StyledHeading = styled(Heading)`
  color: #fff;
`

const LPSwapCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue()
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledLPSwapCard>
      <CardBody>
        <StyledHeading size="xl" mb="24px">
          {TranslateString(999, 'LP Maker')}
        </StyledHeading>
        <>
          <LPSwapIFrame
            url="https://lp-swap.io/embed?from=single-wallet-0xe9e7cea3dedca5984780bafc599bd69add087d56&to=lpPcsV2-beefy-0xb26642B6690E4c4c9A6dAd6115ac149c700C7dfE&mode=dark&referral="
            title="test"
          />
        </>
      </CardBody>
    </StyledLPSwapCard>
  )
}

export default LPSwapCard
