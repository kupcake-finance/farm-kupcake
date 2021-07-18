import React from 'react'
import styled from 'styled-components'
import { Button, useWalletModal } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'

const RobotoButton = styled(Button)`
  position: relative !important;
  font-family: 'Roboto', sans-serif;
  max-width: 40%;
  min-width: 200px;
  font-weight: 500;
  font-size: 20px;
  height: 50px;
  background-color: rgba(255, 255, 255, 0) !important;
  border: none;
  box-shadow: 0 0 10px #ff629a;
  border-radius: 60px;
  /* font-family: 'Gloria Hallelujah', cursive; */
  color: #48cae4;
  transition: all 0.5s ease;
  padding: 0 30px;

  ${({ theme }) => theme.mediaQueries.xs} {
    max-width: 85%;
    padding: 0 10px;
    margin: 10px auto;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 45%;
    margin: 10px auto;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: 45%;
    margin: 10px auto;
  }

  & > img {
    max-height: 40px;
    margin: 0 5px;
  }

  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus,
  &:visited {
    background-color: rgba(255, 255, 255, 0.5) !important;
    border-color: transparent !important;
    box-shadow: 0 8px 25px #ff629a !important;
    transform: translate3d(0px, -3px, 0px);
  }

  & > span {
    font-family: 'Gloria Hallelujah', cursive;
    margin-left: 6px;
    font-weight: 600;
    color: #ff629a;
  }
`

const MetaRobotoButton = styled(RobotoButton)`
  width: 190px;
  text-align: right;
  justify-content: flex-end;
  /* padding-left: 55px; */
  box-shadow: 0 0 15px #ff9e62;

  & > div {
    left: 0;
    background-image: url(/images/common/metamask.png) !important;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 60px;
    background-size: 20%;
    opacity: 0.7;
    background-repeat: no-repeat;
    overflow: hidden;
    background-position-x: 10px;
    background-position-y: center;
  }

  &:hover,
  &:focus {
    box-shadow: 0 0 35px #ff9e62 !important;
  }

  &:focus {
    & > div {
      opacity: 1;
    }
  }
`

const UnlockButton = (props) => {
  const TranslateString = useI18n()
  const { connect, reset } = useWallet()
  const { onPresentConnectModal } = useWalletModal(connect, reset)

  return (
    <MetaRobotoButton onClick={onPresentConnectModal} {...props}>
      <div />
      {TranslateString(292, 'Unlock Wallet')}
    </MetaRobotoButton>
  )
}

export default UnlockButton
