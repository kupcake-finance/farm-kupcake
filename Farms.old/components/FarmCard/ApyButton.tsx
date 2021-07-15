import React from 'react'
import styled, { keyframes } from 'styled-components'
import BigNumber from 'bignumber.js'
import { Button, CalculateIcon, IconButton, useModal } from '@pancakeswap-libs/uikit'
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

const StyledApy = styled(Button)`
  /* position: absolute; */
  /* left: 10px;
  top: 20px; */
  width: 1px;
  margin-top: -3px;
  background-color: transparent;
  vertical-align: middle;
  box-sizing: border-box;

  & > svg {
    fill: #000 !important;
  }
  &:hover {
    background-color: transparent !important;
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
    <StyledApy onClick={onPresentApyModal} variant="text" size="sm" ml="4px">
      <CalculateIcon />
    </StyledApy>
  )
}

export default ApyButton
