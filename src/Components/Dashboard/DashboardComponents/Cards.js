import {React, useState, useEffect} from "react";
import styled from "styled-components";
import { black, purpleC, white } from "../../../Utils/colors";
import Logo from "../../../images/logo-no-background.png"
import { Gudea } from "../../../Utils/fonts";
import { AiFillPlusSquare } from "react-icons/ai";

export default function CardsComponent(){

  return(
    <CardsContainer>
      <Header>
        <img src={Logo} alt="logo.png" />
      </Header>
      <NewCard>
        <h1>Request a New Card</h1>
        <AddIcon/>
      </NewCard>
      <CardList>
        <p>YOUR CARDS</p>
      </CardList>
    </CardsContainer>
  )
}

const CardsContainer = styled.div`
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

const NewCard = styled.div`
  width: 100%;
  height: 10%;
  background-color: ${black};
  padding: 1rem;
  display: flex;
  align-items: center;
  font-family: ${Gudea};
  font-size: 1.5rem;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
  color: ${white}
`

const AddIcon = styled(AiFillPlusSquare)`
  font-size: 2.4rem;
  color: ${white};
`

const CardList = styled.div`
  padding: 1rem;
  font-family: ${Gudea};
`