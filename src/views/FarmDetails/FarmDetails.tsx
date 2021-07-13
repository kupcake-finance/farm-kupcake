import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Card, Flex, Heading, Button } from '@pancakeswap-libs/uikit'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { Divider } from '@material-ui/core'
import AlarmOnIcon from '@material-ui/icons/AlarmOn'

const PinkSpan = styled.span`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: #ff629a;
`

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding-top: 50px;
  margin: 0 auto;
`
const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 10px;
`
const BackButton = styled(Button)`
  margin-top: 10px;
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
  border-radius: 15px !important;
  padding: 10px !important;
  height: auto !important;

  &:hover {
    background-color: #e4e4e4 !important;
  }

  & > svg {
    fill: #000;
  }

  & > span {
    font-size: 20px;
    color: #000;
  }
`

const StyledDetailsCard = styled(Card)`
  font-family: 'Roboto', sans-serif;
  position: relative;
  width: 100%;
  max-width: 700px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 30px;
  box-shadow: 0px 5px 10px #9f9f9f;
  border: 7px solid white;
  transition: all 0.2s ease-in-out;
  margin-left: auto;
  margin-right: auto;

  ${({ theme }) => theme.mediaQueries.xs} {
    margin-top: 30px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 30px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: 70px;
  }
`
const MainTitle = styled(Heading)`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  color: #48cae4;
  font-weight: 800;
  margin-top: 5px;

  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 25px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 25px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 25px;
  }

  & > span {
    font-family: 'M PLUS Rounded 1c', sans-serif;
    color: #ff629a;
  }
`

const SubTitle = styled(MainTitle)`
  font-weight: 500;
  margin: 0;
  margin-top: 7px;
  font-family: 'Roboto', sans-serif;
  color: #ff629a;

  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 15px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 18px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 18px;
  }
`

const WhiteSubTitle = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  margin-bottom: 40px;
  margin-top: 25px;

  ${({ theme }) => theme.mediaQueries.xs} {
    color: #48cae4;
    font-size: 35px;
    text-align: center;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 15px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    color: #48cae4;
    font-size: 40px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    color: #fff;
    font-size: 45px;
    background-color: rgba(255, 255, 255, 0);
  }
`

const Relative = styled.div`
  margin: 0 auto;
  position: relative;
  max-width: 2500px;
  padding-bottom: 45px;
`
const TokenImage = styled.img`
  height: 55px;
`

const InfoBanner = styled(Flex)`
  flex-direction: column;
  align-content: flex-start;
  margin-top: 25px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0px 15px #d3d3d3;
  padding: 15px 30px;
`

const BannerTitle = styled.div`
  text-align: center;
  color: #ff629a;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 8px;
`

const BannerSubText = styled.div`
  color: #000;
  font-weight: 300;
  font-size: 15px;
  margin-bottom: 10px;
  text-align: justify;
`

const CardDivider = styled.div`
  width: 90%;
  height: 2px;
  margin: 20px auto 30px auto;
  background-color: #ff629a;
  opacity: 0.3;
`

const FarmingInfoContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #000;
`

const FarmingInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
`

const ContractInfo = styled(FarmingInfo)`
  margin-top: 20px;
  margin-bottom: 5px;
`
const InfoTitle = styled.div`
  color: #48cae4;
  font-weight: 600;
  width: 34%;
`

const ValuesContainer = styled.div`
  display: flex;
  width: 66%;

  ${({ theme }) => theme.mediaQueries.xs} {
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
    align-items: center;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    align-items: center;
  }
`

const ContractValuesContainer = styled(ValuesContainer)`
  margin-top: 20px;
  margin-bottom: -10px;
`

const MidValue = styled.div`
  width: 50%;
  text-align: center;
  ${({ theme }) => theme.mediaQueries.xs} {
    text-align: right;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    text-align: center;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    text-align: center;
  }
`

const RightValue = styled.div`
  width: 50%;
  text-align: right;
  color: #ff629a;
`

const BannerButton = styled(Button)`
  font-family: 'Roboto', sans-serif;
  /* width: 300px; */
  font-weight: 500;
  font-size: 15px;
  height: 35px;
  border: none;
  /* box-shadow: 0 0 10px #ff629a; */
  border-radius: 60px;
  /* font-family: 'Gloria Hallelujah', cursive; */
  transition: all 0.5s ease;
  padding: 20px 15px !important;
  background-color: #48cae4 !important;

  ${({ theme }) => theme.mediaQueries.xs} {
    margin: 10px auto;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0px auto;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0px auto;
  }

  & > span {
    font-family: 'Gloria Hallelujah', cursive;
    margin-left: 6px;
    font-weight: 600;
    color: #ff629a;
  }
`

const ContractValue = styled.div`
  width: 100%;
  text-align: right;
  color: #ff629a;
`

const ConnectOrClaimButton = styled(BannerButton)``

const DepositWithdrawContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 90%;
  color: #000;
`

const DepositTopElements = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`

const DepositWithdrawToggle = styled.div`
  display: flex;

  & > span {
    margin: 0 10px;
    font-size: 17px;
  }
`

const Deposit = styled.div`
  color: #48cae4;
  font-weight: 600;
  font-size: 19px;

  &:hover {
    cursor: pointer;
    text-shadow: 0 0 25px #48cae4;
  }
`

const Withdraw = styled.div`
  color: #ff629a;
  font-weight: 600;
  font-size: 19px;

  &:hover {
    cursor: pointer;
    text-shadow: 0 0 25px #ff629a;
  }
`

const DepositWidthdrawFees = styled.div``

const DepositWithdrawInputContainer = styled.div`
  display: flex;
  border: 1px solid #d2d2d2;
  background: #fff;
  width: 100%;
  height: 50px;
  border-radius: 30px;
  margin-bottom: 10px;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 0 8px 8px;
  overflow: hidden;
`

const DepositWithdrawInput = styled.input`
  width: 100%;
  height: 100%;
  min-width: 200px;
  border: none;
  background-color: transparent;
  text-align: right;
  font-size: 24px;
  font-weight: 600;
  margin-right: 10px;
  color: #48cae4;
  &:focus-visible {
    border: none;
    outline: none;
  }
`

const DepositWithdrawToken = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 500;
  margin-right: 10px;
`
const MaxButton = styled(Button)`
  height: 50px;
  color: #fff;
  border-left: 2px solid;
  border-color: #ff629a;
  background-color: #ff629a;
  font-weight: 500;
  box-shadow: none;
  padding: 18px;

  &:hover, &:focus, &:active {
    color: #ff629a;
    background-color: #fff;
  border-color: #ff629a !important;
  box-shadow: none !important;
  font-weight: 600;
  }
`

const WalletBalanceContainer = styled.div`
  display: flex;
  width: 100%;
  font-weight: 500;
  justify-content: space-between;
  margin-bottom: 15px;
`

const WalletBalance = styled.div``

const ActionsContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  flex-direction: column;
  color: #000;
`

const BalanceContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 5px;
`

const Balance = styled.div`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-size: 35px;
  font-weight: 800;
  letter-spacing: -2px;
  color: #ff629a;
`

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const WithdrawActions = styled.div`
  display: flex;
  width: 100%;
  align-items: space-around;
`

const SwitchButton = styled(BannerButton)`
  font-size: 17px;
  margin: 15px auto;
  font-weight: 600;
`
const ApproveButton = styled(SwitchButton)``
const DepositButton = styled(SwitchButton)``
const WithdrawButton = styled(SwitchButton)``
const WithdrawExitButton = styled(SwitchButton)``

const FarmDetails: React.FC = () => {
  return (
    <Container>
      <StyledDetailsCard>
        {/* ## BACK BUTTON */}
        <BackButtonContainer>
          <a href="/farms">
            <BackButton>
              <ArrowBackIosIcon />
              <span>BACK</span>
            </BackButton>
          </a>
        </BackButtonContainer>

        {/* ## HEADER */}
        {/* Image needs to be replaced with correct token or pair (__TOKEN__.png) */}
        <TokenImage src="/images/common/logo.png" alt="__TOKEN_NAME__" />
        <MainTitle>__TOKEN_NAME__</MainTitle>
        <SubTitle>Stake __TOKEN_NAME__ : Earn KUP</SubTitle>

        {/* INFORMATION BANNER AND SWAP/ZAP BUTTON */}
        <InfoBanner>
          <BannerTitle>Get __TOKEN_NAME__ tokens first</BannerTitle>
          <BannerSubText>
            __TOKEN_NAME__ tokens are required. Once you&apos;ve added liquidity to the KupcakeSwap __TOKEN_NAME__ pool
            you can deposit your liquidity tokens on this page.
          </BannerSubText>
          <BannerButton>
            {/* Make the button wording different depending on Token or LP */}
            SWAP / ZAP &gt; 🧁
          </BannerButton>
        </InfoBanner>

        <CardDivider />

        {/* ## ALL FARMING DETAILS */}
        <FarmingInfoContainer>
          {/* ## FarmingInfo = Block for one information */}
          <FarmingInfo>
            <InfoTitle>Compounding</InfoTitle>
            <ValuesContainer>
              <MidValue>
                <AlarmOnIcon />
              </MidValue>

              {/* Needs to be dynamic */}
              <RightValue>Manual / Automatic</RightValue>
            </ValuesContainer>
          </FarmingInfo>

          <FarmingInfo>
            <InfoTitle>APY / APR</InfoTitle>
            <ValuesContainer>
              {/* APR value */}
              <MidValue>__APR__%</MidValue>

              {/* Rawarded token names */}
              <RightValue>KUP</RightValue>
            </ValuesContainer>
          </FarmingInfo>

          <FarmingInfo>
            <InfoTitle>Deposit</InfoTitle>
            <ValuesContainer>
              {/* Amount of tokens / LP added by user (default 0) */}
              <MidValue>__DEPOSIT_AMOUNT__</MidValue>
              <RightValue>__TOKEN_NAME__</RightValue>
            </ValuesContainer>
          </FarmingInfo>

          <FarmingInfo>
            <InfoTitle>Profit</InfoTitle>
            <ValuesContainer>
              {/* Amount of KUP avaible to harvest */}
              <MidValue>__TO_HARVEST__</MidValue>
              <RightValue>
                {/* This button should either (depending on status):
                  - Connect
                  - Switch to KCC 
                  - Claim */}
                <ConnectOrClaimButton>CONNECT WALLET</ConnectOrClaimButton>
              </RightValue>
            </ValuesContainer>
          </FarmingInfo>

          <ContractInfo>
            <InfoTitle>Contract</InfoTitle>
            <ValuesContainer>
              {/* Replace by pool contract address */}
              <ContractValue>__CONTRACT_ADDRESS__</ContractValue>
            </ValuesContainer>
          </ContractInfo>
        </FarmingInfoContainer>

        <CardDivider />

        {/* ## DEPOSIT AND WITHDRAW BLOCK */}
        <DepositWithdrawContainer>
          <DepositTopElements>
            <DepositWithdrawToggle>
              <Deposit>DEPOSIT</Deposit>
              <span> | </span>
              <Withdraw>WITHDRAW</Withdraw>
            </DepositWithdrawToggle>
          </DepositTopElements>

          <DepositWithdrawInputContainer>
            {/* User input : Should turn red if amount > what held in wallet */}
            <DepositWithdrawInput />

            {/* Replace by Token or LP name */}
            <DepositWithdrawToken>__TOKEN__</DepositWithdrawToken>

            {/* Add max token amount based on wallet balance */}
            <MaxButton>MAX</MaxButton>
          </DepositWithdrawInputContainer>

          <WalletBalanceContainer>
            {/* eg. 0% Withdrawal fee / 1% Deposit fee */}
            <DepositWidthdrawFees>__AMOUNT__ __TYPE__ fees</DepositWidthdrawFees>

            {/* Amount of token / LP currently owned bu user waller */}
            <WalletBalance>WALLET BALANCE: __AMOUNT__ __TOKEN__</WalletBalance>
          </WalletBalanceContainer>
        </DepositWithdrawContainer>

        <CardDivider />

        <ActionsContainer>
          <BalanceContainer>
            <div>YOUR BALANCE</div>

            {/* Balance has to be displayed in USD $ (Deposit + profits) */}
            <Balance>$ 2525.00</Balance>
          </BalanceContainer>
          <ActionButtons>
            {/* Case 1 : need to switch to correct chain ID */}
            <SwitchButton>SWITCH TO KCC</SwitchButton>

            {/* Case 2 : need to approve current token / LP */}
            {/* <ApproveButton>APPROVE __TOKEN__</ApproveButton> */}

            {/* Case 3a : Deposit tab is active */}
            {/* <DepositButton>DEPOSIT</DepositButton> */}

            {/* Case 3b : Withdraw Tab is active */}
            <WithdrawActions>
              {/* Withdraw Token / LP only */}
              {/* <WithdrawButton>WITHDRAW</WithdrawButton> */}
              {/* Withdraw tokens / LP and harvest */}
              {/* <WithdrawExitButton>EXIT: CLAIM & WITHDRAW</WithdrawExitButton> */}
            </WithdrawActions>
          </ActionButtons>
        </ActionsContainer>
      </StyledDetailsCard>
    </Container>
  )
}

export default FarmDetails
