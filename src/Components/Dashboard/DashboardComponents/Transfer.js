import React, {useState} from "react";
import axios from "axios"
import styled from "styled-components";
import Logo from "../../../images/logo-no-background.png"
import { black, purpleC, white } from "../../../Utils/colors";
import { Gudea } from "../../../Utils/fonts";
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import LastTransfer from "../LastTransfer";

export default function DepositComponent(){

  const navigate = useNavigate();

  const [deposit, setDeposit] = useState({
    description: '',
    type: 'debit',
    amount: '',
  })

  console.log(deposit)

  function postDeposit(e){
    e.preventDefault();
    const URI = process.env.REACT_APP_DATABASE_URI;
    const token = localStorage.getItem("token")
    let config = {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    }


    if(!deposit.description || !deposit.amount){
      return alert('Fill all the necessary fields')
    }

    const URL = `${URI}/new-tr`
    console.log(URL)
    const data = deposit;
    const promise = axios.post(URL, data, config)
    promise
    .then(res =>{
      navigate('/dashboard')
    })
    .catch(er => {
      console.log(er.response.data)
    })
  }

  return(
    <DepositContainer> 
      <Header>
        <img src={Logo} alt="logo.png" />
      </Header>
      <LastTransfer/>
      <Form>
        <p>Description</p>
        <input type={"text"} value={deposit.description} onChange={e => setDeposit({...deposit, description: e.target.value})} required/>
        <p>Amount</p>
        <input type={"number"} value={deposit.amount} onChange={e => setDeposit({...deposit, amount: e.target.value})} required/>
        <button onClick={postDeposit}>Make Transfer</button>
      </Form>
    </DepositContainer>
  )
}

const DepositContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${purpleC};
  color: white;

`

const Header = styled.div`
  height: 20%;
  background-color: ${black};
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    width: 12rem;
    margin-left: 1.2rem;
  }
`

const Form = styled.div`
  padding: 1rem;
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  color: ${white};
  margin-top: 0.6rem;

  p{
    font-size: 1.2rem;
    font-family: ${Gudea};
    margin-bottom: 0.6rem;
    font-weight: 700;
  }

  input{
    height: 2.6rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    border-radius: 0.6rem;
    border: none;
    background-color: white;
    color: purple;
    padding: 1rem;
  }

  input:focus { 
    outline: none !important;
    border-color: black;
    box-shadow: 0 0 10px white;
 }

 button{
  width: 40%;
  height: 2.6rem;
  align-self: flex-end;
  border-radius: 0.6rem;
  border: none;
  color: ${purpleC};
  font-weight: 700;
  font-family: ${Gudea};
  font-size: 1rem;
 }
`