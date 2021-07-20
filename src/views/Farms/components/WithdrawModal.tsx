import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Button, Modal } from '@pancakeswap-libs/uikit'
import ModalActions from 'components/ModalActions'
import TokenInput from 'components/TokenInput'
import useI18n from 'hooks/useI18n'
import { getFullDisplayBalance } from 'utils/formatBalance'

interface WithdrawModalProps {
  max: BigNumber
  onConfirm: (amount: string) => void
  onDismiss?: () => void
  tokenName?: string
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

const StyledButtonRed = styled(StyledButton)`
  background-color: #ff629a;

  &:hover {
    border: 2px solid #ff629a !important;
    color: #ff629a !important;

    & > svg,
    & > svg > * {
      fill: #ff629a;
    }
  }
`

const WithdrawModal: React.FC<WithdrawModalProps> = ({ onConfirm, onDismiss, max, tokenName = '' }) => {
  const [val, setVal] = useState('')
  const [pendingTx, setPendingTx] = useState(false)
  const TranslateString = useI18n()
  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max)
  }, [max])

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value)
    },
    [setVal],
  )

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
  }, [fullBalance, setVal])

  return (
    <Modal title={`Withdraw ${tokenName}`} onDismiss={onDismiss}>
      <TokenInput
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        value={val}
        max={fullBalance}
        symbol={tokenName}
      />
      <ModalActions>
        <StyledButtonRed variant="secondary" onClick={onDismiss}>
          {TranslateString(462, 'Cancel')}
        </StyledButtonRed>
        <StyledButton
          disabled={pendingTx}
          onClick={async () => {
            setPendingTx(true)
            await onConfirm(val)
            setPendingTx(false)
            onDismiss()
          }}
        >
          {pendingTx ? TranslateString(488, 'Pending Confirmation') : TranslateString(464, 'Confirm')}
        </StyledButton>
      </ModalActions>
    </Modal>
  )
}

export default WithdrawModal
