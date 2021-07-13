import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useCountUp } from 'react-countup'
import { Text } from '@pancakeswap-libs/uikit'

interface CardValueProps {
  value: number
  decimals?: number
  fontSize?: string
  prefix?: string
  color?: string
}

const StyledText = styled(Text)`
  text-align: center;
`

const CardValue: React.FC<CardValueProps> = ({ value, decimals, fontSize = '40px', prefix, color = '#333' }) => {
  const { countUp, update } = useCountUp({
    start: 0,
    end: value,
    duration: 1,
    separator: ',',
    decimals:
      // eslint-disable-next-line no-nested-ternary
      decimals !== undefined ? decimals : value < 0 ? 4 : value > 1e5 ? 0 : 3,
  })

  const updateValue = useRef(update)

  useEffect(() => {
    updateValue.current(value)
  }, [value, updateValue])

  return (
    <StyledText bold fontSize={fontSize} color={color}>
      {prefix}
      {countUp}
    </StyledText>
  )
}

export default CardValue
