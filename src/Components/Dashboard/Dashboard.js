import React from "react";
import DashBoardMobile from "./DashboardMobile";
import DashBoardDesktop from "./DashboardDesktop";
import MediaQuery from "react-responsive";


export default function DashBoard(){

  return(
    <>
    <MediaQuery maxWidth={1023}>
      <DashBoardMobile/>
    </MediaQuery>
    <MediaQuery minWidth={1024}>
      <DashBoardDesktop/>
    </MediaQuery>
    </>
  )
}