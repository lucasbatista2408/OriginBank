import React from "react"
import { getCards, handleDelete, handleUnblock, handleBlock } from '../Functions';
import { black, purpleC, white } from '../../../Utils/colors';
import { Gudea } from '../../../Utils/fonts';
import styled from "styled-components";

export default function MaterialButtons(props){

  const value = props.valueId

return (
  <ButtonGroup>
    <button onClick={e => handleDelete(value)}>Delete</button>
    <button onClick={e => handleBlock(value)}>Block</button>
    <button onClick={e => handleUnblock(value)}>Unblock</button>
  </ButtonGroup>
)
}

const ButtonGroup = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  button{
    padding: 10px 16px;
    outline: none;
    border: none;
    border-right: 1px solid ${white};
    border-top: 1px solid ${white};
    border-bottom: 1px solid ${white};
    cursor: pointer;
    background-color: ${purpleC};
    color: white;
    font-weight: 700;
    transition: 0.5s ease-in-out;
  }

  button:hover {
  background-color: ${white};
  color: ${purpleC};
  }

  button:first-child {
  border-left: 1px solid ${white};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  }
  button:last-child {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  }
`

