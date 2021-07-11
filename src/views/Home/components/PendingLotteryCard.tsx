import React from 'react'
import styled from 'styled-components'
import { Button, Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap-libs/uikit'
import IFrame from 'views/Trade'
import useI18n from 'hooks/useI18n'
import { useGetStats } from 'hooks/api'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledLotteryCard = styled(Card)`
  background-image: url('/images/common/ticket-bg.png');
  background-repeat: no-repeat;
  background-position: top right;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 22px;
`

const PendingLotteryCard = () => {
  const TranslateString = useI18n()
  // const data = useGetStats()
  const totalValue = useTotalValue()
  // const tvl = totalValue.toFixed(2);

  const BottomButton = styled(Button)`
    position: absolute;
    width: 92%;
    bottom: 23px;
    left: 23px;
}
`

  return (
    <StyledLotteryCard>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(999, 'SIMPLE Lottery')}
        </Heading>
        <CardImage src="/images/common/ticket.png" alt="cake logo" width={64} height={64} />
        <Block>
          <Label>{TranslateString(1999, 'Stay Tuned !')}</Label>
        </Block>
        <BottomButton id="coming-soon" disabled={0 < 1} fullWidth>
          Coming Soon...
        </BottomButton>
      </CardBody>
    </StyledLotteryCard>
  )
}

export default PendingLotteryCard
