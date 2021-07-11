import BigNumber from 'bignumber.js'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Modal, Heading } from '@pancakeswap-libs/uikit'
import Countdown from 'react-countdown'
import Container from 'components/layout/Container'
import useI18n from 'hooks/useI18n'

interface DepositModalProps {
  onDismiss?: () => void
  tokenName?: string
  harvestInterval?: number
  nextHarvestUntil?: BigNumber
}

const StyleContainer = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
`

const TimeModal: React.FC<DepositModalProps> = ({ onDismiss, tokenName = '', harvestInterval, nextHarvestUntil }) => {
  const TranslateString = useI18n()
  const [harvestUntil, setHarvestUntil] = useState(Number)

  useEffect(() => {
    const until = new BigNumber(nextHarvestUntil).toNumber() * 1000
    setHarvestUntil(until)
  }, [nextHarvestUntil])

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
        <Heading as="h1" size="xl" mb="20px" color="success">
          Harvest Available
        </Heading>
      )
    }

    return (
      <Heading as="h1" size="xl" mb="20px" color="secondary">
        {hours}:{minutes}:{seconds}
      </Heading>
    )
  }

  return (
    <Modal title={`${TranslateString(10009, 'Harvest In')}`} onDismiss={onDismiss}>
      <StyleContainer>
        {harvestUntil ? <Countdown date={harvestUntil} renderer={renderer} /> : null}
        <Heading as="h2" size="sm" mb="5px">
          Pool: {tokenName}
        </Heading>
        <Heading as="h2" size="sm" mb="5px">
          Harvest Lockup: {harvestInterval / 3600} Hours(s)
        </Heading>
      </StyleContainer>
    </Modal>
  )
}

export default TimeModal
