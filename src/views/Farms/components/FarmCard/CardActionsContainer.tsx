import React, { useMemo, useState, useCallback } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { provider } from 'web3-core'
import { getContract } from 'utils/erc20'
import { Button, Flex, Text } from '@pancakeswap-libs/uikit'
import { Farm } from 'state/types'
import { useFarmFromPid, useFarmFromSymbol, useFarmUser } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import UnlockButton from 'components/UnlockButton'
import { useApprove } from 'hooks/useApprove'
import StakeAction from './StakeAction'
import HarvestAction from './HarvestAction'

const Action = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
`
export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

interface FarmCardActionsProps {
  farm: FarmWithStakedValue
  ethereum?: provider
  account?: string
}

const StyledButton = styled(Button)`
  font-family: 'Roboto', sans-serif !important;
  background-color: #48cae4;
  margin-right: 5px;
  height: 50px;
  font-weight: 600;
  max-width: 300px;
  box-shadow: none;
  transition: all 0.2s ease-in-out;
  border: 2px solid #fff !important;

  & > svg,
  & > svg > * {
    fill: #fff;
  }

  &:hover {
    color: #48cae4;
    background-color: #fff;
    border: 2px solid #48cae4 !important;

    & > svg,
    & > svg > * {
      fill: #48cae4;
    }
  }

  &:focus {
    box-shadow: none !important;
  }

  &:active {
    background-color: #fff;
  }
`

const CardActions: React.FC<FarmCardActionsProps> = ({ farm, ethereum, account }) => {
  const TranslateString = useI18n()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { pid, lpAddresses, tokenAddresses, isTokenOnly, depositFeeBP } = useFarmFromPid(farm.pid)
  const { allowance, tokenBalance, stakedBalance, earnings } = useFarmUser(pid)
  const lpAddress = lpAddresses[process.env.REACT_APP_CHAIN_ID]
  const tokenAddress = tokenAddresses[process.env.REACT_APP_CHAIN_ID]
  const lpName = farm.lpSymbol.toUpperCase()
  const isApproved = account && allowance && allowance.isGreaterThan(0)

  const lpContract = useMemo(() => {
    if (isTokenOnly) {
      return getContract(ethereum as provider, tokenAddress)
    }
    return getContract(ethereum as provider, lpAddress)
  }, [ethereum, lpAddress, tokenAddress, isTokenOnly])

  const { onApprove } = useApprove(lpContract)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove])

  const renderApprovalOrStakeButton = () => {
    return isApproved ? (
      <StakeAction
        stakedBalance={stakedBalance}
        tokenBalance={tokenBalance}
        tokenName={lpName}
        pid={pid}
        depositFeeBP={depositFeeBP}
      />
    ) : (
      <StyledButton mt="8px" fullWidth disabled={requestedApproval} onClick={handleApprove}>
        Approve {lpName} Contract
      </StyledButton>
    )
  }

  return (
    <Action>
      <Flex flexDirection="column" alignItems="center" justifyContent="center" mb={20}>
        <Flex>
          <Text bold textTransform="uppercase" color="secondary" fontSize="14px" pr="3px">
            {/* TODO: Is there a way to get a dynamic value here from useFarmFromSymbol? */}
            KUP
          </Text>
          <Text bold textTransform="uppercase" color="textSubtle" fontSize="14px" mb="5px">
            {TranslateString(999, 'Earned')}
          </Text>
        </Flex>

        <HarvestAction earnings={earnings} pid={pid} />

        <Flex mb='-10px' mt='10px'>
          <Text bold textTransform="uppercase" color="secondary" fontSize="12px" pr="3px">
            {lpName}
          </Text>
          <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
            {TranslateString(999, 'Staked')}
          </Text>
        </Flex>
      </Flex>
      {!account ? <UnlockButton mt="0px" fullWidth /> : renderApprovalOrStakeButton()}
    </Action>
  )
}

export default CardActions
