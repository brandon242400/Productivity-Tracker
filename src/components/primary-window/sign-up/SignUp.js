import React, { Component } from "react";
import SignUpDisplay from "./SignUpDisplay";
import LogIn from "../log-in/LogIn";
// import UserContext from "../../../context/UserContext";
import FirebaseContext from "../../../context/FirebaseContext";

export default class SignUp extends Component {
  static contextType = FirebaseContext;

  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      userPassword: "",
      userPasswordRetype: "",
      userName: ""
    };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleEnter);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEnter);
  }

  updateEmail = e => {
    this.setState({ userEmail: e.target.value });
  };

  updatePassword = e => {
    this.setState({ userPassword: e.target.value });
  };

  updatePasswordRetype = e => {
    this.setState({ userPasswordRetype: e.target.value });
  };

  updateName = e => {
    this.setState({ userName: e.target.value });
  };

  // Creates the new user's account using the provided email and password
  handleEnter = (e = "") => {
    if (e.keyCode === 13) {
      try {
        e.preventDefault();
      } catch (error) {}

      const { userEmail, userPassword } = this.state;
      this.context
        .auth()
        .createUserWithEmailAndPassword(userEmail.trim(), userPassword.trim())
        .catch(error => {
          let errorCode = error.code;
          // var errorMessage = error.message;
          if (errorCode === "auth/weak-password") {
            alert("The password is too weak.");
          } else if (errorCode === "auth/email-already-in-use") {
            alert("That email is already in use.");
          }
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
      <div
        style={{
          display: "flex"
        }}
      >
        <LogIn />
        <SignUpDisplay
          userEmail={this.state.userEmail}
          userPassword={this.state.userPassword}
          userPasswordRetype={this.state.userPasswordRetype}
          userName={this.state.userName}
          updateEmail={this.updateEmail}
          updatePassword={this.updatePassword}
          updatePasswordRetype={this.updatePasswordRetype}
          updateName={this.updateName}
          handleEnter={this.handleEnter}
        />
      </div>
    );
  }
}
