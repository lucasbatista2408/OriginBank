import {React, useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import Logo from "../../images/pngwing.com.png"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export default function SignInMobile(){

  const navigate = useNavigate();

  function HandleClick(){
    navigate('/signup') 
  }

  function HandleWelcomePage(){
    navigate('/')
  }

  return(
    <LoginPage>
      <Header>
        <Icon onClick={HandleWelcomePage}/>
      </Header>
      <Main>
        <img src={Logo} alt="logo.png" />
        <h1>Banco Origin</h1>
      </Main>
      <Secondary>
        <FormData>
          <input type={"number"} placeholder={"CPF"}></input>
          <input type={"text"} placeholder={"SENHA"}></input>
          <button>Entrar</button>
        </FormData>
        <BackToSignUp onClick={HandleClick}>
          <p>Ainda não tem uma conta?</p>
          <p>Crie sua conta aqui.</p>
        </BackToSignUp>
      </Secondary>
    </LoginPage>
  )
}

const LoginPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #E9EAEB;
`
const Header = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
`

const Icon = styled(BsFillArrowLeftCircleFill)`
  height: 100%;
  font-size: 2.8rem;
  padding-left: 1rem;
  color: #2862ae;
`

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30%;

  h1{
    margin-left: 1rem;
    color: #2862ae;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    font-size: 1.8rem;
  }

  img{
    width: 80px;
  }
`

const Secondary = styled.div`
  height: 50%;

`

const FormData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
  background-color: #2862ae;
  box-shadow: 1px 1px 10px 1px rgba(140,140,140,0.84);

  input{
    margin-top: 28px;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid #E9EAEB;
    width: 70%;
    height: 26px;
    font-weight: 700;
    padding-left: 0.4rem;
    color:#E9EAEB;
    font-size: 1rem;
    ::placeholder,
    ::-webkit-input-placeholder {
    color:#E9EAEB;
    }
    outline: none;
  }

  button{
    width: 40%;
    height: 2.6rem;
    border-radius: 25px;
    background-color: #E9EAEB;
    color: #2862ae;
    font-size: 1.2rem;
    font-weight: 700;
    border: none;
    margin-top: 3rem;
  }
`

const BackToSignUp = styled.div`
  font-family: 'PT Sans', sans-serif;
  color:#2862ae;
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;

  p{
    font-size: 1.2rem;
    cursor: pointer;
  }

  p:last-child{
    margin-top: 0.4rem;
    text-decoration: underline;
  }
`
