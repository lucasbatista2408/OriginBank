import React from "react";
import styled from "styled-components";
import { Gudea } from "../../Utils/fonts";
import { BiTransferAlt } from "react-icons/bi";
import { BiArrowFromBottom } from "react-icons/bi";
import { purpleC, white } from "../../Utils/colors";
import { BiCreditCard } from "react-icons/bi";
import { BiArrowToBottom } from "react-icons/bi";


export default function Menu(){

  return(
    <>
    <MenuContainer>
      <Transactions>
        <TransactionIcon/>
        <p>Transactions</p>
      </Transactions>
      <Request>
        <CardIcon/>
        <p>Cards</p>
      </Request>
      <Deposit>
        <DepositIcon/>
        <p>Deposit Money</p>
      </Deposit>
      <Transfer>
        <TransferIcon/>
        <p>Transfer Money</p>
      </Transfer>
    </MenuContainer>
    </>
  )
}

const MenuContainer = styled.div`
  height: 41%;

  font-family: ${Gudea};
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${purpleC};
  font-weight: 700;
  font-size: 1.6rem;

  p{
    display: flex;
    align-items: center;

  }
`

const TransactionIcon = styled(BiTransferAlt)`
  margin-top: 1.8rem;
  margin-right: 0.6rem;
  font-size: 2rem;
  color: ${white};
`
const TransferIcon = styled(BiArrowFromBottom)`
  margin-top: 1.8rem;
  margin-right: 0.6rem;
  font-size: 2rem;
  color: ${white};
`
const CardIcon = styled(BiCreditCard)`
  margin-top: 1.8rem;
  margin-right: 0.6rem;
  font-size: 2rem;
  color: ${white};
`
const DepositIcon = styled(BiArrowToBottom)`
  margin-top: 1.8rem;
  margin-right: 0.6rem;
  font-size: 2rem;
  color: ${white};
`

const Transactions = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: row;
  height: 25%;
`

const Request = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: row;
  height: 25%;

  p{
    color: ${white};
  }
`

const Deposit = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: row;
  height: 25%;
`

const Transfer = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: row;
  height: 25%;

  p{
    color: ${white};
  }
`