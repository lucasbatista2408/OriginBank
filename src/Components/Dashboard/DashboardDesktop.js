import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { white, black, purpleC } from "../../Utils/colors";
import { Gudea } from "../../Utils/fonts";
import { GetBalance } from "./Functions";
import {AiFillEye} from "react-icons/ai";
import {AiFillEyeInvisible} from "react-icons/ai";
import TransactionGraphDesktop from "./TransactionGraphDesktop";
import FirstColumn from "./DesktopComponents/FirstColumn";
import SecondColumn from "./DesktopComponents/SecondColumn";
import ThirdColumn from "./DesktopComponents/ThirdColumn";

export default function DashBoardDesktop(){

  return(
    <DesktopContainer>
      <FirstColumn/>
      <SecondColumn/>
      <ThirdColumn/>
    </DesktopContainer>
  )
}

const DesktopContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${purpleC};
  padding: 2rem;
  font-family: ${Gudea};
  display: flex;
  justify-content: space-between;
`

const FourthColumn = styled.div`
  width: 24%;
  height: 100%;
  background-color: white;
  border-radius: 16px;
`