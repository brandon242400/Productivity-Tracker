import React from "react";
import { H1, H1offset, OffsetContainer } from "../../styles/AppDisplayStyles";

export default function PrimaryWindowDisplay(props) {
  // Returns one of two versions of the App Title
  const getTitle = () => {
    if (props.centerTitle) return <H1>Productivity Tracker</H1>;
    else if (props.dontShowTitle === "dont show title") return null;
    else
      return (
        <OffsetContainer>
          {/* <Link to="/"> */}
          <H1offset>Productivity Tracker</H1offset>
          {/* </Link> */}
        </OffsetContainer>
      );
  };

  return (
    <>
      {getTitle()}
      <props.pageComponent />
    </>
  );
}
