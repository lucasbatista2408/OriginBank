import {React, useState, useEffect} from "react";
import styled from "styled-components";
import { black, purpleC, white } from "../../../Utils/colors";
import Logo from "../../../images/logo-no-background.png"
import {AiFillEye} from "react-icons/ai";
import {AiFillEyeInvisible} from "react-icons/ai";
import { getBalance } from "../Functions";
import { Gudea } from "../../../Utils/fonts";


export default function TransactionsComponent(){

  const [balance, setBalance] = useState("")
  const [hide, setHide] = useState(true)


  useEffect(() => {
    getBalance(setBalance)
  }, [])

  function handleVisible(){
    hide === false ? setHide(true) : setHide(false)
  }


  return(
    <TransactionContainer>
      <Header>
        <img src={Logo} alt="logo.png" />
      </Header>
      <Balance>
          {hide === true ? (
            <>
              <h1 onClick={handleVisible}>R$ ◉◉◉◉,◉◉</h1>
              <Hide onClick={handleVisible}/>
            </>
          ) : (
            <>
              <h1 onClick={handleVisible}>{balance}</h1>
              <NotHide onClick={handleVisible}/>
            </>
          )}
      </Balance>
      <Receipt>
        <h1>Statement</h1>
        <Info>
          <h1>Description</h1>
          <h1>Amount</h1>
        </Info>
        <TransactionsList>
            <ul>
              <Description>
                <h1>Outback Restaurante</h1>
                <p>04/10</p>
              </Description>
              <Amount>R$ -150,00</Amount>
            </ul>
            <ul>
              <Description>
                <h1>Outback Restaurante</h1>
                <p>04/10</p>
              </Description>
              <Amount>R$ -150,00</Amount>
            </ul>
            <ul>
              <Description>
                <h1>Outback Restaurante</h1>
                <p>04/10</p>
              </Description>
              <Amount>R$ -150,00</Amount>
            </ul>
        </TransactionsList>
      </Receipt>
    </TransactionContainer>
  )
}

const TransactionContainer = styled.div`
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

const Balance = styled.div`
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
  margin-right: 1rem;

  h1{
    font-size: 1.8rem;
    color: ${black};
    font-family: ${Gudea};
    font-weight: 700;
  }

`

const Hide = styled(AiFillEye)`
  font-size: 1.8rem;
  color: ${black};
  margin-top: 0.2rem;
`

const NotHide = styled(AiFillEyeInvisible)`
  font-size: 1.8rem;
  color: ${black};
  margin-top: 0.2rem;
`

const Receipt = styled.div`
  height: 65%;
  background-color: ${black};
  border-radius: 1.4rem;
  border-top: 4px solid white;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 1rem;
  font-family: ${Gudea};

  h1{
    font-size:1.4rem;
    font-weight: 700;
  }
`

const Info = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h1{
    font-size: 1.4rem;
    color: ${purpleC}
  }
`

const TransactionsList = styled.div`
  width: 100%;
  height: 80%;

  ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1.2rem;
  }
`

const Description = styled.div`

  h1{
    font-size: 1.2rem;
  }
  p{
    margin-top: 0.2rem;
    font-size: 1rem;
  }
`

const Amount = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
`