import React from "react";
import PrimaryWindow from "./components/primary-window/PrimaryWindow";
import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import Menu from "./components/menu/Menu";

// UI portion of App.js

export default function AppDisplay(props) {
  return (
    <Container>
      {/* <Menu /> */}
      <H1>Productivity Tracker</H1>
      <PrimaryWindow />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  margin-top: 2vh;
  border: 1px solid #333;
`;

const H1 = styled.h1`
  text-decoration: underline;
  border: 4px solid black;
  padding: 20px;
  border-radius: 20px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh;
  box-shadow: 3px 3px 3px 2px #222;
  background-color: #666;
`;
