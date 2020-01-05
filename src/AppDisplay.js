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
      <h1>Productivity Tracker</h1>
      <PrimaryWindow addCompletedActivity={props.addCompletedActivity} />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  margin-top: 2vh;
  border: 1px solid #333;
`;
