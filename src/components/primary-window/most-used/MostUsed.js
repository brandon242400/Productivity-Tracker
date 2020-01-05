import React, { Component } from "react";
import { setActivityList, getActivityList } from "../../../ActivityListManager";
import MostUsedDisplay from "./MostUsedDisplay";
import AddActivity from "../add-activity/AddActivity";

export default class MostUsed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activity_list: []
    };
  }

  componentDidMount() {
    if (getActivityList()) {
      let sortedList = getActivityList().sort(
        (a, b) => a.timeSpendDoing.length - b.timeSpendDoing.length
      );
      this.setState({ activity_list: sortedList });
    }
  }

  addActivity = activity => {
    let list = this.state.activity_list;
    list.push(activity);
    setActivityList(list);
    this.setState({ activity_list: list });
    if (activity.timeSpendDoing[0].duration !== 0) {
      this.props.addCompletedActivity(activity);
    } 
  };

  removeActivity = activity => {
    let list = this.state.activity_list;
    let newList = [];
    for (let act of list) {
      if (act.lastUsedTime === activity.lastUsedTime) continue;
      else newList.push(act);
    }
    setActivityList(newList);
    this.setState({ activity_list: newList });
  };

  render() {
    // localStorage.clear();
    return (
      <>
        <AddActivity addActivity={this.addActivity} />
        <MostUsedDisplay
          activityList={this.state.activity_list}
          removeActivity={this.removeActivity}
        />
      </>
    );
  }
}
