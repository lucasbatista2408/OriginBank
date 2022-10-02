import {React, useState, useContext} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import UserContext from "../../context"
import Logo from "../../images/logo-no-background.png"
import { white, black, purpleC } from "../../Utils/colors";
import { Gudea, PT_SANS, Plex } from "../../Utils/fonts";

export default function SignInMobile(){

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
      localStorage.setItem("first_name", dados.name)
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
      console.log(error.response.data[0]),
      alert(HandleError(error.response)),
      e.currentTarget.disabled=false
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
      <Header>
        <Icon onClick={HandleWelcomePage}/>
      </Header>
      <Main>
        <img src={Logo} alt="logo.png" />
      </Main>
      <Secondary>
        <FormData>
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
          <button>Log in</button>
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
`
const Header = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
`

const Icon = styled(BsFillArrowLeftCircleFill)`
  height: 100%;
  font-size: 3.4rem;
  padding-left: 1rem;
  color: ${purpleC};
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
    width: 200px;
    margin-left: 2rem;
    margin-top: 1rem;
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
  background-color: ${black};
  border-top: 2px solid ${purpleC};
  border-bottom: 2px solid ${purpleC};

  input{
    margin-top: 28px;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid ${purpleC};
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
    background-color: ${purpleC};
    color: ${white};
    font-size: 1.2rem;
    font-weight: 700;
    border: none;
    margin-top: 3rem;
  }
`

const BackToSignUp = styled.div`
  font-family: 'PT Sans', sans-serif;
  color:${white};
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;

  p{
    font-size: 1.4rem;
    cursor: pointer;
  }

  p:last-child{
    margin-top: 0.4rem;
    text-decoration: underline;
  }
`
