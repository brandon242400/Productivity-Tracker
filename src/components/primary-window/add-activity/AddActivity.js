import React, { useState } from "react";
import AddActivityDisplay from "./AddActivityDisplay";
import AddActivityButton from "./AddActivityButton";
import { getTodaysDate } from "../../../reused-functions/Functions";

export default function AddActivity(props) {
  const [showDisplay, setShowDisplay] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setShowDisplay(true);
  };

  const handleClickAway = () => {
    setShowDisplay(false);
  };

  const createActivity = (title, description, rating, timeSpent) => {
    props.addCompletedActivity(
      createActivityObject(title, description, rating, timeSpent)
    );
  };

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

// Creates the activity object
export const createActivityObject = (title, description, rating, timeSpent) => {
  if (timeSpent === "") timeSpent = 30;
  if (rating === "") rating = 50;
  return {
    name: title,
    description: description,
    timeSpentDoing: [
      {
        date: getTodaysDate(),
        duration: timeSpent
      }
    ],
    lastUsedDate: getTodaysDate(),
    lastUsedTime: new Date().getTime(),
    rating: rating
  };
};
