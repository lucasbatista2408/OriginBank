import {React, useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import Logo from "../../images/pngwing.com.png"

export default function SignUpMobile(){

  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: '',
    secondName: '',
    email: '',
    securityNumber: '',
    dob: '',
    password: '',
    confirm: ''
  })

function SignUp(e){
  e.preventDefault();
  e.currentTarget.disabled=true;

  if(!form.username || !form.email || !form.password || !form.picture){
    return alert('Fill all the necessary fields')
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
    alert(HandleError(error.response)),
    e.currentTarget.disabled=false,
    window.location.reload(true)
  ))
}

function HandleError(error){

  if(error.status === 409){
    return error.data
  } else {
    return 'something went wront'
  }

}

function handleClick(){
  navigate('/')
}

  return(
    <SignUpPage>
      <Head>
        <img src={Logo} alt="logo.png" />
        <h1>Origin Bank</h1>
      </Head>
      <FormData>
        <input type={"text"} placeholder={"First Name"} value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} required></input>
        <input type={"text"} placeholder={"Last Name"} value={form.secondName} onChange={e => setForm({...form, secondName: e.target.value})} required></input>
        <input type={"email"} placeholder={"email"} value={form.email} onChange={e => setForm({...form, email: e.target.value})} required></input>
        <input type={"text"} placeholder={"Social Security Number (CPF)"} value={form.securityNumber} onChange={e => setForm({...form, securityNumber: e.target.value})} required></input>
        <input type={"date"} placeholder={"Date of Birth"} value={form.dob} onChange={e => setForm({...form, dob: e.target.value})} required></input>
        <input type={"password"} placeholder={"Password"} value={form.password} onChange={e => setForm({...form, password: e.target.value})} required></input>
        <input type={"password"} placeholder={"Confirm Password"} value={form.confirm} onChange={e => setForm({...form, confirm: e.target.value})} required></input>
        <button onClick={SignUp}> Enroll </button>
        <p onClick={handleClick}>Go Back</p>
      </FormData>
    </SignUpPage>
  )
}

const SignUpPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #E9EAEB;
`

const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20%;
  width: 100%;

  h1{
    margin-left: 1rem;
    color: #2862ae;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    font-size: 1.8rem;
  }

  img{
    width: 80px;
    border: 2px solid #E9EAEB;
  }
`

const FormData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 75%;
  background-color: #2862ae;
  box-shadow: 1px 1px 10px 1px rgba(140,140,140,0.84);
  margin-top: 2.65rem;

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

  p{
    margin-top: 1rem;
    font-family: 'PT Sans', sans-serif;
    font-size: 1.4rem;
    color: #E9EAEB;
    text-decoration : underline;
    cursor: pointer;
  }
`