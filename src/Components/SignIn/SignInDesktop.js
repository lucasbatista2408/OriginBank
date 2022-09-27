import {React, useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import Logo from "../../images/pngwing.com.png"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

export default function SignInDesktop(){

  const navigate = useNavigate();

  function HandleClick(){
    navigate('/signup') 
  }

  function HandleWelcomePage(){
    navigate('/')
  }

  return(
    <LoginPage>
      <Main>
        <img src={Logo} alt="logo.png" />
        <h1>Banco Origin</h1>
      </Main>
      <Secondary>
        <FormData>
          <p>Insira seus dados</p>
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
  background-color: #2862ae;
  display: flex;
`

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 50%;

  h1{
    margin-left: 1rem;
    color: #E9EAEB;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    font-size: 1.8rem;
  }

  img{
    width: 80px;
    background-color: #E9EAEB;
    border: 2px solid #E9EAEB;
  }
`

const Secondary = styled.div`
  height: 100vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

`

const FormData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
  width: 50%;
  background-color: #E9EAEB;
  /* border-radius: 0.6rem; */
  box-shadow: 1px 1px 10px 1px rgba(140,140,140,0.84);
  margin-top: 130px;
  padding-top: 4rem;

  p{
    font-family: 'PT Sans', sans-serif;
    color:#2862ae;
    font-weight: 700;
    font-size: 1.2rem;
  }

  input{
    margin-top: 32px;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid #2862ae;
    width: 70%;
    height: 26px;
    font-weight: 700;
    padding-left: 0.4rem;
    color:#2862ae;
    font-size: 1rem;
    ::placeholder,
    ::-webkit-input-placeholder {
    color:#2862ae;
    }
    outline: none;
  }

  button{
    width: 40%;
    height: 2.2rem;
    background-color: #2862ae;
    color: #E9EAEB;
    font-size: 1rem;
    font-weight: 700;
    border: none;
    margin-top: 4rem;
  }
`

const BackToSignUp = styled.div`
  font-family: 'PT Sans', sans-serif;
  color: #2862ae;
  width: 50%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #E9EAEB;

  p{
    font-size: 1.2rem;
    cursor: pointer;
  }

  p:last-child{
    margin-top: 0.4rem;
    text-decoration: underline;
  }
`
