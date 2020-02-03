import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrimaryWindowDisplay from "./PrimaryWindowDisplay";
import HomePage from "./home/HomePage";
import Welcome from "./welcome/Welcome";
import SignUp from "./sign-up/SignUp";
import * as Routes from "../../constants/routes";
import UserContext from "../../context/UserContext";
import Menu from "../menu/NavBar";
import History from "./history/History";

// Main display window. Handles routing between pages and other functions that require a broad scope.

export default function PrimaryWindow() {
  const userContext = React.useContext(UserContext);

  // Takes user to the welcome page if it's their first time visiting.
  let URL = window.location.href;
  if (
    !URL.includes("/welcome") &&
    !localStorage.getItem("pt-user-visited") &&
    !userContext
  ) {
    URL =
      URL.split("/")
        .slice(0, -1)
        .join("/") + "/welcome";
    window.location.replace(URL);
  }

  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path={Routes.HOME}>
          {/* <SignupButton /> */}
          <PrimaryWindowDisplay pageComponent={HomePage} centerTitle={true} />
        </Route>
        <Route path={Routes.WELCOME}>
          <PrimaryWindowDisplay
            pageComponent={Welcome}
            centerTitle={false}
            dontShowTitle={
              localStorage.getItem("pt-user-visited") ? null : "dont show title"
            }
          />
        </Route>
        <Route path={Routes.HISTORY}>
          <PrimaryWindowDisplay pageComponent={History} centerTitle={false} />
        </Route>
        <Route path={Routes.SIGN_UP}>
          <PrimaryWindowDisplay pageComponent={SignUp} centerTitle={false} />
        </Route>
      </Switch>
    </Router>
  );
}
