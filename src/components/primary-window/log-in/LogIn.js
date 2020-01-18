import React, { Component } from "react";
import FirebaseContext from "../../../context/FirebaseContext";
import {
  Container,
  Title,
  CustomButton,
  CustomInput,
  ColumnDisplay
} from "./LogInStyles";

export default class LogIn extends Component {
  static contextType = FirebaseContext;

  constructor() {
    super();
    this.state = {
      userEmail: "",
      userPassword: ""
    };
  }

  handleEnter = (e = { keyCode: 13 }) => {
    if (e.keyCode === 13) {
      try {
        e.preventDefault();
      } catch (error) {}
      // console.log(this.state);

      const { userEmail, userPassword } = this.state;
      this.context
        .auth()
        .signInWithEmailAndPassword(userEmail.trim(), userPassword.trim())
        .catch(error => {
          console.log(error.message);
          alert("Invalid username or password");
        });
      this.setState({
        userEmail: "",
        userPassword: "",
        userPasswordRetype: "",
        userName: ""
      });
    }
  };

  render() {
    return (
      <Container>
        <Title>Log In</Title>
        <ColumnDisplay>
          <CustomInput
            variant="outlined"
            label="E-mail"
            value={this.state.userEmail}
            onChange={e => this.setState({ userEmail: e.target.value })}
            onKeyDown={this.handleEnter}
          />
          <CustomInput
            variant="outlined"
            label="Password"
            value={this.state.userPassword}
            onChange={e => this.setState({ userPassword: e.target.value })}
            onKeyDown={this.handleEnter}
          />
          <CustomButton
            variant="contained"
            color="default"
            onClick={this.handleEnter}
          >
            Log in
          </CustomButton>
        </ColumnDisplay>
      </Container>
    );
  }
}
