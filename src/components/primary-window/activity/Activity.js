import React from "react";
import ActivityDisplay from "./ActivityDisplay";
import CompletedActivityDisplay from "./CompletedActivityDisplay";
import ActivityContext from "../../../context/ActivityContext";

export default function Activity(props) {
  const { removeCompletedActivity, addInstanceToActivity } = React.useContext(
    ActivityContext
  );

  return (
    <>
      {props.completedActivity ? (
        <CompletedActivityDisplay
          activity={props.activity}
          removeActivity={removeCompletedActivity}
          addInstanceToActivity={addInstanceToActivity}
        />
      ) : (
        <ActivityDisplay
          activity={props.activity}
          removeActivity={removeCompletedActivity}
        />
      )}
    </>
  );
}
/*
const sampleActivity = {
  name: "First Activity",
  description: "The first thing I did!",
  timeSpentDoing: minutes,
  dateUsed: "Formatted Date",
  timeUsed: new Date().getTime(),
  rating: num,
  ID: "activity-" + num
};
*/
