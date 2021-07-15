import React, { useMemo, useState, useCallback } from 'react'
import styled from 'styled-components'
import { provider } from 'web3-core'
import { getContract } from 'utils/erc20'
import { Link } from 'react-router-dom'
import {
  Button,
  Flex,
  Heading,
  IconButton,
  AddIcon,
  MinusIcon,
  useModal,
  useWalletModal,
} from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Farm } from 'state/types'
import { useFarmFromPid, useFarmUser } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import { useApprove } from 'hooks/useApprove'
import useStake from 'hooks/useStake'
import useUnstake from 'hooks/useUnstake'
import { getBalanceNumber } from 'utils/formatBalance'
import DepositModal from '../DepositModal'
import WithdrawModal from '../WithdrawModal'

interface FarmCardActionsProps {
  farm: Farm
  ethereum?: provider
  account?: string
}

const GetOrStakeAction: React.FC<FarmCardActionsProps> = ({ farm, ethereum, account }) => {
  const TranslateString = useI18n()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { pid, lpAddresses, tokenAddresses, isTokenOnly, depositFeeBP } = useFarmFromPid(farm.pid)
  const { allowance, tokenBalance, stakedBalance } = useFarmUser(pid)
  const lpAddress = lpAddresses[process.env.REACT_APP_CHAIN_ID]
  const tokenAddress = tokenAddresses[process.env.REACT_APP_CHAIN_ID]
  const lpName = farm.lpSymbol.toUpperCase()
  const isApproved = account && allowance && allowance.isGreaterThan(0)
  const { onStake } = useStake(pid)
  const { onUnstake } = useUnstake(pid)
  const rawStakedBalance = getBalanceNumber(stakedBalance)
  const displayBalance = rawStakedBalance.toLocaleString()
  const { connect, reset } = useWallet()

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

  const { onPresentConnectModal } = useWalletModal(connect, reset)
  const [onPresentDeposit] = useModal(
    <DepositModal max={tokenBalance} onConfirm={onStake} tokenName={lpName} depositFeeBP={depositFeeBP} />,
  )
  const [onPresentWithdraw] = useModal(<WithdrawModal max={stakedBalance} onConfirm={onUnstake} tokenName={lpName} />)

  const zapUrl = `/zap?to=lpPcsV2-wallet-${lpAddress}&slippage=50`

  return rawStakedBalance === 0 ? (
    <>
      {!farm.isTokenOnly && (
        <Button mt="8px" fullWidth variant="whiteblue" as={Link} to={zapUrl}>
          {TranslateString(999, 'Get LP')}
        </Button>
      )}
      {
        // eslint-disable-next-line no-nested-ternary
        !account ? (
          <Button mt="8px" fullWidth onClick={onPresentConnectModal}>
            {TranslateString(292, 'Unlock Wallet')}
          </Button>
        ) : // eslint-disable-next-line no-nested-ternary
        !isApproved ? (
          <Button mt="8px" fullWidth disabled={requestedApproval} onClick={handleApprove}>
            {TranslateString(999, 'Approve Contract')}
          </Button>
        ) : (
          <Button mt="8px" fullWidth onClick={onPresentDeposit}>
            {TranslateString(999, 'Stake LP')}
          </Button>
        )
      }
    </>
  ) : (
    <>
      <Flex justifyContent="space-between" alignItems="center">
        <Heading color="text">{displayBalance}</Heading>
        <IconButtonWrapper>
          <IconButton onClick={onPresentWithdraw} mr="6px">
            <MinusIcon />
          </IconButton>
          <IconButton onClick={onPresentDeposit}>
            <AddIcon />
          </IconButton>
        </IconButtonWrapper>
      </Flex>
      {!farm.isTokenOnly && (
        <Flex justifyContent="flex-end">
          <Button mt="8px" variant="whiteblue" as={Link} to={zapUrl}>
            {TranslateString(999, 'Get LP')}
          </Button>
        </Flex>
      )}
    </>
  )
}

const IconButtonWrapper = styled.div`
  display: flex;
  svg {
    width: 20px;
  }
`

export default GetOrStakeAction
