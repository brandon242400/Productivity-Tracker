import React from "react";
import ActivityDisplay from "./ActivityDisplay";
import ActivityContext from "../../../context/ActivityContext";

export default function Activity(props) {
  const { removeCompletedActivity } = React.useContext(ActivityContext);

  return (
    <div>
      <ActivityDisplay
        activity={props.activity}
        removeActivity={removeCompletedActivity}
      />
    </div>
  );
}
/*
const sampleActivity = {
  name: "First Activity",
  description: "The first thing I did!",
  timeSpentDoing, [
    {
      date: "mm/dd/yyyy",
      duration: num in minutes
    },
    {
      date: "mm/dd/yyyy",
      duration: num
    }
  ]
  lastUsedDate: "Formatted Date",
  lastUsedTime: new Date().getTime(),
  rating: num
};
*/
