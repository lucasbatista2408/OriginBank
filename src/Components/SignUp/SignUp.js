import React from "react";
import MediaQuery from "react-responsive";
import SignUpDesktop from "./SignUpDesktop";
import SignUpMobile from "./SignUpMobile";


export default function SignUp(){

    return(
        <>
        <MediaQuery maxWidth={1023}>
            <SignUpMobile/>
        </MediaQuery>
        <MediaQuery minWidth={1024}>
            <SignUpDesktop/>
        </MediaQuery>
        </>
    )
}