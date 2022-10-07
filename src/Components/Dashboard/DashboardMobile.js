import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import {HiMenu} from "react-icons/hi";
import { white, black, purpleC } from "../../Utils/colors";
import { Gudea, PT_SANS, Plex } from "../../Utils/fonts";
import {AiFillEye} from "react-icons/ai";
import {AiFillEyeInvisible} from "react-icons/ai";
import TransactionGraph from "./TransactionGraph";
import LastTransaction from "./LastTransaction";
import { GetBalance } from "./Functions";
import Menu from "./Menu";


export default function DashBoardMobile(){

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
    <DashBoard>
      <InfoBalance>
        <Header>
          <h1>ORIGIN BANK</h1>
        </Header>
        <Info>
          <h1>Hello, {name}</h1>
          <Icon />
        </Info>
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
      </InfoBalance>
      <TransactionGraph/>
      <LastTransaction/>
      <Menu/>
    </DashBoard>
  )
}

const DashBoard = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${black};
`

const InfoBalance = styled.div`
  height: 25%;
  background-color: ${purpleC};
  padding: 1rem;
`

const Header = styled.div`
  height: 10%;

  h1{
      font-size: 1rem;
      color: ${white};
      font-family: ${Gudea};
    }
`
const Info = styled.div`
  height: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1{
    color: ${white};
    font-size: 1.8rem;
    font-family: ${Gudea};
    font-weight: 700;
  }
  
`

const Icon = styled(HiMenu)`
  font-size: 1.8rem;
  color: ${white};
`

const Balance = styled.div`
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  h1{
    font-size: 1.8rem;
    color: ${white};
    font-family: ${Gudea};
  }

`

const Hide = styled(AiFillEye)`
  font-size: 1.8rem;
  color: ${white};
  margin-top: 0.2rem;
`

const NotHide = styled(AiFillEyeInvisible)`
  font-size: 1.8rem;
  color: ${white};
  margin-top: 0.2rem;
`