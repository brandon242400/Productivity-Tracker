import styled from "styled-components";
import React from "react";
import Activity from "./ActivityCardExample";
import { getTodaysDate } from "../../../reused-functions/Functions";
import { Button, withStyles } from "@material-ui/core";

export const Container = styled.div`
  width: 80vw;
  height: fit-content;
  margin: 8vh auto 25vh auto;
  // padding: 0vh 1vw;

  a {
    text-decoration: none;
  }

  @media (max-width: 700px) {
    width: 95vw;
  }
`;

export const Header = styled.h2`
  text-decoration: underline;
  border-left: 2px solid #089;
  border-right: 2px solid #089;
  width: fit-content;
  padding: 5px 15px;
  background-color: rgba(50, 50, 50, 0.55);
  color: #389;
  font-size: 1.5vw;
  font-weight: 400;
  margin: auto;
  margin-bottom: 10vh;
`;

export const MasonryContainer = styled.div`
  border-left: 2px solid #399;
  border-right: 2px solid #399;
  padding: 1px 0;
  background-color: rgba(50, 50, 50, 0.55);
  width: 70vw;
  margin: auto;
  color: #999;

  @media (max-width: 700px) {
    width: 95%;
  }
`;

export const Introduction = styled.div`
  width: 64vw;
  margin: 5vh auto;
  border: 2px solid #089;
  border-radius: 10px;
  padding: 10px 0;
  background-color: #444;
  box-shadow: 3px 3px 10px 0px #222;

  h2 {
    font-size: 160%;
    width: fit-content;
    padding: 0 10px;
    margin: 20px auto;
    border-left: 2px solid #089;
    border-right: 2px solid #089;
  }

  p {
    width: 80%;
    margin: 2vh auto;
  }

  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const IntroContentContainer = styled.div`
  p {
    padding: 10px;
    width: 90%;
  }
`;

export const FlexContainer = styled.div`
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const ContentContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  margin: 0 3vw 0 auto;

  @media (max-width: 700px) {
    margin: 0;
  }
`;

export const ContentLeft = styled.div`
  border: 2px solid #089;
  border-radius: 10px;
  padding: 5px 0;
  background-color: #444;
  width: 30vw;
  margin: 2vh auto 2vh 3vw;
  box-shadow: 3px 3px 10px 0px #222;

  @media (max-width: 700px) {
    width: 90%;
    margin: 2vh auto;
  }

  h3 {
    width: fit-content;
    padding: 0 10px;
    margin: 20px auto;
    border-left: 2px solid #089;
    border-right: 2px solid #089;
  }

  p {
    width: 80%;
    margin: 2vh auto;
  }
`;

export const ContentRight = styled.div`
  border: 2px solid #089;
  border-radius: 10px;
  padding: 5px 0;
  background-color: #444;
  width: 30vw;
  margin: 2vh 0;
  box-shadow: 3px 3px 10px 0px #222;

  @media (max-width: 700px) {
    width: 90%;
    margin: 2vh auto;
  }

  h3 {
    width: fit-content;
    padding: 0 10px;
    margin: 20px auto;
    border-left: 2px solid #089;
    border-right: 2px solid #089;
  }

  p {
    width: 80%;
    margin: 2vh auto;
  }
`;

export const IntroText = (
  <>
    <h2>About</h2>
    <p>
      Welcome!
      <br />
      <br />
      Let me start off by briefly explaining what this app is even for. You can
      think of it as a to-do list, but instead of entering things you need to
      do, you put in things that you've already done for the day. You give each
      task a "productivity rating" and the amount of time you spent on it so it
      can return a score for you. Your home page will soon fill with all the
      things you've finished that day and give you your overall score.
      <br />
      <br />
      Pretty simple so far, right?
      <br />
      <br />
      That's all you really need to know to use the app. Feel free to browse the
      items below to get more comfortable with some of the features available to
      you. If you don't want to make an account you can still use the app
      without one. The panels below will help direct you.
    </p>
  </>
);

export const ExampleActivity = (
  <Activity
    activity={{
      name: "My First Activity!",
      description: "I started using Productivity Tracker today!",
      timeSpentDoing: 15,
      dateUsed: getTodaysDate(),
      timeUsed: 0,
      rating: 100,
      ID: "activity-NA"
    }}
    className="example-activity"
  />
);

export const StyledButton = withStyles({
  root: {
    color: "#599",
    width: "fit-content",
    margin: "1vh auto 2vh auto",
    backgroundColor: "#333",
    fontFamily: "'Kulim Park', sans-serif",
    fontWeight: "600",
    transition: "all 0.25s",
    "&:hover": {
      backgroundColor: "#555",
      color: "#3cc"
    }
  }
})(Button);
