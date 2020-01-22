import styled from "styled-components";
import React from "react";
import Activity from "./ActivityCardExample";
import { getTodaysDate } from "../../../reused-functions/Functions";

export const Container = styled.div`
  width: 80vw;
  height: fit-content;
  margin: 2vh auto 15vh auto;
  padding: 0vh 1vw;
  // background-color: #494949;
  // border: 2px solid #089;
  // border-radius: 0.5vw;
  // box-shadow: 4px 4px 7px 2px #111;
`;

export const Header = styled.h2`
  text-decoration: underline;
  font-size: 2vw;
  // font-size: 175%;
  // margin-bottom: 10vh;
`;

export const MasonryContainer = styled.div`
  border-left: 2px solid #399;
  border-right: 2px solid #399;
  width: 70vw;
  margin: auto;
  color: #999;
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
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const ContentLeft = styled.div`
  border: 2px solid #089;
  border-radius: 10px;
  padding: 5px 0;
  background-color: #444;
  width: 30vw;
  margin: 2vh auto 2vh 3vw;
  box-shadow: 3px 3px 10px 0px #222;

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
  />
);
