import React from "react";
import { H1, H1offset, OffsetContainer } from "../../styles/AppDisplayStyles";
import { Link } from "react-router-dom";

export default function PrimaryWindowDisplay(props) {
  const getTitle = () => {
    if (props.centerTitle) return <H1>Productivity Tracker</H1>;
    else
      return (
        <OffsetContainer>
          <Link to="/">
            <H1offset>Productivity Tracker</H1offset>
          </Link>
        </OffsetContainer>
      );
  };

  return (
    <div>
      {getTitle()}
      {props.pageComponent}
    </div>
  );
}
