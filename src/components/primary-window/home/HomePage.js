import React, { Component } from "react";
import HomePageDisplay from "./HomePageDisplay";
import ActivityContext from "../../../context/ActivityContext";
import {
  getTodaysScore,
  getTodaysActivities
} from "../../../reused-functions/Functions";
import Activity from "../activity/Activity";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed_activities: [],
      activities: []
    };
  }

  componentDidMount() {
    if (this.compareWithContext())
      this.setState({
        completed_activities: this.context.all_completed_activities,
        activities: this.getTodaysActivities(
          this.context.all_completed_activities
        )
      });
  }

  componentDidUpdate() {
    if (this.compareWithContext())
      this.setState({
        completed_activities: this.context.all_completed_activities,
        activities: this.getTodaysActivities(
          this.context.all_completed_activities
        )
      });
  }

  // Returns true if the context's value is different from App's state, causing an update.
  compareWithContext = () => {
    let thisList = JSON.stringify(this.state.completed_activities);
    let contextList = JSON.stringify(this.context.all_completed_activities);
    if (thisList !== contextList) return true;
    return false;
  };

  // Returns activities that were completed today
  getTodaysActivities = (list = this.state.completed_activities) => {
    return getTodaysActivities(list).map(activity => {
      return <Activity activity={activity} />;
    });
  };

  render() {
    // localStorage.clear();
    return (
      <>
        <HomePageDisplay
          // activities={this.getTodaysActivities()}
          // score={getTodaysScore(this.state.completed_activities).toFixed(0)}
          activities={this.getTodaysActivities(sampleActivitys)}
          score={getTodaysScore(sampleActivitys)}
        />
      </>
    );
  }
}
HomePage.contextType = ActivityContext;

const sampleActivitys = [
  {
    name: "First Activity",
    description: "The first thing I did!",
    timeSpentDoing: [
      {
        date: "01/05/2020",
        duration: 25
      },
      {
        date: "01/05/2020",
        duration: 35
      }
    ],
    lastUsedDate: "01/05/2020",
    lastUsedTime: new Date().getTime(),
    rating: 100
  },
  {
    name: "Second Activity",
    description: "The second thing I did!",
    timeSpentDoing: [
      {
        date: "01/05/2020",
        duration: 60
      },
      {
        date: "01/05/2020",
        duration: 135
      },
      {
        date: "01/05/2020",
        duration: 15
      }
    ],
    lastUsedDate: "01/05/2020",
    lastUsedTime: new Date().getTime(),
    rating: 75
  }
];
