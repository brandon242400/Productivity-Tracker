import React from "react";

const HomePageDisplay = props => {
  return (
    <div>
      <h2>Home Page</h2>
      <h3>{props.score}</h3>
      {props.activities}
    </div>
  );
};

export default HomePageDisplay;
