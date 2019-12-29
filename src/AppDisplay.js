import React from "react";
import PrimaryWindow from "./components/primary-window/PrimaryWindow";

// UI portion of App.js

export default function AppDisplay() {
  return (
    <div className="App">
      <h1>Productivity Tracker</h1>
      <PrimaryWindow />
    </div>
  );
}
