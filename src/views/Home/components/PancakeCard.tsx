import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const StyledPancakeCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  min-height: 200px;
  background-image: url('/images/banners/pancake.png');
  background-size: cover;
  background-position: center;
  padding: 0 10px;

  &:hover {
    background-image: url('/images/banners/pancake-hover.png');
  }

  &:hover h2 {
    color: #0d192a;
  }
`

const Link = styled.a`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

const PancakeCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledPancakeCard>
      <Link
        href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x98899133e0dBc6797925391B8125bC9001c261A4"
        target="_blank"
      />
      <CardBody>
        <Heading size="md" mb="24px">
          {TranslateString(999, 'Swap on Pancake')}
        </Heading>
      </CardBody>
    </StyledPancakeCard>
  )
}

export default PancakeCard
