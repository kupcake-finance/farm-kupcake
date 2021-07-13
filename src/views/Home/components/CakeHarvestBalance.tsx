import React from 'react'
import { Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import CardValue from './CardValue'

const CakeHarvestBalance = ({ earningsSum }) => {
  const TranslateString = useI18n()
  const { account } = useWallet()

  if (!account) {
    return (
      <Text color="#1d1d1f" style={{ lineHeight: '28px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return <CardValue value={earningsSum} fontSize="28px" />
}

export default CakeHarvestBalance
