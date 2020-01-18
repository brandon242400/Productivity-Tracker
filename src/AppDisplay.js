import React from "react";
import { Container } from "./styles/AppDisplayStyles";
// eslint-disable-next-line no-unused-vars
import Menu from "./components/menu/Menu";
import PrimaryWindow from "./components/primary-window/PrimaryWindow";

// UI portion of App.js

export default function AppDisplay(props) {
  return (
    <Container>
      {/* <Menu /> */}
      <PrimaryWindow />
    </Container>
  );
}
