import React from "react";
import styled from "styled-components";
import axios from "axios"
import { AiFillPlusSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { purpleC, white } from "../../../Utils/colors";
import CardLayoutDesktop from "./CardLayoutDesktiop";
import { Gudea } from "../../../Utils/fonts";
import { WindowSharp } from "@mui/icons-material";

export default function ThirdColumn(){

  const navigate = useNavigate();

  function requestCard(e){
    e.preventDefault()
  
    const URI = process.env.REACT_APP_DATABASE_URI;
    const token = localStorage.getItem("token")
  
    const config = {
      headers: {
        'authorization': `Bearer ${token}` 
      }
    };
  
    const URL = `${URI}/new-card`
  
    const data = "request"
  
    const promise = axios.post(URL, data , config)
    promise
    .then( res => {
      alert("you have requested a new card")
      window.location.reload()
    })
    .catch(error => (
      console.log(error),
      console.log('error')
    ))
    }

  return(
    <ThirdColumnContainer>
      <CardContainer>
        <p>Your Cards</p>
        <CardList>
          <NewCard>
            <h1>Request a New Card</h1>
            <AddIcon onClick={requestCard}/>
          </NewCard>
          <CardLayoutDesktop/>
        </CardList>
      </CardContainer>
    </ThirdColumnContainer>
  )
}

const ThirdColumnContainer = styled.div`
  width: 24%;
  height: 100%;
`

const CardContainer = styled.div`
  padding: 0.6rem;
  height: 100%;
  background-color: ${white};
  border-radius: 16px;

  p{
    font-size: 1.4rem;
    font-family: ${Gudea};
    font-weight: 700;
    color: ${purpleC}
  }
`

const NewCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 0.4rem;
  border-radius: 16px;
  border: 3px solid ${purpleC};

  h1{
    font-size: 1.4rem;
    font-family: ${Gudea};
    font-weight: 700;
    color: ${purpleC}
  }
`

const CardList = styled.div`
  height: 95%;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`

const AddIcon = styled(AiFillPlusSquare)`
  font-size: 2.4rem;
  color: ${purpleC};
  cursor: pointer;
`