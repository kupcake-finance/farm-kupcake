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
  max-width: 2500px;
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
`

const StyledElement = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
`

export default function Menu() {
  return (
    <>
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
          {/* <StyledA href="https://kupcakeswap.finance/landing">Home</StyledA> */}
          <StyledA href="https://presale.kupcakeswap.finance">Presale</StyledA>
          <StyledElement>
            <Link to="roadmap" spy="true" smooth="true">
              Roadmap
            </Link>
          </StyledElement>
          <StyledA href="/toto">Documentation</StyledA>
          {/* <StyledA href="/toto">Updates</StyledA>
            <StyledA href="/toto">F.A.Q</StyledA> */}
        </Flex>

        <Flex justify-items="space-between">
          <CustomizedMenus />

          <Flex alignItems="center">
            <StyledA href="https://twitter.com/KupcakeSwap" target="_blank">
              <IconImage src="/images/common/twitter.svg" alt="Twitter" />
            </StyledA>
          </Flex>
        </Flex>
      </MenuContainer>
    </>
  )
}
