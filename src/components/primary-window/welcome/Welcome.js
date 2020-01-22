import React, { Component } from "react";
import { Container, Header } from "./WelcomeStyles";

export default class Welcome extends Component {
  render() {
    return (
      <Container>
        <Header>Welcome to your Productivity Tracker</Header>
      </Container>
    );
  }
}
