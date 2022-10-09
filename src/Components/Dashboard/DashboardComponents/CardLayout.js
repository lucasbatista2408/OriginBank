import React, { useEffect, useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import styled from 'styled-components';
import { getCards } from '../Functions';

export default function CardLayout(){

    const [card,setCard] = useState([])

    console.log(card[0])

    useEffect(() => {
        getCards(setCard)
    }, [])
    

    return (
        <CardContainer>
          {card.map((value) =>
            <Cards
            cvc={value.security_code}
            expiry={value.expiration_date}
            focused={true}
            name={value.holder_name}
            number={value.number}
          />
          )}
        </CardContainer>
    )
}

const CardContainer = styled.div`
    margin-top: 1rem;
`