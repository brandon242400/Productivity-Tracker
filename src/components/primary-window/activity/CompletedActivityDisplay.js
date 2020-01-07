import React from "react";
import styled from "styled-components";

export default function CompletedActivityDisplay(props) {
  const [showAddInstance, setShowAddInstance] = React.useState(false);

  const handleClick = duration => {
    props.addInstanceToActivity(props.activity, duration);
  };

  return (
    <Container>
      <H3>{props.activity.name}</H3>
      <P>{props.activity.description}</P>
      <button onClick={() => props.removeActivity(props.activity)}>
        Remove
      </button>
      <button onClick={() => setShowAddInstance(!showAddInstance)}>
        {showAddInstance ? "Cancel" : "Use Again"}
      </button>
      {showAddInstance ? (
        <ReuseActivitySection handleClick={handleClick} />
      ) : null}
      <Pbottom>Time spent: {props.activity.timeSpentDoing} minutes</Pbottom>
      <Pbottom>Productivity rating: {props.activity.rating}/100</Pbottom>
    </Container>
  );
}

const ReuseActivitySection = props => {
  const [duration, setDuration] = React.useState(0);
  return (
    <div>
      <input
        type="number"
        placeholder="Minutes"
        value={duration}
        onChange={e => setDuration(e.target.value)}
      />
      <button onClick={() => props.handleClick(duration)}>Enter</button>
    </div>
  );
};

//
// Styling for Container
const Container = styled.div`
  // border: ${100 / (document.documentElement.clientWidth / 2)}vw solid #333;
  border-radius: 15px;
  margin: ${100 / (document.documentElement.clientWidth / 10)}vw;
  width: 11vw;
  height: fit-content;
  min-height: 15vh;
  padding: ${100 / (document.documentElement.clientWidth / 10)}vw;
  overflow: hidden;
  background: #333;
  color: #aaa;
  box-shadow: 3px 3px 5px 3px #222;
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
