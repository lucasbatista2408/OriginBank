import React, { useEffect, useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import styled from 'styled-components';
import { getCards, handleDelete, handleUnblock, handleBlock } from '../Functions';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { black, purpleC, white } from '../../../Utils/colors';
import { Gudea } from '../../../Utils/fonts';

export default function CardLayoutDesktop(){

    const [card,setCard] = useState([])

    console.log(card[0])

    const styles = {
      "&.MuiButton-contained":{
        bgcolor: "white",
        color: `${purpleC}`,
        fontWeight:"700",
        "&:active":{bgcolor:`${purpleC}`, color: "white"},
        "&:focus":{bgcolor:`${purpleC}`, color: "white"}
      },
    }

    useEffect(() => {
        getCards(setCard)
    }, [])
  

    return (
        <CardContainer>
          {card.map((value, key) =>
          <CardUnit>
            <Cards
            cvc={value.security_code}
            expiry={value.expiration_date}
            focused={true}
            name={value.holder_name}
            number={value.number}
          />
          {value.blocked === true ? 
          <CardInfo>
              <h1 style={{ color: "red" }}>Blocked</h1> 
              <h1>CVV:{value.security_code}</h1>
          </CardInfo>
          : 
          <CardInfo>
              <h1 style={{ color: "green" }}>Unblocked</h1> 
              <h1>CVV:{value.security_code}</h1>
          </CardInfo>}
          <Options variant="contained" aria-label="outlined button group">
            <Button sx={{
            color: `${purpleC}`,
            bgcolor: "white",
            fontWeight:"700",
            fontFamily:`${Gudea}`,
            "&:active":{bgcolor:`${purpleC}`, color: "white"},
            "&:focus":{bgcolor:`${purpleC}`, color: "white"},
            "&:hover":{bgcolor:`${purpleC}`, color: "white"}
            }} variant="contained" onClick={e => handleDelete(value.id)}> Delete </Button>
            <Button sx={{
              color: `${purpleC}`,
              bgcolor: "white",
              fontWeight:"700",
              fontFamily:`${Gudea}`,
              "&:active":{bgcolor:`${purpleC}`, color: "white"},
              "&:focus":{bgcolor:`${purpleC}`, color: "white"},
              "&:hover":{bgcolor:`${purpleC}`, color: "white"}
            }} onClick={e => handleBlock(value.id)}> Block </Button>
            <Button sx={{
              color: `${purpleC}`,
              bgcolor: "white",
              fontWeight:"700",
              fontFamily:`${Gudea}`,
              "&:active":{bgcolor:`${purpleC}`, color: "white"},
              "&:focus":{bgcolor:`${purpleC}`, color: "white"},
              "&:hover":{bgcolor:`${purpleC}`, color: "white"}
            }} onClick={e => handleUnblock(value.id)}> Unblock </Button>
          </Options>
          </CardUnit>
          )}
        </CardContainer>
    )
}

const CardContainer = styled.div`
  margin-top: 1rem;
`

const CardUnit = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.6rem;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  padding-bottom: 0.4rem;

`

const Options = styled(ButtonGroup)`
  width: 100%;
  margin-top:0.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

const CardInfo = styled.div`
  font-weight: 700;
  font-family: ${Gudea};
  color: ${purpleC};
  width: 90%;
  height: 2rem;
  margin-left: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.2rem;
`