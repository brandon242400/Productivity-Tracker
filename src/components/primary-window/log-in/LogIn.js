import React, { Component } from "react";
import fire from "../../firebase/Firebase";
import {
  OutterContainer,
  Container,
  Title,
  CustomButton,
  CustomInput,
  ColumnDisplay
} from "./LogInStyles";

export default class LogIn extends Component {
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
      localStorage.setItem(
        "productivity-tracker-instructions",
        JSON.stringify({ goToHomePage: true })
      );

      const { userEmail, userPassword } = this.state;
      fire
        .auth()
        .signInWithEmailAndPassword(userEmail.trim(), userPassword.trim())
        .catch(error => {
          console.log(error.message);
          localStorage.removeItem("productivity-tracker-instructions");
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
      // <OutterContainer>
      <Container>
        <Title>Log In</Title>
        <div onClick={() => this.props.removeSignUpListener()}>
          <ColumnDisplay>
            <CustomInput
              variant="outlined"
              label="E-mail"
              origin="login"
              value={this.state.userEmail}
              onChange={e => this.setState({ userEmail: e.target.value })}
              onKeyDown={this.handleEnter}
            />
            <CustomInput
              variant="outlined"
              label="Password"
              origin="login"
              type="password"
              value={this.state.userPassword}
              onChange={e => this.setState({ userPassword: e.target.value })}
              onKeyDown={this.handleEnter}
            />
            <CustomButton
              variant="contained"
              color="default"
              onClick={() => this.handleEnter({ keyCode: 13 })}
            >
              Log in
            </CustomButton>
          </ColumnDisplay>
        </div>
      </Container>
      // </OutterContainer>
    );
  }
}
