import React, { Component } from "react";
import HomePageDisplay from "./HomePageDisplay";
import ActivityContext from "../../../context/ActivityContext";
import {
  getTodaysScore,
  getTodaysActivities
} from "../../../reused-functions/Functions";
import Activity from "../activity/Activity";
import AddActivity from "../add-activity/AddActivity";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed_activities: [],
      contexts_activity_list: []
    };
  }

  componentDidMount() {
    this.setState({
      completed_activities: getTodaysActivities(
        this.context.all_completed_activities
      ),
      contexts_activity_list: JSON.parse(
        JSON.stringify(this.context.all_completed_activities)
      )
    });
  }

  componentDidUpdate() {
    if (this.compareWithContext()) this.updateActivityList();
  }

  updateActivityList = () => {
    let contextList = JSON.parse(
      JSON.stringify(this.context.all_completed_activities)
    );
    this.setState({
      completed_activities: getTodaysActivities(contextList),
      contexts_activity_list: contextList
    });
  };

  // Returns true if the context's value is different from App's state, causing an update.
  compareWithContext = () => {
    let thisList = JSON.stringify(this.state.contexts_activity_list);
    let contextList = JSON.stringify(this.context.all_completed_activities);
    if (thisList !== contextList) return true;
    return false;
  };

  // Returns activities that were completed today
  getTodaysActivities = (list = this.state.completed_activities) => {
    let x = 0;
    return getTodaysActivities(list).map(activity => {
      return (
        <Activity
          activity={activity}
          completedActivity={true}
          key={x++}
          addInstanceToActivity={this.context.addInstanceToActivity}
        />
      );
    });
  };

  render() {
    // localStorage.clear();
    // console.log("In HomePage: ", this.state.completed_activities);
    return (
      <>
        <AddActivity />
        <HomePageDisplay
          activities={this.getTodaysActivities()}
          score={getTodaysScore(this.context.all_completed_activities).toFixed(
            0
          )}
        />
      </>
    );
  }
}
HomePage.contextType = ActivityContext;

// function HomePage() {
//   return (
//     <>
//       <ActivityConsumer>
//         {value => <HomePageContainer context={value} />}
//       </ActivityConsumer>
//     </>
//   );
// }
