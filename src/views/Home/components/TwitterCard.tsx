import React from 'react'
import { Flex, Text, Card, CardBody, Heading } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import useI18n from 'hooks/useI18n'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 40px;
  /* max-width: 1200px; */
  margin-left: auto;
  margin-right: auto;
  background-color: #eff9fb;
  padding-top: 30px;
`

const SmallHeading = styled(Heading)`
  color: #86868b !important;
  font-size: 30px;
  margin-bottom: 0;
`

const BigHeading = styled(Heading)`
  color: #333 !important;
  font-size: 56px !important;
`

const MarginLink = styled.a`
  margin-top: -5px;
  margin-bottom: 50px;

  & > * {
    font-size: 20px;
  }
`

const TwitterCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledTwitterCard>
      <CardBody>
        <Flex flexDirection="column" alignItems="center">
          <SmallHeading size="md" mb="24px" color="#fff">
            {TranslateString(999, 'TWITTER')}
          </SmallHeading>
          <BigHeading size="xl" mb="10px" color="#fff">
            {TranslateString(999, 'Our most exciting news.')}
          </BigHeading>

          <MarginLink href="https://twitter.com/">
            <Text color="textSubtle">{TranslateString(999, 'Follow Us >')}</Text>
          </MarginLink>
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'vardump_die',
            }}
            options={{
              allowtransparency: 'true',
              height: '765',
              maxHeight: '600',
              chrome: 'noheader, nofooter, noscrollbar, transparent',
              width: '1200px',
              theme: 'light',
            }}
          />
        </Flex>
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
