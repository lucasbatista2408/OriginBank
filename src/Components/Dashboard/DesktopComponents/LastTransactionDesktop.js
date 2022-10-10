import { purple } from "@mui/material/colors";
import { React, useEffect, useState } from "react";
import styled from "styled-components"
import { purpleC, white } from "../../../Utils/colors";
import { Gudea } from "../../../Utils/fonts";
import { getLastTransaction } from "../Functions";

export default function LastTransactionDesktop(){

  const [data, setData] = useState([])

  useEffect(() => {
    getLastTransaction(setData)
  }, [])
  


  return(
    <LastTransactionPage>
      <h1>Last Transaction</h1>
      <Transaction>
        <Info>
          <h1>{data.description}</h1>
          <p>{data.date}</p>
        </Info>
        { data.type === 'debit' ? 
        <Amount>
        R$ - {data.amount}
        </Amount> 
        :
        <Amount>
        R$ + {data.amount}
        </Amount>
      }
      </Transaction>
    </LastTransactionPage>
  )
}

const LastTransactionPage = styled.div`
  width: 100%;
  height: 30%;
  padding: 1rem;
  background-color: ${purpleC};
  border-radius: 16px;

  h1{
    font-family: ${Gudea};
    color: ${white};
    font-weight: 700;
    font-size: 1.4rem;
  }
`

const Transaction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0.8rem;
`

const Info = styled.div`

  h1{
    font-size: 1.2rem;
  }
  p{
    margin-top: 0.4rem;
    font-family: ${Gudea};
    font-size: 1.2rem;
    color: ${white}
  }

`

const Amount = styled.div`
  font-size:1.2rem;
  font-family: ${Gudea};
  color: ${white};
  margin-top: 0.8rem;
  font-weight: 700;
`