import React from "react";
import AddActivityDisplay from "./AddActivityDisplay";
import AddActivityButton from "./AddActivityButton";
import { getTodaysDate } from "../../../reused-functions/Functions";
import { getValidActivityID } from "../../../ActivityListManager";
import ActivityContext from "../../../context/ActivityContext";

export default function AddActivity() {
  const [showDisplay, setShowDisplay] = React.useState(false);
  const { addCompletedActivity, all_completed_activities } = React.useContext(
    ActivityContext
  );

  const handleClick = e => {
    e.preventDefault();
    setShowDisplay(true);
  };

  const handleClickAway = () => {
    setShowDisplay(false);
  };

  const createActivity = (title, description, rating, timeSpent) => {
    const ID = getValidActivityID(all_completed_activities);
    addCompletedActivity(
      createActivityObject(title, description, rating, timeSpent, ID)
    );
  };

  React.useEffect(() => {
    const handleEscapePress = e => {
      if (e.keyCode === 27) handleClickAway();
    };
    document.addEventListener("keydown", handleEscapePress);
    return () => document.removeEventListener("keydown", handleEscapePress);
  });

  return (
    <>
      <AddActivityButton handleClick={handleClick} />
      {showDisplay ? (
        <AddActivityDisplay
          handleClickAway={handleClickAway}
          createActivity={createActivity}
        />
      ) : null}
    </>
  );
}

// Creates a new activity object
export const createActivityObject = (
  title,
  description,
  rating,
  timeSpent,
  ID
) => {
  if (timeSpent === "") timeSpent = 0;
  if (rating === "") rating = 50;
  if (title === "") title = "...";
  if (description === "") description = "...";
  return {
    name: title,
    description: description,
    timeSpentDoing: timeSpent,
    dateUsed: getTodaysDate(),
    timeUsed: new Date().getTime(),
    rating: rating,
    ID: ID
  };
};
