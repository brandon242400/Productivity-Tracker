import React, { Component } from "react";
import HistoryDisplay from "./HistoryDisplay";
import ActivityContext from "../../../context/ActivityContext";
import {
  parseFormattedDate,
  getTodaysDate
} from "../../../reused-functions/Functions";
import { testActivities } from "./HistoryStyles";

export default class History extends Component {
  static contextType = ActivityContext;

  constructor() {
    super();
    this.state = {
      activityList: [],
      contextsActivityList: []
    };
  }

  componentDidMount() {
    this.setState({
      activityList: JSON.parse(
        JSON.stringify(this.context.all_completed_activities)
      )
    });
    console.log(this.context.all_completed_activities);
  }

  componentDidUpdate() {
    if (this.compareWithContext()) this.updateActivityList();
  }

  updateActivityList = () => {
    let contextList = JSON.parse(
      JSON.stringify(this.context.all_completed_activities)
    );
    this.setState({
      activityList: JSON.parse(JSON.stringify(contextList)),
      contextsActivityList: contextList
    });
  };

  // Returns true if the context's value is different from App's state, causing an update.
  compareWithContext = () => {
    let thisList = JSON.stringify(this.state.contextsActivityList);
    let contextList = JSON.stringify(this.context.all_completed_activities);
    if (thisList !== contextList) return true;
    return false;
  };

  getDateValueBeforeToday = days => {
    let date = new Date();
    let last = new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
    let day = last.getDate();
    let month = last.getMonth() + 1;
    let year = last.getFullYear();
    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;
    return `${month}/${day}/${year}`;
  };

  getActivitiesFromDateRange = (startDate, endDate = getTodaysDate()) => {
    startDate = this.getTimeOfDate(startDate);
    endDate = this.getTimeOfDate(endDate);
    // + 24 * 60 * 60 * 1000;

    let activitiesInRange = [];

    for (let act of this.state.activityList) {
      let actDateObj = parseFormattedDate(act.dateUsed);
      let actDate = new Date(
        actDateObj.year,
        actDateObj.month,
        actDateObj.day
      ).valueOf();
      if (actDate >= startDate && actDate <= endDate)
        activitiesInRange.push(act);
    }

    return activitiesInRange;
  };

  getTimeOfDate = date => {
    date = parseFormattedDate(date);
    return new Date(date.year, date.month, date.day).valueOf();
  };

  // Returns data array for graph to use
  getActivityDataFromDateRange = (startDate, endDate = getTodaysDate()) => {
    let activities = this.getActivitiesFromDateRange(startDate, endDate);
    activities.sort((a, b) => a.timeUsed - b.timeUsed);

    let startTime = this.getTimeOfDate(startDate);
    let endTime = this.getTimeOfDate(endDate);

    // Creates data array and enters each day within the date range
    let data = [];
    while (startTime <= endTime) {
      data[data.length] = {
        date: startDate,
        score: 0
      };
      let tempDate = this.getTimeOfDate(startDate);
      tempDate = new Date(tempDate + 24 * 60 * 60 * 1000);
      startDate = getTodaysDate(tempDate);
      startTime = this.getTimeOfDate(startDate);
    }

    // Cycling through activities in date range and adding score to each matching date in data array
    for (let x = 0; x < data.length; x++) {
      for (let activity of activities) {
        if (data[x].date === activity.dateUsed)
          data[x].score += activity.rating * (activity.timeSpentDoing / 60);
      }
    }

    return data;
  };

  render() {
    // let test = parseFormattedDate("01/03/1995");
    // for (let x of test) console.log(x);
    return (
      <>
        <HistoryDisplay
          getActivitiesFromDateRange={this.getActivitiesFromDateRange}
          getDateValueBeforeToday={this.getDateValueBeforeToday}
          getActivityDataFromDateRange={this.getActivityDataFromDateRange}
        />
      </>
    );
  }
}
