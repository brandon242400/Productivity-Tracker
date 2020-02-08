/* eslint-disable no-use-before-define */
import React from "react";
import Masonry from "react-masonry-component";
import { ActivityContainer, Score, Header, MainTitle } from "./HomePageStyles";

export default function HomePageDisplay(props) {
  return (
    <>
      <MainTitle>Productivity Tracker</MainTitle>
      <ActivityContainer>
        {/* {localStorage.clear()} */}
        <div style={{ display: "flex" }}>
          <Header>Today</Header>
          <Score>Score: {props.score}</Score>
        </div>
        <Masonry options={masonryOptions}>{props.activities}</Masonry>
        {props.activities.length === 0 ? (
          <h3 className="home-page-text">
            There's nothing to show for today.
            <br /> <br />
            Click the bottom right to add an activity and get a productivity
            score for today!
          </h3>
        ) : null}
      </ActivityContainer>
    </>
  );
}

const masonryOptions = {
  transitionDelay: 0,
  stagger: 25
};
