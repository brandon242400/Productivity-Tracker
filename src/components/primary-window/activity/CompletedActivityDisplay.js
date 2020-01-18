import React from "react";
import styled from "styled-components";
import CompletedActivityDisplayCard from "./CompletedActivityDisplayCard";

export default function CompletedActivityDisplay(props) {
  const [showAddInstance, setShowAddInstance] = React.useState(false);

  const handleClick = duration => {
    props.addInstanceToActivity(props.activity, duration);
  };

  return (
    <CompletedActivityDisplayCard />
    // <Container>
    //   <H3>{props.activity.name}</H3>
    //   <P>{props.activity.description}</P>
    //   <Pbottom>Time spent: {props.activity.timeSpentDoing} minutes</Pbottom>
    //   <Pbottom>Productivity rating: {props.activity.rating}/100</Pbottom>
    // </Container>
  );
}

//
// Styling for Container
const Container = styled.div`
  // border: ${100 / (document.documentElement.clientWidth / 2)}vw solid #333;
  border-radius: 15px;
  // margin: ${100 / (document.documentElement.clientWidth / 10)}vw;
  margin: 10px;
  width: 11vw;
  height: fit-content;
  // padding: ${100 / (document.documentElement.clientWidth / 10)}vw;
  padding: 10px;
  overflow: hidden;
  background: #333;
  color: #aaa;
  box-shadow: 3px 3px 5px 3px #222;
`;

// Styling for the title
const H3 = styled.h3`
  font-size: 1vw;
  text-decoration: underline;
  width: 9.5vw;
`;

// Styling for p elements
const P = styled.p`
  // font-weight: 600;
  font-size: 0.8vw;
  margin: 2vh auto 5vh auto;
`;

const Pbottom = styled.p`
  // border: 1px solid red;
  margin-bottom: 0;
  margin-top: auto;
  text-align: left;
  padding: 0;
  font-size: 0.7vw;
  font-weight: 600;
`;
