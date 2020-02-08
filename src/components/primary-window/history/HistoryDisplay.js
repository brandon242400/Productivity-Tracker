import React from "react";
import { ActivityContainer, Score } from "./HistoryStyles";
import { Header as H2 } from "../../../styles/CommonStyles";
import ActivityCard from "../activity/ActivityDisplayCard";
import Masonry from "react-masonry-component";
import LineChart from "./charts/LineChart";
import TimeFrameMenu from "./TimeFrameMenu";

export default function HistoryDisplay(props) {
  const [startDate, updateStartDate] = React.useState(
    props.getDateValueBeforeToday(7)
  );
  const [dateLength, updateDateLength] = React.useState("Week");

  // Generates list of activities within the given dates
  let totalScore = 0;
  let actKey = 0;
  const activities = props
    .getActivitiesFromDateRange(startDate)
    .map(activity => {
      totalScore += activity.rating * (activity.timeSpentDoing / 60);
      return <ActivityCard activity={activity} key={actKey++} />;
    });

  const changeDateRange = duration => {
    let length = 0;
    switch (duration) {
      case "Week": {
        length = 7;
        break;
      }
      case "Month": {
        length = 30;
        break;
      }
      case "Year": {
        length = 365;
        break;
      }
      default: {
        length = 7;
      }
    }
    updateStartDate(props.getDateValueBeforeToday(length));
    updateDateLength(duration);
  };

  return (
    <>
      <H2>Your Productivity History</H2>
      <ActivityContainer>
        <div style={{ display: "flex" }}>
          <TimeFrameMenu
            dateLength={dateLength}
            updateDateLength={changeDateRange}
          />
          {/* <Header>Hey</Header> */}
          <Score>{`Score: ${totalScore.toFixed(0)}`}</Score>
        </div>
        <LineChart data={props.getActivityDataFromDateRange(startDate)} />
        <h2>Activities</h2>
        <Masonry options={masonryOptions}>{activities}</Masonry>
      </ActivityContainer>
    </>
  );
}

const masonryOptions = {
  transitionDelay: 0,
  stagger: 25
};
