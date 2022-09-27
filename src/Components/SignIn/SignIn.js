import React from "react";
import SignInMobile from "./SignInMobile";
import SignInDesktop from "./SignInDesktop";
import MediaQuery from "react-responsive";
export default function SignIn(){
  
  return(
    <>
    <MediaQuery maxWidth={1023}>
      <SignInMobile/>
    </MediaQuery>
    <MediaQuery minWidth={1024}>
      <SignInDesktop/>
    </MediaQuery>
    </>
  )
}