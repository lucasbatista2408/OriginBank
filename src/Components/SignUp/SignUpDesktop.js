import {React, useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import Logo from "../../images/logo-no-background.png"
import { white, black, purpleC } from "../../Utils/colors";
import { Gudea, PT_SANS, Plex } from "../../Utils/fonts";

export default function SignUpDesktop(){

  const navigate = useNavigate();

  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    cpf: '',
    dob: '',
    password: '',
    confirm: ''
  })

function SignUp(e){
  e.preventDefault();
  const button = document.getElementById("enroll")
  button.disabled=true;

  if(!form.first_name || !form.last_name || !form.email || !form.cpf || !form.dob || !form.password || !form.confirm){
    e.currentTarget.disabled=false;
    return alert('Fill all the necessary fields')
  }

  if(form.password !== form.confirm){
    e.currentTarget.disabled=false;
    return alert('password does not match')
  }

  const URI = process.env.REACT_APP_DATABASE_URI
  const URL = `${URI}/signup`
  const signUp = form;
  const promise = axios.post(URL, signUp)
  promise
  .then( res => {
    console.log(res.data)
    navigate('/')
  })
  .catch(error => (
    button.disabled=false,
    alert(HandleError(error.response))
  ))
}

function HandleError(error){

  console.log(error.data[0])

    return error.data[0]
}

function handleClick(){
  navigate('/signin')
}

  return(
    <LoginPage>
      <Main>
        <img src={Logo} alt="logo.png" />
      </Main>
      <Secondary>
        <FormData>
          <p>Insert your info</p>
          <input type={"text"} placeholder={"First Name"} value={form.first_name} onChange={e => setForm({...form, first_name: e.target.value})} required></input>
          <input type={"text"} placeholder={"Last Name"} value={form.last_name} onChange={e => setForm({...form, last_name: e.target.value})} required></input>
          <input type={"email"} placeholder={"email"} value={form.email} onChange={e => setForm({...form, email: e.target.value})} required></input>
          <input type={"text"} placeholder={"Social Number"} value={form.cpf} onChange={e => setForm({...form, cpf: e.target.value})} required></input>
          <input type={"text"} placeholder={"DD/MM/AAAA"} value={form.dob} onChange={e => setForm({...form, dob: e.target.value})} required></input>
          <input type={"password"} placeholder={"Password"} value={form.password} onChange={e => setForm({...form, password: e.target.value})} required></input>
          <input type={"password"} placeholder={"Confirm Password"} value={form.confirm} onChange={e => setForm({...form, confirm: e.target.value})} required></input>
          <button id="enroll" onClick={SignUp}>Enroll</button>
        </FormData>
        <BackToSignUp onClick={handleClick}>
          <p>Already have an account?</p>
          <p>Log in here.</p>
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

  h1{
    margin-left: 1rem;
    color: #E9EAEB;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    font-size: 1.8rem;
  }

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
  justify-content: center;
  height: 80%;
  width: 50%;
  background-color: ${white};
  box-shadow: 1px 1px 10px 1px rgba(140,140,140,0.84);
  margin-top: 16px;
  padding-top: 12px;
  

  p{
    font-family: ${Gudea};  
    color:${purpleC};
    font-weight: 700;
    font-size: 1.2rem;
  }

  input{
    margin-top: 32px;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid ${purpleC};
    width: 70%;
    height: 26px;
    font-weight: 700;
    padding-left: 0.4rem;
    color:${purpleC};
    font-size: 1rem;
    ::placeholder,
    ::-webkit-input-placeholder {
    color:${purpleC};
    }
    outline: none;
  }

  button{
    width: 70%;
    height: 2rem;
    background-color: ${purpleC};
    color: #E9EAEB;
    font-size: 1rem;
    font-weight: 700;
    border: none;
    margin-top: 2rem;
  }
`

const BackToSignUp = styled.div`
  font-family: 'PT Sans', sans-serif;
  color: ${purpleC};
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
