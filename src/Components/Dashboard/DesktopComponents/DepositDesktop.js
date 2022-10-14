import React, {useState} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { black, purpleC, white } from "../../../Utils/colors";
import { Gudea } from "../../../Utils/fonts";
import { getAllTransaction } from "../Functions";
import { postDeposit } from "../Functions";


export default function DepositDesktop(){

  const [deposit, setDeposit] = useState({
    description: '',
    type: 'deposit',
    amount: '',
  })

  return(
    <DepositContainer>
        <Form>
          <Title>Make a Deposit</Title>
          <p>Description</p>
          <input type={"text"} value={deposit.description} onChange={e => setDeposit({...deposit, description: e.target.value})} required/>
          <p>Amount</p>
          <input type={"number"} value={deposit.amount} onChange={e => setDeposit({...deposit, amount: e.target.value})} required/>
        </Form>
        <ConfirmButton>
            <button onClick={e => postDeposit(deposit, setDeposit)}>GO!</button>
        </ConfirmButton>
      </DepositContainer>
  )
}

const DepositContainer = styled.div`
  height: 35%;
  background-color: ${white};
  border-radius: 16px;
  padding: 1rem;
  display: flex;
`

const Form = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: ${white};
  justify-content: center;

  p{
    font-size: 1.2rem;
    font-family: ${Gudea};
    margin-bottom: 0.6rem;
    font-weight: 700;
    color: ${purpleC}
  }

  input{
    height: 1.4rem;
    margin-bottom: 0.4rem;
    font-size: 1.2rem;
    border-radius: 0.6rem;
    border: none;
    background-color: white;
    color: ${purpleC};
    padding: 1rem;
  }

  input:focus { 
    outline: none !important;
    border-color: black;
    box-shadow: 0 0 10px white;
 }
`

const Title = styled.div`
  font-family: ${Gudea};
  font-size: 1.4rem;
  font-weight: 700;
  color: ${purpleC};
  margin-bottom: 1rem;
`

const ConfirmButton = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button{
    width: 4.8rem;
    height: 4.4rem;
    margin-top: 4rem;
    border-radius: 50%;
    border: none;
    color: ${white};
    font-weight: 700;
    font-family: ${Gudea};
    font-size: 1rem;
    background-color: ${purpleC};
    cursor: pointer;
  }
`