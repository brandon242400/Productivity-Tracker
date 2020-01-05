import React from "react";
import styled from "styled-components";

export default function ActivityDisplay(props) {
  return (
    <Container>
      <H3>{props.activity.name}</H3>
      <P>{props.activity.description}</P>
      <button onClick={() => props.removeActivity(props.activity)}>
        Remove
      </button>
      <Pbottom>Last used: {props.activity.lastUsedDate}</Pbottom>
      <Pbottom>Productivity rating: {props.activity.rating}/100</Pbottom>
    </Container>
  );
}

//
// Styling for Container
const Container = styled.div`
  border: 2px solid #aaa;
  border-radius: 15px;
  margin: 10px;
  width: 11vw;
  height: fit-content;
  min-height: 15vh;
  padding: 10px;
  overflow: hidden;
  background: #333;
  color: #aaa;
`;

// Styling for the title
const H3 = styled.h3`
  text-decoration: underline;
`;

// Styling for p elements
const P = styled.p`
  // font-weight: 600;
  // font-size: 115%;
  margin: 20% auto;
`;

const Pbottom = styled.p`
  margin-bottom: 0px;
  text-align: left;
  padding: 0;
  font-size: 85%;
  font-weight: 600;
`;
