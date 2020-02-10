import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
          <HomePage />
        </Route>
        <Route path={Routes.WELCOME}>
          <Welcome />
        </Route>
        <Route path={Routes.HISTORY}>
          <History />
        </Route>
        <Route path={Routes.SIGN_UP}>
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}
