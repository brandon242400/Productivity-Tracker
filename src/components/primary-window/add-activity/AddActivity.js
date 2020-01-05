import React, { useState } from "react";
import AddActivityDisplay from "./AddActivityDisplay";
import AddActivityButton from "./AddActivityButton";
import {} from "../../../ActivityListManager";

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
    props.addActivity(
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

//
// Returns today's date in the format mm/dd/yyyy for the activity's lastUsed section
const getTodaysDate = (today = new Date()) => {
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return mm + "/" + dd + "/" + yyyy;
};

// Creates the activity object
const createActivityObject = (title, description, rating, timeSpent) => {
  if (timeSpent === "") timeSpent = 0;
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
