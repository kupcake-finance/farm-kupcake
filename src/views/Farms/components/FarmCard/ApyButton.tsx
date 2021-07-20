import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { CalculateIcon, IconButton, useModal, Button } from '@pancakeswap-libs/uikit'
import { Address } from 'config/constants/types'
import ApyCalculatorModal from './ApyCalculatorModal'

export interface ApyButtonProps {
  lpLabel?: string
  cakePrice?: BigNumber
  apy?: BigNumber
  quoteTokenAdresses?: Address
  quoteTokenSymbol?: string
  tokenAddresses: Address
}

const StyledButton = styled(Button)`
  font-family: 'Roboto', sans-serif !important;
  background-color: transparent;
  margin-right: 5px;
  /* height: 50px; */
  padding: 0 !important;
  font-weight: 600;
  box-shadow: none;
  transition: all 0.2s ease-in-out;
  border: 2px solid transparent !important;

  & > svg,
  & > svg > * {
    fill: #48cae4;
  }

  &:hover {
    color: #48cae4;
    background-color: #fff;
    border: 2px solid transparent !important;

    & > svg,
    & > svg > * {
      fill: #ff629a;
    }
  }

  &:focus {
    box-shadow: none !important;
  }

  &:active {
    background-color: #fff;
  }
`
const ApyButton: React.FC<ApyButtonProps> = ({
  lpLabel,
  quoteTokenAdresses,
  quoteTokenSymbol,
  tokenAddresses,
  cakePrice,
  apy,
}) => {
  const [onPresentApyModal] = useModal(
    <ApyCalculatorModal
      lpLabel={lpLabel}
      quoteTokenAdresses={quoteTokenAdresses}
      quoteTokenSymbol={quoteTokenSymbol}
      tokenAddresses={tokenAddresses}
      cakePrice={cakePrice}
      apy={apy}
    />,
  )

  return (
    <StyledButton onClick={onPresentApyModal} variant="text" size="sm" ml="4px">
      <CalculateIcon />
    </StyledButton>
  )
}

export default ApyButton
