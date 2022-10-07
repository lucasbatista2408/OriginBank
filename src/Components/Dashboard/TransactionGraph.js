import {React, useEffect, useState} from "react";
import axios from "axios"
import styled from "styled-components";
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,  
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { purpleC, white } from "../../Utils/colors";
import { getAllTransaction } from "./Functions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function TransactionGraph(){

  const [info, setInfo] = useState([])
  useEffect(() => {
    getAllTransaction(setInfo, 10);
  }, [])
  

  const options = {
    responsive: true,
    scales: {
      y:{
        grid:{
          display: false
        },
        ticks:{
          display: false
        }
      },
      x:{
        grid:{
          display: false
        },
        ticks: {
          color: `${purpleC}`
        }
      }
    },
    elements:{
      line:{
        tension:0.3,
      }
    },
    maintainAspectRatio: false,
    plugins:{
      legend:{
        display: false
      }
    }
  };

  const reverse = Array.from(info).reverse();

  const debit = reverse.filter(value => value.type !== "deposit")
  const deposit = reverse.filter(value => value.type !== "debit")
  const labels = debit.map((value,key) => value.date);

  const data = {
    labels,
    datasets: [
      {
        label: 'Debit',
        data: debit.map((value,key) => value.amount),
        borderColor: `${purpleC}`,
        backgroundColor: `${purpleC}`,
      },
      {
        label: 'Deposit',
        data: deposit.map((value,key) => value.amount),
        borderColor: `${white}`,
        backgroundColor: `${white}`
      }
    ],
  };

  return(
    <GraphContainer>
      <Line options={options} data={data}/>
    </GraphContainer>
  )
}

const GraphContainer = styled.div`
  width: 100%;
  height: 20%;
  padding: 1rem;
  margin-top: 1rem
`
