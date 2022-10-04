import React from "react";
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
          color: 'purple'
        }
      }
    },
    elements:{
      line:{
        tension:0.3
      }
    },
    maintainAspectRatio: false,
    plugins:{
      legend:{
        display: false
      }
    }
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [10,20,30,20,10,5,10],
        borderColor: 'purple',
        backgroundColor: 'purple',
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
  margin-top: 1rem;
  border-bottom: 2px solid purple;
`
