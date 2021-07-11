import React from 'react'
import styled from 'styled-components'
import { Flex, Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
  background-size: 500px;
  background-repeat: no-repeat;
  /* background-image: url('/images/common/vault-bg.png'); */
  background-position-x: left;
  background-position-y: center;
  /* padding-bottom: 600px; */
  background-color: #48cae4;
  justify-content: center;
  padding-top: 30px;

  & > * {
    text-align: center;
  }
`

const SmallHeading = styled(Heading)`
  color: #86868b !important;
  font-size: 30px;
  margin-bottom: 0;
`

const BigHeading = styled(Heading)`
  color: #fff !important;
  font-size: 56px !important;
`

const MarginLink = styled.a`
  margin-top: -5px;
  margin-bottom: 10px;

  & > * {
    font-size: 20px;
  }
`

const TotalValueLockedCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue()
  // const tvl = totalValue.toFixed(2);

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Flex flexDirection="column">
          <BigHeading size="lg" mb="24px" color="#fff">
            {TranslateString(999, 'Total Value Locked')}
          </BigHeading>
          <>
            {/* <Heading size="xl">{`$${tvl}`}</Heading> */}
            {/* <Heading size="xl"> */}
            {/* </Heading> */}
            <CardValue value={totalValue.toNumber()} prefix="$" decimals={2} color="#fff" fontSize="40px" />
          </>
        </Flex>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
