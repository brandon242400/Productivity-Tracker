import React from "react";
import { Container } from "./styles/AppDisplayStyles";
import PrimaryWindow from "./components/primary-window/PrimaryWindow";

// UI portion of App.js

export default function AppDisplay(props) {
  return (
    <Container>
      <PrimaryWindow />
    </Container>
  );
}
