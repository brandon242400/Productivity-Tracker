import React from "react";
import "./App.css";
import AppDisplay from "./AppDisplay";

// Logic portion of App.js. The UI portion is AppDisplay.js

export default class App extends React.Component {
  render() {
    return (
      <>
        <AppDisplay />
      </>
    );
  }
}
