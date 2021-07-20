import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const StyledMetamaskCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  min-height: 200px;
  background-image: url('/images/banners/metamask.png');
  background-size: cover;
  background-position: center;
  padding: 0 10px;

  &:hover {
    background-image: url('/images/banners/metamask-hover.png');
  }

  &:hover h2 {
    color: #0d192a;
  }
`

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @param tokenImage
 * @returns {boolean} true if the token has been added, false otherwise
 */
export const registerToken = async (
  tokenAddress: string,
  tokenSymbol: string,
  tokenDecimals: number,
  tokenImage: string,
) => {
  const tokenAdded = await (window as WindowChain).ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: tokenImage,
      },
    },
  })

  return tokenAdded
}

//  Trigger metamask Token add
export const Metamask = ({ children }) => {
  const onMetamaskCard = async () => {
    try {
      const token = await registerToken('0x98899133e0dbc6797925391b8125bc9001c261a4', 'KUP', 18, '#')
    } catch (err) {
      console.error(err)
    }
  }

  return <StyledMetamaskCard onClick={onMetamaskCard}>{children}</StyledMetamaskCard>
}

const MetamaskCard = () => {
  const TranslateString = useI18n()

  return (
    <Metamask>
      <CardBody>
        <Heading size="md" mb="24px">
          {TranslateString(999, 'Add to Metamask')}
        </Heading>
      </CardBody>
    </Metamask>
  )
}

export default MetamaskCard
