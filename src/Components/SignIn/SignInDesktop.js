import {React, useState, useContext} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import UserContext from "../../context"
import Logo from "../../images/logo-no-background.png"
import { white, black, purpleC } from "../../Utils/colors";
import { Gudea, PT_SANS, Plex } from "../../Utils/fonts";

export default function SignInDesktop(){

  const URI = process.env.REACT_APP_DATABASE_URI;
  const { setInfo } = useContext(UserContext);
  const {local, setLocal} = useContext(UserContext);

  const [login, setLogIn] = useState({
    cpf: '',
    password: '',
  })

  console.log(login)

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
    console.log(URL)
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
  background-color: ${black};
  display: flex;
`

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 50%;

  img{
    width: 260px;
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
  background-color: ${purpleC};
  margin-top: 130px;
  padding-top: 4rem;

  p{
    font-family: ${Gudea};
    color:${white};
    font-weight: 700;
    font-size: 1.2rem;
  }

  input{
    margin-top: 32px;
    font-family: ${Gudea};
    border: none;
    background-color: transparent;
    border-bottom: 2px solid ${white};
    width: 70%;
    height: 26px;
    font-weight: 700;
    padding-left: 0.4rem;
    color:${white}; 
    font-size: 1rem;
    ::placeholder,
    ::-webkit-input-placeholder {
    color:${white};
    font-family: ${Gudea};
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
    background-color: ${white};
    color: ${purpleC};
    font-size: 1rem;
    font-weight: 700;
    border: none;
    margin-top: 4rem;
    cursor: pointer;
  }
`

const BackToSignUp = styled.div`
  font-family: ${Gudea};
  color: ${white};
  width: 50%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${purpleC};

  p{
    font-size: 1.2rem;
    cursor: pointer;
  }

  p:last-child{
    margin-top: 0.4rem;
    text-decoration: underline;
  }
`
