import React from "react"
import styled from "styled-components"
import Logo from "../../images/logo-no-background.png"
import { useNavigate } from "react-router-dom"
import {HiMenu} from "react-icons/hi";
import { white, black, purpleC } from "../../Utils/colors";
import { Gudea, PT_SANS, Plex } from "../../Utils/fonts";


export default function DashBoardMobile(){

  const name = localStorage.getItem("first_name")

  return(
    <DashBoard>
      <Info>
        <h1>Hello {name}</h1>
        
      </Info>
      <Balance></Balance>
      <Cards/>
      <Transactions/>
    </DashBoard>
  )
}

const DashBoard = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${white};
`

const Info = styled.div`
  height: 10%;
  background-color: ${purpleC};
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  h1{
    color: ${white};
    font-size: 1.4rem;
    font-family: ${Gudea};
    font-weight: 700;
  }
  
`

const Balance = styled.div`

`

const Cards = styled.div`

`

const Transactions = styled.div`

`