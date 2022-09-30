import React from "react"
import styled from "styled-components"
import Logo from "../../images/logo-no-background.png"
import { useNavigate } from "react-router-dom"
import {FaArrowRight} from "react-icons/fa"
import { white, black, purpleC } from "../../Utils/colors";
import { Gudea, PT_SANS, Plex } from "../../Utils/fonts";

export default function WelcomePageMobile(){

  const navigate = useNavigate();
  function HandleClick(){
    navigate('/signup')
  }

  function HandleLogin(){
    navigate('/signin')
  }

  return(
    <>
    <WelcomePage>
      <Main>
        <img src={Logo} alt="logo.png" />
      </Main>
      <Button onClick={HandleClick}>
        <h1> Enroll Now! </h1>
        <Icon />
      </Button>
      <SignInButton>
        <h1 onClick={HandleLogin}> Log in. </h1>
      </SignInButton>
      <Description>
        <p>A new simple bank.</p>
      </Description>
    </WelcomePage>
    </>
  )
}

const WelcomePage = styled.h1`
  width: 100%;
  height: 100vh;
  background-color: ${black};
  font-size: 2rem;

`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;

  img{
    margin-left: 2.4rem;
    width: 260px;
  }
`

const SignInButton = styled.div`
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-right: 1.6rem;
  background-color: ${purpleC};
  margin-top: 0.4rem;
  /* box-shadow: 0px 8px 10px -2px ${purpleC}; */

  h1{
    width: 40%;
    height: 60%;
    color: ${white};
    font-family: ${Gudea};
    text-align: center;
    font-size: 1.4rem;
    font-weight: 700;
  }

`

const Button = styled.div`
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${purpleC};
  margin-bottom: 0.8rem;

  h1{
    color: ${white};
    font-family: ${Gudea};
    font-size: 1.6rem;
    margin-top: 0.2rem;
  }

`

const Description = styled.div`
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;

  p{
    width: 50%;
    color: ${purpleC};
    font-size: 1.8rem;
    font-weight: 700;
    text-align: center;
    font-family: ${Gudea};
    padding-right: 1rem;
  }
`

const Icon = styled(FaArrowRight)`
  width: 2.4rem;
  color: ${white};
  padding-left: 1rem;
`