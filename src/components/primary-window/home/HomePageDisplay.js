/* eslint-disable no-use-before-define */
import React from "react";
import Masonry from "react-masonry-component";
import styled from "styled-components";

function HomePageDisplay(props) {
  const Container = styled.div`
    width: ${getContainerWidth(props.activities.length)}vw;
    margin: 10vh auto;
    border: 3px solid #333;
    border-radius: 25px;
    padding: 10px;
    box-shadow: 3px 3px 5px 5px #222;
    transition: width 0.25s;
  `;

  return (
    <Container>
      <h2>
        <strong>{props.score}</strong> points for today
      </h2>
      {props.activities.length > 0 ? (
        <Masonry>{props.activities}</Masonry>
      ) : (
        <h3>
          There's nothing to show for today.
          <br />
          Click the bottom right to add an activity and get a score for today!
        </h3>
      )}
    </Container>
  );
}

export default HomePageDisplay;

const getContainerWidth = count => {
  if (count > 6) count = 6;
  if (count === 0) return 30;
  let marginWidth = 100 / (document.documentElement.clientWidth / 45);
  let activityWidth = 11;
  let total = marginWidth * count + activityWidth * count;
  // console.log(marginWidth);
  return total;
};
