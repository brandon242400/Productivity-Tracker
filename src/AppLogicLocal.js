import React from "react";
import AppDisplay from "./AppDisplay";
import { getActivityList, setActivityList } from "./ActivityListManager";
import { getTodaysDate } from "./reused-functions/Functions";
import { ActivityProvider } from "./context/ActivityContext";

// Keeps track of all the activities completed by the user with localStorage.
// This component is used if the user isn't signed in to an account. Otherwise AppLogicDatabase is used.
export default class AppLogicLocal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      all_completed_activities: [],
      addCompletedActivity: this.addCompletedActivity,
      removeCompletedActivity: this.removeCompletedActivity,
      addInstanceToActivity: this.addInstanceToActivity
    };
  }

  componentDidMount() {
    this.setState({
      all_completed_activities: getActivityList() ? getActivityList() : []
    });
  }

  addCompletedActivity = activity => {
    let list = this.state.all_completed_activities;
    list.push(activity);
    setActivityList(list);
    this.setState({ all_completed_activities: list });
  };

  removeCompletedActivity = activityToRemove => {
    let oldList = this.state.all_completed_activities;
    let list = [];
    for (let item of oldList) {
      if (
        item.name === activityToRemove.name &&
        item.description === activityToRemove.description &&
        item.timeSpentDoing === activityToRemove.timeSpentDoing &&
        item.dateUsed === activityToRemove.dateUsed &&
        item.timeUsed === activityToRemove.timeUsed &&
        item.rating === activityToRemove.rating &&
        item.ID === activityToRemove.ID
      )
        continue;
      else list.push(item);
    }
    setActivityList(list);
    this.setState({ all_completed_activities: list });
  };

  addInstanceToActivity = (activityObject, duration) => {
    let list = this.state.all_completed_activities;
    let activity = JSON.parse(JSON.stringify(activityObject));
    activity.timeSpentDoing = duration;
    activity.dateUsed = getTodaysDate();
    activity.timeUsed = new Date().getTime();

    list.push(activity);

    setActivityList(list);
    this.setState(() => ({ all_completed_activities: list }));
  };

  render() {
    return (
      <>
        {/* {console.log("In AppLogic: ", this.state.all_completed_activities)} */}
        <ActivityProvider value={this.state}>
          <AppDisplay />
        </ActivityProvider>
      </>
    );
  }
}
