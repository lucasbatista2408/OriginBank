import React from "react";
import styled from "styled-components"
import Logo from "../../images/logo-no-background.png"
import { useNavigate } from "react-router-dom"
import {FaArrowRight} from "react-icons/fa"
import { white, black, purpleC } from "../../Utils/colors";
import { Gudea, PT_SANS, Plex } from "../../Utils/fonts";

export default function WelcomePageDesktop(){

  const navigate = useNavigate();

  function HandleClick(){
    console.log("ok")
    navigate('/signup')
  }

  function NavigateLogin(){
    navigate('/signin')
  }

  return(
    <WelcomePage>
      <Main>
        <img src={Logo} alt="logo.png" />
        {/* <h1>Origin Bank</h1> */}
      </Main>
      <SecondarySection>
        <Button >
          <h1 onClick={HandleClick}> Enroll Now </h1>
          <Icon onClick={HandleClick}/>
        </Button>
        <LoginButton>
          <p>Already have a bank account?</p>
          <p onClick={NavigateLogin}>login here.</p>
        </LoginButton>
        <Description>
          <p>A minimalistic yet simple bank.</p>
        </Description>
      </SecondarySection>
    </WelcomePage>
  )
}

const WelcomePage = styled.h1`
  width: 100%;
  height: 100vh;
  background-color: ${black};
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
    font-family: ${Gudea};
    font-weight: 700;
  }

  img{
    width: 260px;
  }
`

const SecondarySection = styled.div`
  width: 50%;
  background-color: ${purpleC};
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
    font-family: ${Gudea};
    text-align: center;
    font-size: 1.8rem;
    margin-left: 1.8rem;
    margin-bottom: 4rem;
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
    font-family: ${Plex};
    font-weight: 500;
    align-self: flex-end;
  }
`

const Icon = styled(FaArrowRight)`
  width: 5rem;
  color: #E9EAEB;
  margin-top: 0.2rem;
  cursor: pointer;
  margin-bottom: 4rem;
`

const LoginButton = styled.div`
height: 10%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;

p{
  color: #E9EAEB;
  font-family: 'PT Sans', sans-serif;
  text-align: center;
  font-size: 1.2rem;
  margin-left: 0.2rem;
}
p:last-child{
  cursor: pointer;
  text-decoration: underline;
}
`