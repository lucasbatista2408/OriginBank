import React from "react";
import MediaQuery from "react-responsive";
import WelcomePageDesktop from "./WelcomePageDesktop";
import WelcomePageMobile from "./WelcomePageMobile";

export default function Welcome(){

    return(
        <>
            <MediaQuery maxWidth={1023}>
                <WelcomePageMobile/>
            </MediaQuery>
            <MediaQuery minWidth={1024}>
                <WelcomePageDesktop/>
            </MediaQuery>
        </>
    )
}