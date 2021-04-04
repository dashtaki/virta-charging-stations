import styled from "styled-components"
import React from "react"
import { IErrorProps } from "../../../interfaces/components/IErrorProps"

const Error = (props: IErrorProps) => {
  const { className } = props
  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <div className={className}>
      <h1>Oops!</h1>
      <button onClick={refreshPage}>Please try again</button>
    </div>
  )
}

export default styled(Error)`
  position: relative;
  height: calc(100vh - 10rem);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 236px;
    font-weight: 200;
    margin: 0;
    color: #211b19;
    text-transform: uppercase;
  }

  button {
    font-family: "Montserrat", sans-serif;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    padding: 13px 23px;
    background: #ff6300;
    font-size: 18px;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
    border: 0;
    cursor: pointer;
  }

  button:hover {
    color: #ff6300;
    background: #211b19;
  }
`
