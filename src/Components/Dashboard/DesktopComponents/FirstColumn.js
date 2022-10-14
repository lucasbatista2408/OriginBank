import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { white, black, purpleC } from "../../../Utils/colors";
import { Gudea } from "../../../Utils/fonts";
import { GetBalance } from "../Functions";
import {AiFillEye} from "react-icons/ai";
import {AiFillEyeInvisible} from "react-icons/ai";
import TransactionGraphDesktop from "../TransactionGraphDesktop";
import LastTransactionDesktop from "./LastTransactionDesktop";

export default function FirstColumn(){

  const [balance, setBalance] = useState("")
  const [hide, setHide] = useState(true)

  const name = localStorage.getItem("first_name")

  useEffect(() => {
    GetBalance(setBalance)
  }, [])

  function handleVisible(){
    hide === false ? setHide(true) : setHide(false)
  }

  return(
    <FirstColumnContainer>
      <Main>
      <Header>
        <h1>ORIGIN BANK</h1>
      </Header>
      <InfoUser>
        <h1>Hello, {name}</h1>
      </InfoUser>
      <Balance>
          {hide === true ? (
            <>
              <h1>R$ ◉◉◉◉,◉◉</h1>
              <Hide onClick={handleVisible}/>
            </>
          ) : (
            <>
              <h1>{balance}</h1>
              <NotHide onClick={handleVisible}/>
            </>
          )}
      </Balance>
      </Main>
      <GraphAndLastTransaction>
        <TransactionGraphDesktop/>
        <LastTransactionDesktop/>
      </GraphAndLastTransaction>
    </FirstColumnContainer>
  )
}

const FirstColumnContainer = styled.div`
  width: 24%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Main = styled.div`
  border-radius: 16px;
  height: 30%;
  width: 100%;
  background-color: ${white};
  padding: 1rem;
`

const Header = styled.div`
  width: 100%;
  font-size: 1.2rem;
  color: ${purpleC}
`

const InfoUser = styled.div`
  width: 100%;
  font-size: 1.2rem;
  margin-top: 0.4rem;
  font-weight: 700;
  color: ${purpleC};
`

const Balance = styled.div`
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  h1{
    font-size: 1.8rem;
    color: ${purpleC};
    font-family: ${Gudea};
  }
`

const Hide = styled(AiFillEye)`
  font-size: 1.8rem;
  color: ${purpleC};
  margin-top: 0.2rem;
  cursor: pointer;
`

const NotHide = styled(AiFillEyeInvisible)`
  font-size: 1.8rem;
  color: ${purpleC};
  margin-top: 0.2rem;
  cursor: pointer;
`

const GraphAndLastTransaction = styled.div`
  border-radius: 16px;
  height: 70%;
  width: 100%;
  background-color: ${white};
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`