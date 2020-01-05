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
    this.state = { all_completed_activities: [] };
  }

  componentDidMount() {
    let list = getCompletedList(COMPLETED_LIST_SAVE_NAME);
    if (list) {
      this.setState({ all_completed_activities: list });
    } else {
      this.setState({ all_completed_activities: [] });
    }
  }

  addCompletedActivity = activity => {
    let list = JSON.parse(JSON.stringify(this.state.all_completed_activities));
    list.unshift(activity);
    setCompletedList(list, COMPLETED_LIST_SAVE_NAME);
    this.setState({ all_completed_activities: list });
  };

  render() {
    return (
      <>
        {console.log(this.state.all_completed_activities)}
        <ActivityProvider value={this.state}>
          <App addCompletedActivity={this.addCompletedActivity} />
        </ActivityProvider>
      </>
    );
  }
}
