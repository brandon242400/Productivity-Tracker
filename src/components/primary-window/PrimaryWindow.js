import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrimaryWindowDisplay from "./PrimaryWindowDisplay";
import HomePage from "./home/HomePage";
import ActivityHistory from "./history/ActivityHistory";
import Settings from "./settings/Settings";
import Login from "./log-in/LogIn";
import SignUp from "./sign-up/SignUp";
import * as Routes from "../../constants/routes";
import { ButtonContainer } from "../../styles/AppDisplayStyles";
import UserContext from "../../context/UserContext";
import FirebaseContext from "../../context/FirebaseContext";

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
        <Route path={Routes.HISTORY}>
          <PrimaryWindowDisplay
            pageComponent={<ActivityHistory />}
            centerTitle={true}
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
        <Route path={Routes.SETTINGS}>
          <PrimaryWindowDisplay
            pageComponent={<Settings />}
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
  const firebaseContext = React.useContext(FirebaseContext);
  return (
    <>
      {userContext ? (
        <ButtonContainer onClick={() => firebaseContext.auth().signOut()}>
          <p>Log out</p>
        </ButtonContainer>
      ) : (
        <Link to="sign-up">
          <ButtonContainer>
            <p>
              Sign up/
              {/* <br /> */}
              Login
            </p>
          </ButtonContainer>
        </Link>
      )}
    </>
  );
}
