import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrimaryWindowDisplay from "./PrimaryWindowDisplay";
import HomePage from "./home/HomePage";
import ActivityHistory from "./history/ActivityHistory";
import Settings from "./settings/Settings";
import Login from "./log-in/LogIn";
import SignUp from "./sign-up/SignUp";
import AddActivity from "./add-activity/AddActivity";
import * as Routes from "../../constants/routes";

// Main display window. Handles routing between pages and other functions that require a broad scope.

export default class PrimaryWindow extends React.Component {
  render() {
    // localStorage.clear();
    return (
      <>
        <Router>
          <Switch>
            <Route exact path={Routes.HOME}>
              <AddActivity
                addCompletedActivity={this.props.addCompletedActivity}
              />
              <PrimaryWindowDisplay pageComponent={<HomePage />} />
            </Route>
            <Route path={Routes.HISTORY}>
              <PrimaryWindowDisplay pageComponent={<ActivityHistory />} />
            </Route>
            <Route path={Routes.LOGIN}>
              <PrimaryWindowDisplay pageComponent={<Login />} />
            </Route>
            <Route path={Routes.SIGN_UP}>
              <PrimaryWindowDisplay pageComponent={<SignUp />} />
            </Route>
            <Route path={Routes.SETTINGS}>
              <PrimaryWindowDisplay pageComponent={<Settings />} />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
