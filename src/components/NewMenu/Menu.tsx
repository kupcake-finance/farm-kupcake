import React, { useRef, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { withStyles } from '@material-ui/core/styles'
import { Button, Flex, Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import UIMenu from '../Menu'
import CustomizedMenus from './CustomizedMenus'
import DocsMenu from './DocsMenu'
import MobileMenu from './MobileMenu'
import YieldMenu from './YieldMenu'
import DexMenu from './DexMenu'
// import MetamaskMenu from './MetamaskMenu'

const MenuContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 65px;
  background: white;
  box-shadow: 0 0 10px #3c3c3c;
  padding: 25px;

  ${({ theme }) => theme.mediaQueries.xs} {
    display: none;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    position: fixed;
    z-index: 10;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
    position: fixed;
    z-index: 10;
  }

  & > a > img {
    max-height: 54px;
  }
`

const AlertContainer = styled.div`
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 65px;
  background: #fe2222;
  flex-direction: column;
  box-shadow: 0 0 10px #3c3c3c;
  margin-top: 65px;

  ${({ theme }) => theme.mediaQueries.xs} {
    /* display: none; */
  }
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    position: fixed;
    z-index: 9;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
    position: fixed;
    z-index: 9;
  }

  & > a > img {
    max-height: 54px;
  }
`

const MobileMenuContainer = styled.div`
  ${({ theme }) => theme.mediaQueries.xs} {
    display: flex;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    display: none !important;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    display: none !important;
  }
`

const IconImage = styled.img`
  width: 24px;
`

const StyledA = styled.a`
  margin-left: 10px;
  margin-right: 10px;
  font-weight: 500;
  font-size: 18px;

  & > span {
    font-size: 12px;
    vertical-align: top;
    color: #ff629a;
  }

  & > img {
    max-height: 24px;
  }

  &:hover {
    color: #ff629a !important;
  }
`

const StyledElement = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
`

const SmallImage = styled.img`
  max-height: 24px;
  margin-right: 10px;
`

const RobotoButton = styled(Button)`
  font-family: 'Roboto', sans-serif;
  /* width: 300px; */
  font-weight: 500;
  font-size: 18px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.5) !important;
  border: none;
  box-shadow: 0 0 10px #ff629a;
  border-radius: 60px;
  /* font-family: 'Gloria Hallelujah', cursive; */
  color: #48cae4;
  transition: all 0.5s ease;
  padding: 3px 10px;

  ${({ theme }) => theme.mediaQueries.xs} {
    margin: 10px auto;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0px auto;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0px auto;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.5) !important;
    border-color: white !important;
    box-shadow: 0 0 35px #ff629a;
  }

  & > span {
    font-family: 'Gloria Hallelujah', cursive;
    margin-left: 6px;
    font-weight: 600;
    color: #ff629a;
  }
`

const LinksContainer = styled(Flex)`
  width: 90%;
  margin: 0 auto;
  justify-content: center;
`
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 1400px;
  background-image: url('/images/common/farms-bg-shady.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
`

const WebContainer = styled.div``

const AlertText = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  font-size: 25px;
  color: #fff;

  & > span {
    font-size: 13px;
  }
`

export default function Menu() {
  const location = useLocation()

  const setPathName = () => {
    const shortname = location.pathname.substring(0, 6)

    return shortname === '/farms' || shortname === '/pools'
      ? '/images/common/farms-bg-shady.png'
      : '/images/common/landing-bg-shady.png'
  }
  return (
    <>
      <Background style={{ backgroundImage: `url(${setPathName()})` }} />
      <MobileMenuContainer>
        <MobileMenu />
      </MobileMenuContainer>
      <MenuContainer>
        <>
          <a href="/">
            <img src="/images/common/logo-ku.png" alt="logo" />
          </a>
        </>
        <LinksContainer>
          <StyledA href="https://kupcakeswap.finance">Home</StyledA>
          <StyledA href="https://presale.kupcakeswap.finance">Presale</StyledA>
          {/* <StyledA href="/swap">Swap</StyledA> */}
          {/* <StyledA href="/liquidity">Liquidity</StyledA> */}
          {/* <StyledA href="/farms">Farms</StyledA> */}
          {/* <StyledA href="/pools">Pools</StyledA> */}
          <DexMenu />
          <YieldMenu />
          <DocsMenu />
          <CustomizedMenus />
        </LinksContainer>

        {/* <Flex justify-items="space-between" alignItems="center">
          <RobotoButton>
            <SmallImage src="/images/common/logo.png" alt="token" />
            $00,00
          </RobotoButton>
        </Flex> */}
        <WebContainer>
          <UIMenu />
        </WebContainer>
      </MenuContainer>
      <AlertContainer>
        <AlertText>
          ⚠️ Beta Release on KCC Testnet ⚠️
          <span>Connect to Testnet to try Kupcakeswap out.</span>
        </AlertText>
      </AlertContainer>
    </>
  )
}
