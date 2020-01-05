import React from "react";
import "./App.css";
import AppDisplay from "./AppDisplay";
import ActivityContext from "./context/ActivityContext";
import { getTodaysScore } from "./reused-functions/Functions";

// Logic portion of App along with AppLogic.js to help keep things from getting too cluttered. The UI portion is AppDisplay.js

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed_activities: [],
      todays_score: 0
    };
  }

  componentDidMount() {
    if (this.compareWithContext())
      this.setState({
        completed_activities: this.context.all_completed_activities,
        todays_score: getTodaysScore(this.context.all_completed_activities)
      });
  }

  componentDidUpdate() {
    if (this.compareWithContext())
      this.setState({
        completed_activities: this.context.all_completed_activities,
        todays_score: getTodaysScore(this.context.all_completed_activities)
      });
  }

  // Returns true if the context's value is different from App's state, causing an update.
  compareWithContext = () => {
    let thisList = JSON.stringify(this.state.completed_activities);
    let contextList = JSON.stringify(this.context.all_completed_activities);
    if (thisList !== contextList) return true;
    return false;
  };

  render() {
    return (
      <>
        {/* <FirebaseContext.Provider value={new Firebase()}> */}
        <AppDisplay addCompletedActivity={this.props.addCompletedActivity} />
        {/* </FirebaseContext.Provider> */}
      </>
    );
  }
}
App.contextType = ActivityContext;
