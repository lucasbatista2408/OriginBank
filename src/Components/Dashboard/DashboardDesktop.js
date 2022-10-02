import React from "react";


export default function DashBoardDesktop(){

  const name = localStorage.getItem("first_name")

  return(
    <>
    <h1>DashBoard Desktop</h1>
    <h1>Hello {name} </h1>
    </>
  )
}