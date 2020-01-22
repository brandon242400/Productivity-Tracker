import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrimaryWindowDisplay from "./PrimaryWindowDisplay";
import HomePage from "./home/HomePage";
import Welcome from "./welcome/Welcome";
import Login from "./log-in/LogIn";
import SignUp from "./sign-up/SignUp";
import * as Routes from "../../constants/routes";
import { ButtonContainer } from "../../styles/AppDisplayStyles";
import UserContext from "../../context/UserContext";
import fire from "../firebase/Firebase";

// Main display window. Handles routing between pages and other functions that require a broad scope.

function PrimaryWindow() {
  return (
    <Router>
      <SignupButton />
      <Switch>
        <Route exact path={Routes.HOME}>
          <PrimaryWindowDisplay
            pageComponent={<HomePage />}
            centerTitle={true}
          />
        </Route>
        <Route path={Routes.WELCOME}>
          <PrimaryWindowDisplay
            pageComponent={<Welcome />}
            centerTitle={false}
          />
        </Route>
        <Route path={Routes.LOGIN}>
          <PrimaryWindowDisplay pageComponent={<Login />} centerTitle={false} />
        </Route>
        <Route path={Routes.SIGN_UP}>
          <PrimaryWindowDisplay
            pageComponent={<SignUp />}
            centerTitle={false}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default PrimaryWindow;

// Sign-up/Login button for the top right of the screen

function SignupButton(props) {
  const userContext = React.useContext(UserContext);
  return (
    <>
      {userContext ? (
        <ButtonContainer onClick={() => fire.auth().signOut()}>
          <p>Log out</p>
        </ButtonContainer>
      ) : (
        <Link to="sign-up">
          <ButtonContainer>
            <p>Sign up/Login</p>
          </ButtonContainer>
        </Link>
      )}
    </>
  );
}
