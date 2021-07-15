import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@pancakeswap-libs/uikit'
import { Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/common/banner1.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/common/banner1.png');
    background-position: center;
    background-size: cover;
    margin-top: -65px;
    margin-bottom: 55px;
    height: 140px;
    padding-top: 0;
  }
`

const Banner = ({ stakedOnly, setStakedOnly }) => {
  const TranslateString = useI18n()

  return (
    <Wrapper>
      <Heading as="h1" size="xl" mb="24px" color="secondary">
        {TranslateString(576, 'Goose Finance')}
      </Heading>
      <Text>{TranslateString(578, 'Top 3 best DEFI app on Binance Chain.')}</Text>
    </Wrapper>
  )
}

export default Banner

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 32px;

  ${Text} {
    margin-left: 8px;
  }
`
