import {React, useState, useContext} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import Logo from "../../images/pngwing.com.png"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import UserContext from "../../context"

export default function SignInDesktop(){

  const URI = process.env.REACT_APP_DATABASE_URI
  const { setInfo } = useContext(UserContext);
  const {local, setLocal} = useContext(UserContext);

  const [login, setLogIn] = useState({
    cpf: '',
    password: '',
  })

  const navigate = useNavigate();

  function HandleClick(){
    navigate('/signup') 
  }

  function HandleWelcomePage(){
    navigate('/')
  }

  function SignIn(e){
    e.preventDefault();
    e.currentTarget.disabled=true;

    console.log('clicked')

    if(!login.cpf || !login.password){
      return alert('Fill all the necessary fields'), 
      e.currentTarget.disabled=false
    } 

    const URL = `${URI}/signin`
    const signIn = login;
    const promise = axios.post(URL, signIn)
    promise
    .then( res => {
      const dados = res.data;
      console.log(dados)
      setInfo(dados)
      localStorage.setItem("token", dados.token);
      localStorage.setItem("id", dados.id);
      localStorage.setItem("firstName", dados.firstName)
      const token = localStorage.getItem('token')
      setLocal(token)

        if(local.length === 0){
          alert('bad request')
          window.location.reload(true)
        } else{
          navigate('/dashboard')
        }
    })
    .catch(error => (
      console.log(error.response.data),
      alert(HandleError(error.response)),
      e.currentTarget.disabled=false,
      window.location.reload(true)
    ))
  }

  function handleKeyDown(e){
    var key = e.key;
    if(key === 'Enter'){
      SignIn(e)
    }
  }

  function HandleError(error){
    if(error.status === 401){
      return 'email or password are incorrect'
    } else{
      return 'enter a valid email or password'
    }
  }

  return(
    <LoginPage>
      <Main>
        <img src={Logo} alt="logo.png" />
        <h1>Origin Bank</h1>
      </Main>
      <Secondary>
        <FormData>
          <p>Provide your log in info</p>
          <input type={"number"} 
          placeholder={"CPF"} 
          value={login.cpf} 
          onChange={e => setLogIn({...login, cpf: e.target.value})} 
          required/>
          <input onKeyUp={(e) => handleKeyDown(e)}
          type={"password"} 
          placeholder="Password" 
          value={login.password} 
          onChange={e => setLogIn({...login, password: e.target.value})} 
          required/>
          <button onClick={SignIn}>Log In</button>
        </FormData>
        <BackToSignUp onClick={HandleClick}>
          <p>Want to create an account?</p>
          <p>Click here.</p>
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
    ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
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
    cursor: pointer;
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
