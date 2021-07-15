import React, { useState, useEffect } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { provider } from 'web3-core'
import { Flex, Text } from '@pancakeswap-libs/uikit'
import { Farm } from 'state/types'
import { useFarmFromPid, useFarmUser } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import HarvestAction from './HarvestAction'
import GetOrStakeAction from './GetOrStakeAction'

const Action = styled.div`
  padding-top: 16px;
`
interface FarmCardActionsProps {
  farm: Farm
  ethereum?: provider
  account?: string
}

const CardActions: React.FC<FarmCardActionsProps> = ({ farm, ethereum, account }) => {
  const TranslateString = useI18n()
  const { pid, userData } = useFarmFromPid(farm.pid)
  const { earnings } = useFarmUser(pid)
  const lpName = farm.lpSymbol.toUpperCase()
  const [nextHarvest, setNextHarvest] = useState(Number)

  useEffect(() => {
    if (userData) {
      const time = new BigNumber(userData.nextHarvestUntil).toNumber()
      setNextHarvest(time)
    }
  }, [userData])

  return (
    <Action>
      <Flex>
        <Text bold textTransform="uppercase" color="#fcfcfc" fontSize="12px" pr="3px">
          {/* TODO: Is there a way to get a dynamic value here from useFarmFromSymbol? */}
          ELEPHANT
        </Text>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          {TranslateString(999, 'Earned')}
        </Text>
      </Flex>
      <HarvestAction earnings={earnings} pid={pid} nextHarvest={nextHarvest} />
      <Flex>
        <Text bold textTransform="uppercase" color="#fcfcfc" fontSize="12px" pr="3px">
          {lpName}
        </Text>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          {TranslateString(999, 'Staked')}
        </Text>
      </Flex>
      <GetOrStakeAction farm={farm} ethereum={ethereum} account={account} />
    </Action>
  )
}

export default CardActions
