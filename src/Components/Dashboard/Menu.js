import * as React from "react";
import { useNavigate } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { black, purpleC, white } from "../../Utils/colors";
import styled from "styled-components";
import { Gudea } from "../../Utils/fonts";

export default function Menu() {

  const navigate = useNavigate();

  function navigateTransactions(){
    navigate('/transactions')
  }

  function navigateCards(){
    navigate('/cards')
  }

  function navigateDeposit(){
    navigate('/deposit')
  }

  function navigateTransfer(){
    navigate('/transfer')
  }

  return (
    <MenuContainer >
      <Item button onClick={navigateTransactions}>
        <TransactionIcon />
        <Text>
          <h1>Transactions</h1>
        </Text>
      </Item>
      <Item button onClick={navigateCards}>
        <CardIcon />
        <Text>
          <h1>Cards</h1>
        </Text>
      </Item>
      <Item button onClick={navigateDeposit}>
        <DepositIcon />
        <Text>
          <h1>Deposit</h1>
        </Text>
      </Item>
      <Item button onClick={navigateTransfer}>
        <TransferIcon />
        <Text>
          <h1>Transfer</h1>
        </Text>
      </Item>
    </MenuContainer>
  );
}

const MenuContainer = styled(List)`
  background-color: ${black};
  height: 41%;
`

const Item = styled(ListItem)`
  height: 25%;
  font-family: ${Gudea};
`

const TransactionIcon = styled(CompareArrowsOutlinedIcon)`
  margin-right: 1rem;
  color: ${white};
`
const CardIcon = styled(CreditCardOutlinedIcon)`
  margin-right: 1rem;
  color: ${white};
`
const DepositIcon = styled(CallReceivedIcon)`
  margin-right: 1rem;
  color: ${white};
`
const TransferIcon = styled(ArrowOutwardIcon)`
  margin-right: 1rem;
  color: ${white};
`

const Text = styled(ListItemText)`
  h1{
    font-size: 1.6rem;
    color: ${white};
  }
`