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
      <div onClick={() => props.setSignUpListener()}>
        <Title>Sign Up</Title>
        <ColumnDisplay>
          <CustomInput
            value={props.userName}
            onChange={props.updateName}
            variant="outlined"
            label="Username"
          />
          <CustomInput
            value={props.userEmail}
            onChange={props.updateEmail}
            variant="outlined"
            label="E-mail"
          />
          <CustomInput
            value={props.userPassword}
            onChange={props.updatePassword}
            variant="outlined"
            label="Password"
            type="password"
          />
          <CustomInput
            value={props.userPasswordRetype}
            onChange={props.updatePasswordRetype}
            variant="outlined"
            label="Verify Password"
            type="password"
          />
          <CustomButton
            variant="contained"
            color="default"
            buttonname="Enter Button"
            onClick={props.handleEnter}
          >
            Create Account
          </CustomButton>
        </ColumnDisplay>
      </div>
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
