import React from "react";
import PrimaryWindow from "./components/primary-window/PrimaryWindow";
import Menu from "./components/menu/Menu";

// UI portion of App.js

export default function AppDisplay(props) {
  const Container = props.getDivStyle();

  return (
    <Container>
      <Menu />
      <h1>Productivity Tracker</h1>
      <PrimaryWindow addCompletedActivity={props.addCompletedActivity} />
    </Container>
  );
}
