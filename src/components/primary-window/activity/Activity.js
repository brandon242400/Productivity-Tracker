import React from "react";
import CompletedActivityDisplayCard from "./CompletedActivityDisplayCard";
import ActivityContext from "../../../context/ActivityContext";

export default function Activity(props) {
  const { removeCompletedActivity, addInstanceToActivity } = React.useContext(
    ActivityContext
  );

  return (
    <>
      <CompletedActivityDisplayCard
        activity={props.activity}
        removeActivity={removeCompletedActivity}
        addInstanceToActivity={addInstanceToActivity}
      />
    </>
  );
}
/*
const sampleActivity = {
  name: "First Activity",
  description: "The first thing I did!",
  timeSpentDoing: minutes,
  dateUsed: "Formatted Date mm/dd/yyyy",
  timeUsed: new Date().getTime(),
  rating: num,
  ID: "activity-" + num
};
*/
