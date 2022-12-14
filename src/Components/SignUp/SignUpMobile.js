import {React, useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import Logo from "../../images/logo-no-background.png"
import { white, black, purpleC } from "../../Utils/colors";
import { Gudea, PT_SANS, Plex } from "../../Utils/fonts";

export default function SignUpMobile(){

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

  console.log(form)

function SignUp(e){
  e.preventDefault();
  const button = document.getElementById("enroll")
  button.disabled=true;

  if(!form.first_name || !form.last_name || !form.email || !form.cpf || !form.dob || !form.password || !form.confirm){
    button.disabled=false;
    return alert('Fill all the necessary fields')
  }

  if(form.password !== form.confirm){
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
  
    return error.statusText
}

function handleClick(){
  navigate('/')
}

  return(
    <SignUpPage>
      <Head>
        <img src={Logo} alt="logo.png" />
      </Head>
      <FormData>
        <input type={"text"} placeholder={"First Name"} value={form.first_name} onChange={e => setForm({...form, first_name: e.target.value})} required></input>
        <input type={"text"} placeholder={"Last Name"} value={form.last_name} onChange={e => setForm({...form, last_name: e.target.value})} required></input>
        <input type={"email"} placeholder={"email"} value={form.email} onChange={e => setForm({...form, email: e.target.value})} required></input>
        <input type={"text"} placeholder={"Social Security Number (CPF)"} value={form.cpf} onChange={e => setForm({...form, cpf: e.target.value})} required></input>
        <input type={"date"} placeholder={"Date of Birth"} value={form.dob} onChange={e => setForm({...form, dob: e.target.value})} required></input>
        <input type={"password"} placeholder={"Password"} value={form.password} onChange={e => setForm({...form, password: e.target.value})} required></input>
        <input type={"password"} placeholder={"Confirm Password"} value={form.confirm} onChange={e => setForm({...form, confirm: e.target.value})} required></input>
        <button id="enroll" onClick={SignUp}> Enroll </button>
        <p onClick={handleClick}>Go Back</p>
      </FormData>
    </SignUpPage>
  )
}

const SignUpPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${black};
`

const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20%;
  width: 100%;

  img{
    width: 200px;
    margin-left: 2rem;
    margin-top: 1rem;
  }
`

const FormData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 75%;
  background-color: ${black};
  border-top: 2px solid ${purpleC};
  margin-top: 2.65rem;

  input{
    margin-top: 28px;
    border: none;
    background-color: transparent;
    border-bottom: 2px solid ${purpleC};
    width: 70%;
    height: 26px;
    font-weight: 700;
    padding-left: 0.4rem;
    color:${white};
    font-size: 1rem;
    ::placeholder,
    ::-webkit-input-placeholder {
    color:${white};
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

  p{
    margin-top: 1rem;
    font-family: 'PT Sans', sans-serif;
    font-size: 1.4rem;
    color: ${white};
    text-decoration : underline;
    cursor: pointer;
  }
`