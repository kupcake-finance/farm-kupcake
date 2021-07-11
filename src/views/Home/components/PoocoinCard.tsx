import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading } from '@pancakeswap-libs/uikit'
import IFrame from 'views/Trade'
import useI18n from 'hooks/useI18n'

const StyledPoocoinCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  min-height: 376px;
  border: 1px solid rgba(133, 133, 133, 0.3);
  background: #0f2943;
  box-shadow: 0 0 10px #000;
`

const PoocoinIframe = styled(IFrame)`
  height: 100px;
`

const PoocoinCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledPoocoinCard>
      <CardBody>
        <Heading size="xl" mb="35px">
          {TranslateString(999, 'Poocoin Trade')}
        </Heading>
        <>
          <PoocoinIframe
            url="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xa874fa1A7a9C8696b95180646ccbC8ca6B4512d3"
            title="test"
          />
        </>
      </CardBody>
    </StyledPoocoinCard>
  )
}

export default PoocoinCard
