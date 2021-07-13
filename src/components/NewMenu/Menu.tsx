import React, { useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { withStyles } from '@material-ui/core/styles'
import { Button, Flex, Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import CustomizedMenus from './CustomizedMenus'
import MobileMenu from './MobileMenu'

const MenuContainer = styled.div`
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 65px;
  background: white;
  box-shadow: 0 0 10px #3c3c3c;

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

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 1400px;
  background-image: url('/images/common/landing-bg-shady.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
`

export default function Menu() {
  return (
    <>
      <Background />
      <MobileMenuContainer>
        <MobileMenu />
      </MobileMenuContainer>
      <MenuContainer>
        <>
          <a href="/">
            <img src="/images/common/logo-ku.png" alt="logo" />
          </a>
        </>
        <Flex justify-items="space-around">
          <StyledA href="https://presale.kupcakeswap.finance/">Presale</StyledA>
          <StyledA href="/swap">Swap</StyledA>
          <StyledA href="/farms">Farms</StyledA>
          <StyledElement>
            <StyledA href="https://docs.kupcakeswap.finance/roadmap" target="_blank" rel="noreferrer">
              Roadmap
            </StyledA>
          </StyledElement>
          <StyledA href="https://docs.kupcakeswap.finance" target="_blank" rel="noreferrer">
            Documentation
          </StyledA>
        </Flex>

        <Flex justify-items="space-between">
          <RobotoButton>
            <SmallImage src="/images/common/logo.png" alt="token" />
            $10.50
          </RobotoButton>
          <CustomizedMenus />
        </Flex>
      </MenuContainer>
    </>
  )
}
