import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getActivityList, setActivityList } from "../../ActivityListManager";
import PrimaryWindowDisplay from "./PrimaryWindowDisplay";
import MostUsedActivities from "./most-used/MostUsed";
import ActivityHistory from "./history/ActivityHistory";
import Settings from "./settings/Settings";
import Login from "./log-in/LogIn";
import SignUp from "./sign-up/SignUp";
import * as Routes from "../../constants/routes";

// Main display window. Handles routing between pages and other functions that require a broad scope.

export default class PrimaryWindow extends React.Component {
  addActivity = activity => {
    let list = getActivityList();
    list.unshift(activity);
    setActivityList(list);
    if (activity.timeSpendDoing.length !== 0) {
      this.props.addCompletedActivity(activity);
    }
    this.forceUpdate();
  };

  render() {
    // localStorage.clear();
    return (
      <>
        <Router>
          <Switch>
            <Route exact path={Routes.HOME}>
              <PrimaryWindowDisplay
                pageComponent={
                  <MostUsedActivities addActivity={this.addActivity} />
                }
              />
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
