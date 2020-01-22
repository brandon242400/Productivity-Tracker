import React from "react";
import AppDisplay from "./AppDisplay";
import { getTodaysDate } from "./reused-functions/Functions";
import { ActivityProvider } from "./context/ActivityContext";
import fire from "./components/firebase/Firebase";
import UserContext from "./context/UserContext";

// Keeps track of all the activities completed by the user using the Firestore database.
export default class AppLogicDatabase extends React.Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      all_completed_activities: [],
      listUpdated: false,
      addCompletedActivity: this.addCompletedActivity,
      removeCompletedActivity: this.removeCompletedActivity,
      addInstanceToActivity: this.addInstanceToActivity
    };
  }

  componentDidMount() {
    if (!this.state.listUpdated && this.context) this.updateActivityList();
  }

  componentDidUpdate() {
    if (!this.state.listUpdated && this.context) this.updateActivityList();
  }

  // Sets the state's activity list to the user's list in the database.
  updateActivityList = () => {
    let ID = this.context.uid;
    let docRef = fire
      .firestore()
      .collection("users")
      .doc(ID);
    docRef.get().then(snap => {
      try {
        this.setState(() => ({
          all_completed_activities: snap.data().activities,
          listUpdated: true
        }));
      } catch (error) {
        this.setState(() => ({
          all_completed_activities: [],
          listUpdated: true
        }));
      }
    });
  };

  // Updates the activity list in the user's database to the list provided.
  updateDatabase = list => {
    list = JSON.parse(JSON.stringify(list));
    const UID = this.context.uid;
    let docRef = fire
      .firestore()
      .collection("users")
      .doc(UID);
    docRef.update({
      activities: list
    });
  };

  addCompletedActivity = activity => {
    let list = this.state.all_completed_activities;
    list.unshift(activity);
    this.updateDatabase(list);
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
    this.updateDatabase(list);
    this.setState({ all_completed_activities: list });
  };

  addInstanceToActivity = (activityObject, duration) => {
    let list = this.state.all_completed_activities;
    let activity = JSON.parse(JSON.stringify(activityObject));
    activity.timeSpentDoing = duration;
    activity.dateUsed = getTodaysDate();
    activity.timeUsed = new Date().getTime();

    list.push(activity);

    this.updateDatabase(list);
    this.setState({ all_completed_activities: list });
  };

  render() {
    return (
      <>
        <ActivityProvider value={this.state}>
          <AppDisplay />
        </ActivityProvider>
      </>
    );
  }
}
