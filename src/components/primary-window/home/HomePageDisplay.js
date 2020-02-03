/* eslint-disable no-use-before-define */
import React from "react";
import Masonry from "react-masonry-component";
import styled from "styled-components";

export default function HomePageDisplay(props) {
  const [activityContainerWidth, setActivityContainerWidth] = React.useState(
    getActivityContainerWidth(props.activities.length)
  );

  const handleResize = () => {
    setActivityContainerWidth(
      getActivityContainerWidth(props.activities.length)
    );
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const Container = styled.div`
    width: ${activityContainerWidth + 10}vw;
    // border: 1px solid red;
    margin: auto;
  `;

  const ActivityContainer = styled.div`
    width: ${activityContainerWidth}vw;
    height: auto;
    margin: 10vh auto;
    padding: 0.5vh 1vw 2vh 1vw;
    border-right: 2px solid #089;
    border-left: 2px solid #089;
    background-color: rgba(60, 60, 60, 0.75);
    box-shadow: 0px 0px 12px 0px #222;
    transition: max-width 0.25s;

    .home-page-text {
      color: #999;
      width: 70%;
      margin: 3vh auto;
    }
  `;

  return (
    <Container>
      <ActivityContainer>
        {/* {localStorage.clear()} */}
        {activityContainerWidth !==
          getActivityContainerWidth(props.activities.length) && handleResize()}
        <div style={{ display: "flex" }}>
          <Header>Today</Header>
          <Score>Score: {props.score}</Score>
        </div>
        {props.activities.length > 0 ? (
          <Masonry options={masonryOptions}>{props.activities}</Masonry>
        ) : (
          <h3 className="home-page-text">
            There's nothing to show for today.
            <br /> <br />
            Click the bottom right to add an activity and get a productivity
            score for today!
          </h3>
        )}
      </ActivityContainer>
    </Container>
  );
}

// Returns the container width in vw based on the number of activities
const getActivityContainerWidth = count => {
  if (count > 6) count = 6;
  if (count < 3) return 30;
  let marginWidth = 100 / (document.documentElement.clientWidth / 43);
  let activityWidth = 11;
  let total = marginWidth * count + activityWidth * count;
  // console.log(marginWidth);
  return total;
};

// const getContainerStyles = menuOpen => {
//   return {
//     width: menuOpen ? 60 : 90
//   };
// };

const Score = styled.h3`
  color: #999;
  width: fit-content;
  height: fit-content;
  padding: 0 10px;
  // border-right: 2px solid #089;
  // border-left: 2px solid #089;
  margin-right: 0;
  margin-left: auto;

  @media (max-width: 1000px) {
    font-size: 75%;
    border: 1px solid #333;
  }
`;

const Header = styled.h3`
  font-size: 170%;
  width: fit-content;
  height: fit-content;
  color: #999;
  padding: 0 10px;
  border-right: 2px solid #089;
  border-left: 2px solid #089;

  @media (max-width: 1000px) {
    font-size: 100%;
    border: 1px solid #333;
  }
`;

const masonryOptions = {
  transitionDuration: 0.5,
  columnWidth: 1
};
