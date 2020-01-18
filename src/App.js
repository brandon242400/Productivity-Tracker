import React from "react";
import "./App.css";
import AppLogic from "./AppLogic";
import fire from "./components/firebase/Firebase";
import { FirebaseProvider } from "./context/FirebaseContext";
import { UserProvider } from "./context/UserContext";

// Logic portion of App along with AppLogic.js. Handles some Firebase related tasks.

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      // console.log(user);
      if (user) {
        this.setState({ user });
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        // localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <>
        <FirebaseProvider value={fire}>
          <UserProvider value={JSON.parse(JSON.stringify(this.state.user))}>
            <AppLogic />
          </UserProvider>
        </FirebaseProvider>
      </>
    );
  }
}
