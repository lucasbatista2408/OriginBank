import React from "react";
import styled from "styled-components"
import Logo from "../../images/pngwing.com.png"
import { useNavigate } from "react-router-dom"
import {FaArrowRight} from "react-icons/fa"


export default function WelcomePageDesktop(){

  const navigate = useNavigate();
  function HandleClick(){
    console.log("ok")
    navigate('/signup')
  }

  return(
    <WelcomePage>
      <Main>
        <img src={Logo} alt="logo.png" />
        <h1>Banco Origin</h1>
      </Main>
      <SecondarySection>
        <Button >
          <h1 onClick={HandleClick}> Abra sua conta </h1>
          <Icon onClick={HandleClick}/>
        </Button>
        <Description>
          <p>Um banco minimalista, e simples.</p>
        </Description>
      </SecondarySection>
    </WelcomePage>
  )
}

const WelcomePage = styled.h1`
  width: 100%;
  height: 100vh;
  background-color: #E9EAEB;
  font-size: 2rem;
  display: flex;
`

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  h1{
    margin-left: 2rem;
    color: #2862ae;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
  }

  img{
    width: 80px;
  }
`

const SecondarySection = styled.div`
  width: 50%;
  background-color: #2862ae;
  display: flex;
  flex-direction: column;
`

const Button = styled.div`
  height: 52%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  h1{
    cursor: pointer;
    color: #E9EAEB;
    font-family: 'PT Sans', sans-serif;
    text-align: center;
    font-size: 1.8rem;
  }

`

const Description = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;

  p{
    width: 50%;
    color: #E9EAEB;
    font-size: 1.8rem;
    font-weight: 400;
    text-align: center;
    font-family: 'PT Sans', sans-serif;
    align-self: flex-end;
  }
`

const Icon = styled(FaArrowRight)`
  width: 5rem;
  color: #E9EAEB;
  margin-top: 0.2rem;
  cursor: pointer;
`