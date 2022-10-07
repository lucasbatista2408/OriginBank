import axios from "axios";
import { React, useState } from "react";

const URI = process.env.REACT_APP_DATABASE_URI;
const token = localStorage.getItem("token")

let config = {
  headers: {
    'Authorization': `Bearer ${token}` 
  }
}

export async function GetBalance(setBalance){
  const URL = `${URI}/all-tr`
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

export function getAllTransaction(setInfo, limiter){

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