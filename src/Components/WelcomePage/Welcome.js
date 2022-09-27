import React from "react"
import styled from "styled-components"
import Logo from "../../images/pngwing.com.png"
import { useNavigate } from "react-router-dom"
import {FaArrowRight} from "react-icons/fa"
import MediaQuery from "react-responsive"
import WelcomePageDesktop from "./WelcomePageDesktop.js"

export default function Welcome(){

  const navigate = useNavigate();
  function HandleClick(){
    navigate('/signup')
  }

  function HandleLogin(){
    navigate('/signin')
  }

  return(
    <>
    <MediaQuery maxWidth={1023}>
    <WelcomePage>
      <Main>
        <img src={Logo} alt="logo.png" />
        <h1>Banco Origin</h1>
      </Main>
      <Button onClick={HandleClick}>
        <h1> Abra sua conta </h1>
        <Icon />
      </Button>
      <SignInButton>
        <h1 onClick={HandleLogin}> Fazer login. </h1>
      </SignInButton>
      <Description>
        <p>Um banco minimalista, e simples.</p>
      </Description>
    </WelcomePage>
    </MediaQuery>
    <MediaQuery minWidth={1024}>
      <WelcomePageDesktop/>
    </MediaQuery>
    </>
  )
}

const WelcomePage = styled.h1`
  width: 100%;
  height: 100vh;
  background-color: #E9EAEB;
  font-size: 2rem;

`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;

  h1{
    margin-top: 1rem;
    color: #2862ae;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
  }

  img{
    width: 160px;
  }
`

const SignInButton = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-right: 1.6rem;
  background-color: #E9EAEB;
  box-shadow: 0px 1px 10px 1px rgba(140,140,140,0.84);

  h1{
    width: 40%;
    height: 60%;
    color: #2862ae;
    font-family: 'PT Sans', sans-serif;
    text-align: center;
    font-size: 1.2rem;
  }

`

const Button = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2862ae;
  box-shadow: 3px -3px 10px 1px rgba(140,140,140,0.84);

  h1{
    color: #E9EAEB;
    font-family: 'PT Sans', sans-serif;
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
    color: #2862ae;
    font-size: 1.8rem;
    font-weight: 700;
    text-align: center;
    font-family: 'PT Sans', sans-serif;
    padding-right: 1rem;
  }
`

const Icon = styled(FaArrowRight)`
  width: 1.8rem;
  color: #E9EAEB;
  padding-left: 1rem;
`