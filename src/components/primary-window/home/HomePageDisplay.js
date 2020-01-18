/* eslint-disable no-use-before-define */
import React from "react";
import Masonry from "react-masonry-component";
import styled from "styled-components";

export default function HomePageDisplay(props) {
  const [containerWidth, setContainerWidth] = React.useState(
    getContainerWidth(props.activities.length)
  );

  const handleResize = () => {
    setContainerWidth(getContainerWidth(props.activities.length));
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const Container = styled.div`
    width: ${containerWidth}vw;
    background-color: #494949;
    height: auto;
    margin: 10vh auto;
    border: 0.15vw solid #333;
    border-radius: 10px;
    padding: 0.5vh 1vw 2vh 1vw;
    box-shadow: 3px 3px 5px 5px #222;
  `;

  return (
    <Container>
      {containerWidth !== getContainerWidth(props.activities.length) &&
        handleResize()}
      <div style={{ display: "flex" }}>
        <Header style={{ marginLeft: `${containerWidth / 2 - 3.5}vw` }}>
          Today
        </Header>
        <Score>Score: {props.score}</Score>
      </div>
      {props.activities.length > 0 ? (
        <Masonry>{props.activities}</Masonry>
      ) : (
        <h3>
          There's nothing to show for today.
          <br /> <br />
          Click the bottom right to add an activity and get a productivity score
          for today!
        </h3>
      )}
    </Container>
  );
}

// Returns the container width in vw based on the number of activities
const getContainerWidth = count => {
  if (count > 6) count = 6;
  if (count === 0) return 30;
  let marginWidth = 100 / (document.documentElement.clientWidth / 41);
  let activityWidth = 11;
  let total = marginWidth * count + activityWidth * count;
  // console.log(marginWidth);
  return total;
};

const Score = styled.h3`
  font-size: 1.25vw;
  background-color: #606060;
  width: fit-content;
  height: fit-content;
  padding: 0.4vh 1vw;
  border: 0.05vw solid #333;
  border-radius: 0.3vw;
  border-right: none;
  margin-right: -0.5vw;
  margin-left: auto;
  box-shadow: 3px 3px 3px 2px #222;

  @media (max-width: 1000px) {
    font-size: 75%;
    border: 1px solid #333;
  }
`;

const Header = styled.h3`
  font-size: 1.5vw;
  background-color: #606060;
  width: fit-content;
  height: fit-content;
  text-decoration: underline;
  padding: 0.75vh 1.5vw;
  border: 0.05vw solid #333;
  border-radius: 0.3vw;
  border-right: none;
  margin-right: -0.5vw;
  margin-left: auto;
  box-shadow: 3px 3px 3px 2px #222;

  @media (max-width: 1000px) {
    font-size: 100%;
    border: 1px solid #333;
  }
`;
