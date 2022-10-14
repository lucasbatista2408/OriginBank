import React, {useState, useEffect} from "react";
import styled from "styled-components";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { black, purpleC, white } from "../../../Utils/colors";
import { Gudea } from "../../../Utils/fonts";
import { getAllTransaction } from "../Functions";
import { postDeposit } from "../Functions";
import DepositDesktop from "./DepositDesktop";


export default function FourthColumn(){

  const [info, setInfo] = useState([])
  const [btc, setBTC] = useState("")
  const [usd, setUSD] = useState("")
  const [eur, setEUR] = useState("")
  const [eth, setETH] = useState("")

  useEffect(() => {
    getAllTransaction(setInfo);
    getBTC()
    getETHC()
    getUSD()
    getEUR()
  }, [])

  function getBTC(){
    const URL = "https://www.mercadobitcoin.net/api/BTC/ticker/"

    const promise = axios.get(URL)

    promise
    .then(res =>{
      const data = res.data.ticker.buy
      const number = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(data)
      setBTC(number)
    })
    .catch(er => {
      console.log(er.response.data)
    })
  }

  function getETHC(){
    const URL = "https://www.mercadobitcoin.net/api/ETH/ticker/"

    const promise = axios.get(URL)

    promise
    .then(res =>{
      const data = res.data.ticker.buy
      const number = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(data)
      setETH(number)
    })
    .catch(er => {
      console.log(er.response.data)
    })
  }

  function getUSD(){
    const URL = "https://economia.awesomeapi.com.br/json/last/USD-BRL"

    const promise = axios.get(URL)

    promise
    .then(res =>{
      const data = res.data.USDBRL.high
      const number = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(data)
      console.log(number)
      setUSD(number)
    })
    .catch(er => {
      console.log(er.response.data)
    })
  }

  function getEUR(){
    const URL = "https://economia.awesomeapi.com.br/json/last/EUR-BRL"

    const promise = axios.get(URL)

    promise
    .then(res =>{
      const data = res.data.EURBRL.high
      const number = new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(data)
      console.log(number)
      setEUR(number)
    })
    .catch(er => {
      console.log(er.response.data)
    })
  }


  return(
    <FourthColumnContainer>
      <FinancialMarket>
        <h1>Financial Market</h1>
        <h2>Quotes</h2>
        <CryptoQuote>
          <p>Bitcoin Price</p>
          <p>{btc}</p>
        </CryptoQuote>
        <CryptoQuote>
          <p>Ethereum Price</p>
          <p>{eth}</p>
        </CryptoQuote>
        <CurrencyQuote>
          <p>USD to BRL</p>
          <p>{usd}</p>
        </CurrencyQuote>
        <CurrencyQuote>
          <p>EUR to BRL</p>
          <p>{eur}</p>
        </CurrencyQuote>
      </FinancialMarket>
      <DepositDesktop/>
    </FourthColumnContainer>
  )
}

const FourthColumnContainer = styled.div`
  width: 24%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const FinancialMarket = styled.div`
  height: 60%;
  background-color: ${white};
  border-radius: 1.4rem;
  padding: 1rem;
  font-family: ${Gudea};
  overflow-y: hidden;

  h1{
    font-size:1.4rem;
    font-weight: 700;
    color: ${purpleC}
  }
  h2{
    font-size:1.2rem;
    font-weight: 700;
    color: ${purpleC};
    margin-top: 0.6rem;
  }
`

const CryptoQuote = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  font-family: ${Gudea};
  font-size: 1rem;
  color: ${purpleC};
  font-weight: 700;
`

const CurrencyQuote = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  font-family: ${Gudea};
  font-size: 1rem;
  color: ${purpleC};
  font-weight: 700;
`

const Transfer = styled.div`
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
  height: 76%;
  overflow-y: scroll;
  background-color: ${purpleC};
  border-radius: 16px;
  padding: 1rem;

  ::-webkit-scrollbar {
    display: none;
  }

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
    color: ${white}
  }
  p{
    margin-top: 0.2rem;
    font-size: 1rem;
    color: ${white}
  }
`

const Amount = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${white}
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