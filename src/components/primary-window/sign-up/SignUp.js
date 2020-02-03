import React, { Component } from "react";
import SignUpDisplay from "./SignUpDisplay";
import LogIn from "../log-in/LogIn";
import firebase from "../../firebase/Firebase";

export default class SignUp extends Component {
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
    // document.addEventListener("keydown", this.checkForEnterPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.checkForEnterPress);
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

  setSignUpListener = () => {
    document.addEventListener("keydown", this.checkForEnterPress);
  };

  removeSignUpListener = () => {
    document.removeEventListener("keydown", this.checkForEnterPress);
  };

  checkForEnterPress = e => {
    if (e.keyCode === 13) {
      this.handleEnter(e);
    }
  };

  // Creates the new user's account using the provided email and password
  handleEnter = e => {
    try {
      e.preventDefault();
    } catch (error) {
      console.log("Prevent Default Failed");
    }

    let passwordsMatch =
      this.state.userPassword === this.state.userPasswordRetype;
    let nothingNull = this.state.userName !== "";
    nothingNull = nothingNull && this.state.userPassword !== "";
    nothingNull = nothingNull && this.state.userEmail !== "";

    if (passwordsMatch && nothingNull) {
      const { userEmail, userPassword } = this.state;
      firebase
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
      let name = this.state.userName.trim();
      localStorage.setItem(
        "productivity-tracker-instructions",
        JSON.stringify({
          userName: name,
          goToHomePage: true
        })
      );
      this.setState({
        userEmail: "",
        userPassword: "",
        userPasswordRetype: "",
        userName: ""
      });
    } else if (!nothingNull) {
      alert("You must fill out all information to create an account");
    } else if (!passwordsMatch) {
      alert("Your passwords need to match");
    }
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          // border: "1px solid white",
          margin: "10vh auto"
        }}
      >
        <LogIn removeSignUpListener={this.removeSignUpListener} />
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
          setSignUpListener={this.setSignUpListener}
        />
      </div>
    );
  }
}
