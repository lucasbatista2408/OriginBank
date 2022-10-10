import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = process.env.REACT_APP_DATABASE_URI;
const token = localStorage.getItem("token")

let config = {
  headers: {
    'Authorization': `Bearer ${token}` 
  }
}

export async function GetBalance(setBalance){
  const URL = `${URI}/balance`
  const {data} = await axios.get(URL, config)
  let saldo = 0

  Array.from(data).map(move => {
    if (move.type === "debit") {
        saldo -= parseFloat(move.amount);
    } else {
        saldo += parseFloat(move.amount);
    }
  })

  setBalance(`R$ ${saldo.toFixed(2)}`)
}

export function getLastTransaction(setData){

  const URL = `${URI}/last-tr`
  console.log(URL)
  const promise = axios.get(URL, config)
  promise
  .then( res => {
    setData(res.data)
  })
  .catch(error => (
    console.log('error')
  ))
}

export function getLastDeposit(setData){

  const URL = `${URI}/last-dp`
  console.log(URL)
  const promise = axios.get(URL, config)
  promise
  .then( res => {
    setData(res.data)
  })
  .catch(error => (
    console.log('error')
  ))
}

export function getLastTransfer(setData){

  const URL = `${URI}/last-transfer`
  console.log(URL)
  const promise = axios.get(URL, config)
  promise
  .then( res => {
    setData(res.data)
  })
  .catch(error => (
    console.log('error')
  ))
}

export function getAllTransaction(setInfo){

  const URL = `${URI}/all-tr`
  const promise = axios.get(URL, config)
  promise
  .then( res => {
    setInfo(res.data)
  })
  .catch(error => (
    console.log('error')
  ))
}

export function getCards(setCard){

  const URL = `${URI}/get-card`
  console.log(URL)
  const promise = axios.get(URL, config)
  promise
  .then( res => {
    setCard(res.data)
  })
  .catch(error => (
    console.log('error')
  ))
}

export function handleDelete(id){
  const URL = `${URI}/delete-card`

  const data = {headers: {
    'Authorization': `Bearer ${token}` 
  }, data: {id}}
  
  const promise = axios.delete(URL, data)
  console.log(promise)
  promise
  .then( res => {
    window.location.reload()
  })
  .catch(error => (
    console.log(error)
  ))
}

export function handleBlock(id){
  const URL = `${URI}/card/block`

  const data = {id}
  
  const promise = axios.put(URL, data, config)
  console.log(promise)
  promise
  .then( res => {
    window.location.reload()
  })
  .catch(error => (
    console.log(error)
  ))
}

export function handleUnblock(id){
  const URL = `${URI}/card/unblock`

  const data = {id}
  
  const promise = axios.put(URL, data, config)
  console.log(promise)
  promise
  .then( res => {
    window.location.reload()
  })
  .catch(error => (
    console.log(error)
  ))
}

export function postDeposit(deposit, setDeposit, navigate){

  const URI = process.env.REACT_APP_DATABASE_URI;
  const token = localStorage.getItem("token")
  let config = {
    headers: {
      'Authorization': `Bearer ${token}` 
    }
  }


  if(!deposit.description || !deposit.amount){
    return alert('Fill all the necessary fields')
  }

  const URL = `${URI}/new-tr`
  console.log(URL)
  const data = deposit;
  const promise = axios.post(URL, data, config)
  promise
  .then(res =>{
    navigate('/dashboard')
  })
  .catch(er => {
    console.log(er.response.data)
  })
}