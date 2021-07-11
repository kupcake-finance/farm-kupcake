import React from 'react'
import styled from 'styled-components'
import { Heading, Card, CardHeader, CardBody } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import UnlockButton from 'components/UnlockButton'
import Page from 'components/layout/Page'
import ReferralLink from './components/ReferralLink'
import TotalReferralCount from './components/TotalReferralCount'

const Con = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`

const StyledCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const Actions = styled.div`
  margin-top: 24px;
`

const StyleHeading = styled(Heading)`
  margin-top: 15px;
`

const Referral: React.FC = () => {
  const { account } = useWallet()

  const StyledHeading = styled(Heading)`
    color: ${(props) => props.theme.colors.primary};
  `

  return (
    <Page>
      <Con>
        <Heading size="xl" mb="24px">
          Better Together
        </Heading>
        <StyledCard>
          <CardHeader>
            <StyledHeading size="md">
              SHARE THE SIMPLE&apos;S WIDSOM... <br /> <br /> ...and earn 5% of your friends income <br /> FOR LIFE!
            </StyledHeading>
          </CardHeader>
          <CardBody>
            <Actions>
              {account ? (
                <div>
                  <ReferralLink />
                  <TotalReferralCount />
                </div>
              ) : (
                <div>
                  <UnlockButton />
                  <StyleHeading size="md">Unlock your wallet and get your unique referral link</StyleHeading>
                </div>
              )}
            </Actions>
          </CardBody>
        </StyledCard>
      </Con>
    </Page>
  )
}

export default Referral
