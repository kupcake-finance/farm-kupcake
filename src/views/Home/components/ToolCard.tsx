import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const StyledToolsCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  min-height: 80px;
  max-width: 100%;
  margin-bottom: 25px;
  /* background-image: url('/images/banners/banner-tools.png'); */
  background-size: cover;
  background-position: center;
  padding: 0 10px;
  border: 1px solid rgba(133, 133, 133, 0.3);
  background: #0f2943;
  box-shadow: 0 0 10px #000;
`

const StyledCardBody = styled(CardBody)`
  padding: 0;
`

const StyledHeading = styled(Heading)`
  text-align: center;
  font-size: 37px;
  margin-top: 15px;
`

const ToolsCard = () => {
  const TranslateString = useI18n()

  return (
    <StyledToolsCard>
      <StyledCardBody>
        <StyledHeading size="md" mb="24px">
          {TranslateString(999, 'BSC Widgets (Beta)')}
        </StyledHeading>
      </StyledCardBody>
    </StyledToolsCard>
  )
}

export default ToolsCard
