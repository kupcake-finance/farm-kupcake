import React from 'react'
import styled from 'styled-components'
import { Flex, Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useTotalValue } from '../../../state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  box-shadow: 0px 5px 10px #9f9f9f;
  border: 7px solid white;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
    transform: translate3d(0px, -4px, 0px);
  }

  ${({ theme }) => theme.mediaQueries.xs} {
    margin-top: 30px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 30px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: 110px;
  }
`

const SmallHeading = styled(Heading)`
  color: #86868b !important;
  font-size: 30px;
  margin-bottom: 0;
`

const BigHeading = styled.p`
  font-family: 'M PLUS Rounded 1c', sans-serif !important;
  color: #48cae4;
  font-weight: 600;

  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 30px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 40px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 45px;
  }
`

const StyledCardValue = styled(CardValue)`
  color: #ff629a;
  text-align: center !important;
  width: 100% !important;
  display: flex !important;
  align-items: center !important;
  flex-direction: row !important;
  justify-content: center !important; 
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
          <BigHeading>{TranslateString(999, 'TOTAL VALUE LOCKED')}</BigHeading>
          <>
            {/* <Heading size="xl">{`$${tvl}`}</Heading> */}
            {/* <Heading size="xl"> */}
            {/* </Heading> */}
            <StyledCardValue value={totalValue.toNumber()} prefix="$" decimals={2} color="#ff629a" fontSize="40px" />
          </>
        </Flex>
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
