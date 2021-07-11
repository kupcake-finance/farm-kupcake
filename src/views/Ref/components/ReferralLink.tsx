import React, { useState } from 'react'
import { Input, Heading, Button, ToastContainer } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import rot13 from 'utils/encode'

const StyleInput = styled(Input)`
  color: ${(props) => props.theme.colors.primary};
  margin-top: 10px;
  font-size: 15px;
`

const ReferralLink = () => {
  const { account }: { account: string } = useWallet()
  const [toasts, setToasts] = useState([])

  const handleClick = (description = '') => {
    const now = Date.now()
    const randomToast = {
      id: `id-${now}`,
      title: `Copied`,
      description,
      type: 'success',
    }

    setToasts((prevToasts) => [randomToast, ...prevToasts])
  }

  const handleRemove = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((prevToast) => prevToast.id !== id))
  }

  return (
    <div>
      <Heading size="lg">Your Referral Link</Heading>
      <StyleInput type="text" scale="md" value={`https://app.kupcakeswap.finance/?ref=${rot13(account)}`} readOnly />
      <CopyToClipboard
        text={`https://app.kupcakeswap.finance/?ref=${rot13(account)}`}
        onCopy={() => {
          handleClick()
        }}
      >
        <Button variant="primary" mt="8px">
          Copy
        </Button>
      </CopyToClipboard>
      <ToastContainer toasts={toasts} onRemove={handleRemove} />
    </div>
  )
}

export default ReferralLink
