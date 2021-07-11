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

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background-size: 625px 451px;
  background-repeat: no-repeat;
  background-image: url('/images/common/stats-bg.png');
  background-position-x: center;
  background-position-y: bottom;
  padding-bottom: 520px;
  background-color: #0c0c0c;
  padding-top: 30px;
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
  text-align: right;
`

const RowContainer = styled.div`
  display: flex;
  max-width: 25%;
  margin: 0 auto;
  justify-content: space-around;
`

const LabelContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & > * {
    margin-bottom: 10px;
    /* font-size: 17px; */
  }
`

const ValuesContainer = styled.div`
  margin-top: 15px;
  flex-direction: column;
  display: flex;

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
  color: #fff !important;
  font-size: 56px !important;
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
  const nativePrice = usePriceCakeBusd()
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0)
  const cakeSupply = getBalanceNumber(circSupply)
  const marketCap = nativePrice.times(circSupply)

  let nativePerBlock = 0
  if (farms && farms[0] && farms[0].nativePerBlock) {
    nativePerBlock = new BigNumber(farms[0].nativePerBlock).div(new BigNumber(10).pow(18)).toNumber()
  }

  return (
    <StyledCakeStats>
      <CardBody>
        <Flex flexDirection="column" alignItems="center">
          <SmallHeading size="md" mb="24px" color="#fff">
            {TranslateString(999, 'SIMPLE STATS')}
          </SmallHeading>
          <BigHeading size="xl" mb="10px" color="#fff">
            {TranslateString(999, 'Token Analytics')}
          </BigHeading>

          <MarginLink href="https://bscscan.com/token/0xf952fc3ca7325cc27d15885d37117676d25bfda6">
            <Text color="textSubtle">{TranslateString(999, 'See on BSC Scan >')}</Text>
          </MarginLink>
        </Flex>
        <RowContainer>
          <LabelContainer>
            <RightText fontSize="25px" color="#06c">
              {TranslateString(10005, 'Market Cap')}
            </RightText>

            <Text fontSize="25px" color="#06c">
              {TranslateString(536, 'Total Minted')}
            </Text>

            <Text fontSize="25px" color="#06c">
              {TranslateString(538, 'Total Burned')}
            </Text>

            <Text fontSize="25px" color="#06c">
              {TranslateString(123546, 'Supply')}
            </Text>

            <Text fontSize="25px" color="#06c">
              {TranslateString(123456, 'SIMPLE/block')}
            </Text>
          </LabelContainer>

          <ValuesContainer>
            <CardValue fontSize="25px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" color="#fff" />

            {totalSupply && (
              <CardValue fontSize="25px" value={getBalanceNumber(totalSupply)} decimals={0} color="#fff" />
            )}

            <CardValue fontSize="25px" value={getBalanceNumber(burnedBalance)} decimals={0} color="#fff" />

            {cakeSupply && <CardValue fontSize="25px" value={cakeSupply} decimals={0} color="#fff" />}

            <CardValue fontSize="25px" value={nativePerBlock} decimals={0} color="#fff" />
          </ValuesContainer>
        </RowContainer>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
