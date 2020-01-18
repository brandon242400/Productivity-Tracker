import React from "react";
import {
  Container,
  Title,
  ColumnDisplay,
  CustomInput,
  CustomButton
} from "./SignUpStyles";

export default function SignUpDisplay(props) {
  return (
    <Container>
      <Title>Sign Up</Title>
      <ColumnDisplay>
        <CustomInput
          value={props.userName}
          onChange={props.updateName}
          onKeyDown={props.handleEnter}
          variant="outlined"
          label="Username"
        />
        <CustomInput
          value={props.userEmail}
          onChange={props.updateEmail}
          onKeyDown={props.handleEnter}
          variant="outlined"
          label="E-mail"
        />
        <CustomInput
          value={props.userPassword}
          onChange={props.updatePassword}
          onKeyDown={props.handleEnter}
          variant="outlined"
          label="Password"
        />
        <CustomInput
          value={props.userPasswordRetype}
          onChange={props.updatePasswordRetype}
          onKeyDown={props.handleEnter}
          variant="outlined"
          label="Verify Password"
        />
        <CustomButton
          variant="contained"
          color="default"
          onClick={() => props.handleEnter({ keyCode: 13 })}
        >
          Create Account
        </CustomButton>
      </ColumnDisplay>
    </Container>
  );
}

// userEmail={this.state.userEmail}
// userPassword={this.state.userPassword}
// userPasswordRetype={this.state.userPasswordRetype}
// userName={this.state.userName}
// updateEmail={this.updateEmail}
// updatePassword={this.updatePassword}
// updatePasswordRetype={this.updatePasswordRetype}
// updateName={this.updateName}
// handleEnter={this.handleEnter}
