import React, { useState, useEffect } from 'react'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import { useHarvest } from 'hooks/useHarvest'
import { getBalanceNumber } from 'utils/formatBalance'
import styled from 'styled-components'
import useStake from '../../../../hooks/useStake'

interface FarmCardActionsProps {
  earnings?: BigNumber
  pid?: number
  nextHarvest?: number
}

const BalanceAndCompound = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

const HarvestAction: React.FC<FarmCardActionsProps> = ({ earnings, pid, nextHarvest }) => {
  const TranslateString = useI18n()
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)
  const { onStake } = useStake(pid)
  const [canHarvest, setCanHarvest] = useState(false)

  const rawEarningsBalance = getBalanceNumber(earnings)
  const displayBalance = rawEarningsBalance.toLocaleString()

  useEffect(() => {
    const now = new Date()
    setCanHarvest(now.getTime() > nextHarvest * 1000)
  }, [nextHarvest])

  return (
    <Flex mt="10px" justifyContent="space-between" alignItems="center" flexDirection="column">
      <Heading color={rawEarningsBalance === 0 ? 'textDisabled' : 'text'}>{displayBalance}</Heading>
      <BalanceAndCompound>
        {pid === 0 || pid === 1 ? (
          <>
            <Button
              disabled={rawEarningsBalance === 0 || pendingTx || !canHarvest}
              size="sm"
              variant="secondary"
              marginBottom="15px"
              marginTop="15px"
              onClick={async () => {
                setPendingTx(true)
                await onStake(rawEarningsBalance.toString())
                setPendingTx(false)
              }}
            >
              {TranslateString(999, 'Compound')}
            </Button>
            <Button
              size="sm"
              variant="secondary"
              marginBottom="15px"
              marginTop="15px"
              disabled={rawEarningsBalance === 0 || pendingTx || !canHarvest}
              onClick={async () => {
                setPendingTx(true)
                await onReward()
                setPendingTx(false)
              }}
            >
              {TranslateString(999, 'Harvest')}
            </Button>
          </>
        ) : (
          <Button
            disabled={rawEarningsBalance === 0 || pendingTx || !canHarvest}
            onClick={async () => {
              setPendingTx(true)
              await onReward()
              setPendingTx(false)
            }}
          >
            {TranslateString(999, 'Harvest')}
          </Button>
        )}
      </BalanceAndCompound>
    </Flex>
  )
}

export default HarvestAction
