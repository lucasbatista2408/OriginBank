import {React, useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"

export default function SignUpMobile(){

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    picture: ''
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
    <h1>HelloWorld</h1>
  )
}