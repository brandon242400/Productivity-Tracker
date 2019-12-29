import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrimaryWindowDisplay from "./PrimaryWindowDisplay";
import ActivityHistory from "./activity-history/ActivityHistory";

// Main display window. Handles routing between pages.

export default function PrimaryWindow() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <PrimaryWindowDisplay pageComponent={<ActivityHistory />} />
          </Route>
          <Route path="/activity-history">
            <PrimaryWindowDisplay pageComponent={<ActivityHistory />} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
