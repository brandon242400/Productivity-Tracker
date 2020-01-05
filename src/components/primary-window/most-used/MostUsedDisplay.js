import React from "react";
import Activity from "../activity/Activity";
import Masonry from "react-masonry-component";
import styled from "styled-components";

export default function MostUsedDisplay(props) {
  let activityCount = props.activityList.length;
  let componentWidth = () => {
    if (activityCount >= 8) return "80vw";
    return "50vw";
  };

  const divStyle = {
    border: "2px solid #333",
    borderRadius: "10px",
    padding: "15px",
    maxWidth: componentWidth(),
    maxHeight: "fit-content",
    margin: "10vh auto",
    boxShadow: "5px 5px 7px 3px #222",
    overflow: "hidden",
    transition: "all 0.25s"
  };

  return (
    <div style={divStyle}>
      <h2>Frequently Used Activities</h2>
      {activityCount > 0 ? (
        <Masonry>
          {props.activityList.map(activity => {
            return (
              <Activity
                activity={activity}
                key={activity.name + activity.lastUsedTime}
                removeActivity={props.removeActivity}
              />
            );
          })}
        </Masonry>
      ) : (
        <>
          <br />
          <H3>You don't have any activities saved</H3>
          <H3>
            Enter something you've done today and it will show up here for you
            to easily access next time!
          </H3>
        </>
      )}
    </div>
  );
}

const H3 = styled.h3`
  width: 50%;
  margin: 25px auto;
`;
