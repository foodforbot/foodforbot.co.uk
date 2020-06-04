import React from "react"
import styled from "styled-components"

const ButtonContainer = styled.div`
  display: inline-block;
  background-color: #ff4a4a;
  padding: 14px 28px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  text-align: center;
  text-align: center;
  color: #ffffff;
  transition: 0.3s;
  -webkit-box-shadow: 0px 5px 20px -10px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 5px 20px -10px rgba(0, 0, 0, 0.57);
  cursor: pointer;
  &:hover {
    color: #ff4a4a;
    background-color: #ffffff;
  }
  &:active {
    -webkit-box-shadow: 0px 5px 10px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 10px -10px rgba(0, 0, 0, 0.57);
    transform: translateY(2px) translateX(-2px);
  }
`
//
export default function Button({ title, onClick }) {
  return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>
}
