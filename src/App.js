import React from "react";
import styled from "styled-components";
import "./App.css";
import AppDisplay from "./AppDisplay";
import ActivityContext from "./context/ActivityContext";
// import {
//   Firebase,
//   FirebaseContext
// } from "./components/firebase/FirebaseContext";

// Logic and style portion of App.js along with AppLogic.js to help keep things from getting too cluttered. The UI portion is AppDisplay.js
// Imports Firebase and distributes throughout app using Context.

export default class App extends React.Component {
  static contextType = ActivityContext;

  constructor(props) {
    super(props);
    this.state = {
      completed_activities: []
    };
  }

  componentDidMount() {
    this.setState({
      completed_activities: this.context.all_completed_activities
    });
  }

  getDivStyle = () => {
    return styled.div`
      text-align: center;
      margin-top: 2vh;
      border: 1px solid #333;
    `;
  };

  render() {
    return (
      <>
        {/* <FirebaseContext.Provider value={new Firebase()}> */}
        <AppDisplay
          getDivStyle={this.getDivStyle}
          addCompletedActivity={this.props.addCompletedActivity}
        />
        {/* </FirebaseContext.Provider> */}
      </>
    );
  }
}
