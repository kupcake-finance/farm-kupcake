import React from 'react'
import { Flex, Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCardBody = styled(CardBody)`
  width: 100%;
`

const StyledCakeStats = styled(Card)`
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.99);
  border-radius: 30px;
  margin-top: 0px;
  box-shadow: 0px 5px 10px #9f9f9f;
  border: 7px solid white;
  transition: all 0.2s ease-in-out;
  background-image: url('/images/common/cupcake-analyst.png');
  background-repeat: no-repeat;
  background-size: 30%;
  background-position-x: left;
  background-position-y: bottom;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
    transform: translate3d(0px, -1px, 0px);
  }
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-around;
  margin-bottom: 8px;
`
const CenterHeading = styled(Heading)`
  text-align: center;
`

const RightText = styled(Text)`
  text-align: left;
`

const RowContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-around;

  ${({ theme }) => theme.mediaQueries.xs} {
    width: 100%;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    width: 50%;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 33%;
  }
`

const LabelContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * {
    margin-bottom: 10px;
    /* font-size: 17px; */
  }
`

const ValuesContainer = styled.div`
  margin-top: 15px;
  flex-direction: column;
  display: flex;
  align-items: flex-end;

  & > * {
    margin-bottom: 10px;
    /* font-size: 17px; */
  }
`

const SmallHeading = styled(Heading)`
  color: #86868b !important;
  font-size: 30px;
  margin-bottom: 0;
`

const BigHeading = styled(Heading)`
  font-family: 'M PLUS Rounded 1c', sans-serif !important;
  font-weight: 800;
  color: #48cae4 !important;
  font-size: 56px !important;

  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 42px !important;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 56px !important;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 56px !important;
  }
`

const MarginLink = styled.a`
  margin-top: -5px;
  margin-bottom: 50px;

  & > * {
    font-size: 20px;
  }
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const farms = useFarms()
  const eggPrice = usePriceCakeBusd()
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const cakeSupply = getBalanceNumber(circSupply)
  const marketCap = eggPrice.times(circSupply)

  let eggPerBlock = 0
  if (farms && farms[0] && farms[0].eggPerBlock) {
    eggPerBlock = new BigNumber(farms[0].eggPerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }

  return (
    <StyledCakeStats>
      <StyledCardBody>
        <Flex flexDirection="column" alignItems="center">
          <BigHeading size="xl" mb="10px" color="#48cae4">
            KUP ANALYTICS
          </BigHeading>

          <MarginLink href="https://explorer.kcc.io/en/address/0x98a96f0db2185a9462c0cedd1a6259955fff7353">
            <Text color="#ff629a">{TranslateString(999, 'See on KCC Explorer')}</Text>
          </MarginLink>
        </Flex>
        <RowContainer>
          <LabelContainer>
            <RightText fontSize="25px" color="#48cae4">
              {TranslateString(10005, 'Market Cap')}
            </RightText>

            <Text fontSize="25px" color="#48cae4">
              {TranslateString(536, 'Total Minted')}
            </Text>

            <Text fontSize="25px" color="#48cae4">
              {TranslateString(538, 'Total Burned')}
            </Text>

            <Text fontSize="25px" color="#48cae4">
              {TranslateString(123546, 'Supply')}
            </Text>

            <Text fontSize="25px" color="#48cae4">
              {TranslateString(123456, 'KUP/block')}
            </Text>
          </LabelContainer>

          <ValuesContainer>
            <CardValue fontSize="25px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" color="#ff629a" />

            {totalSupply && (
              <CardValue fontSize="25px" value={getBalanceNumber(totalSupply)} decimals={0} color="#ff629a" />
            )}

            <CardValue fontSize="25px" value={getBalanceNumber(burnedBalance)} decimals={0} color="#ff629a" />

            {cakeSupply && <CardValue fontSize="25px" value={cakeSupply} decimals={0} color="#ff629a" />}

            <CardValue fontSize="25px" value={eggPerBlock} decimals={0} color="#ff629a" />
          </ValuesContainer>
        </RowContainer>
      </StyledCardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
