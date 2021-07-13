import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'

const StyledPage = styled(Page)`
  z-index: 100;
`

const StyledNotFound = styled.div`
  padding-top: 200px;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: flex-start;
  z-index: 100;
`
const RobotoButton = styled.a`
  position: relative !important;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  max-width: 45%;
  min-width: 200px;
  font-weight: 500;
  font-size: 22px;
  height: 30px;
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

const StyledHeading = styled(Heading)`
  font-family: 'M PLUS Rounded 1c', sans-serif !important;
  font-weight: 800;
  font-size: 160px;
  color: #48cae4;
  text-shadow: 10px 0 0 #fff, -10px 0 0 #fff, 0 10px 0 #fff, 0 -10px 0 #fff, 8px 8px #fff, -8px -8px 0 #fff,
    8px -8px 0 #fff, -8px 8px 0 #fff;

  & > span {
    color: #ff629a;
  }
`

const NotFound = () => {
  const TranslateString = useI18n()

  return (
    <StyledPage>
      <StyledNotFound>
        <LogoIcon width="328px" mb="-80px" />
        <StyledHeading size="xxl">
          4<span>0</span>4
        </StyledHeading>
        <RobotoButton href="/">
          Back <span>Home</span>
        </RobotoButton>
      </StyledNotFound>
    </StyledPage>
  )
}

export default NotFound
