import React from "react";
import App from "./App";
import {
  getActivityList as getCompletedList,
  setActivityList as setCompletedList
} from "./ActivityListManager";
import { ActivityProvider } from "./context/ActivityContext";

const COMPLETED_LIST_SAVE_NAME = "productivity-tracker-completed-activity-list";

// Keeps track of all the activities completed by the user.
export default class AppLogic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all_completed_activities: this.getSavedState(),
      addCompletedActivity: this.addCompletedActivity,
      removeCompletedActivity: this.removeCompletedActivity
    };
  }

  getSavedState = () => {
    let list = getCompletedList(COMPLETED_LIST_SAVE_NAME);
    return list ? list : [];
  };

  addCompletedActivity = activity => {
    let list = this.state.all_completed_activities;
    list.unshift(activity);
    setCompletedList(list, COMPLETED_LIST_SAVE_NAME);
    this.setState({ all_completed_activities: list });
  };

  removeCompletedActivity = activity => {
    let list = this.state.all_completed_activities;
    list = list.filter(act => {
      return act.lastUsedTime !== activity.lastUsedTime;
    });
    setCompletedList(list, COMPLETED_LIST_SAVE_NAME);
    this.setState({ all_completed_activities: list });
  };

  render() {
    return (
      <>
        {console.log("In AppLogic: ", this.state.all_completed_activities)}
        <ActivityProvider value={this.state}>
          <App addCompletedActivity={this.addCompletedActivity} />
        </ActivityProvider>
      </>
    );
  }
}
