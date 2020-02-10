import React from "react";
import "./App.css";
import AppLogicLocal from "./AppLogicLocal";
import AppLogicDatabase from "./AppLogicDatabase";
import fire from "./components/firebase/Firebase";
import { UserProvider } from "./context/UserContext";
import { UserVisitedProvider } from "./context/UserVisitedContext";

// Takes care of user authentication and passes the user object, (if there is one), throughout the app via context.

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      userVisited: false,
      logicComponent: <></>
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    // localStorage.clear();
    if (localStorage.getItem("pt-user-visited"))
      this.setState(() => ({ userVisited: true }));
    this.authListener();
  }

  // Listens for changes in the user account and assigns the App's logic component accordingly.
  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user,
          logicComponent: <AppLogicDatabase />
        });
        this.followSignInInstructions(user.uid);
      } else {
        this.setState({
          user,
          logicComponent: <AppLogicLocal />
        });
      }
    });
  }

  // Grabs and follows the instructions set in localStorage (if any)
  followSignInInstructions = UID => {
    let userName = null;
    if (localStorage.getItem("productivity-tracker-instructions")) {
      let instructions = JSON.parse(
        localStorage.getItem("productivity-tracker-instructions")
      );
      localStorage.removeItem("productivity-tracker-instructions");

      if (instructions.userName) {
        fire.auth().currentUser.updateProfile({
          displayName: instructions.userName
        });
        userName = instructions.userName;
      }
      if (instructions.goToHomePage) {
        window.location.replace(window.location.href.replace("/sign-up", "/"));
      }
    }
    this.generateUserDatabase(UID, userName);
  };

  // Creates folder for user in Firestore database if one doesn't exist
  generateUserDatabase = (UID, userName) => {
    let docRef = fire
      .firestore()
      .collection("users")
      .doc(UID);
    docRef.get().then(doc => {
      if (!doc.exists) {
        docRef.set({
          name: userName,
          email: this.state.user.email,
          activities: []
        });
      }
    });
  };

  setOrGetUserVisited = (userVisited = null) => {
    if (userVisited === null) return this.state.userVisited;
    else {
      this.setState(() => ({ userVisited: userVisited }));
      return userVisited;
    }
  };

  render() {
    return (
      <>
        <UserProvider value={JSON.parse(JSON.stringify(this.state.user))}>
          <UserVisitedProvider value={this.setOrGetUserVisited}>
            {this.state.logicComponent}
          </UserVisitedProvider>
        </UserProvider>
        {/* <footer id="site-footer">
          <p>
            To see the source code for this site, visit the github page
            <a href="#"> here</a>
          </p>
        </footer> */}
      </>
    );
  }
}
