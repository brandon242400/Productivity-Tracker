import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  ContentLeft,
  ContentRight,
  MasonryContainer,
  Introduction,
  ContentContainer,
  IntroText,
  ExampleActivity,
  StyledButton
} from "./WelcomeStyles";

export default class Welcome extends Component {
  logUserVisited = () => {
    localStorage.setItem("pt-user-visited", "true");
  };

  render() {
    return (
      <Container>
        <Header>Welcome to Your Productivity Tracker</Header>
        <MasonryContainer>
          <Introduction>{IntroText}</Introduction>
          <div style={{ display: "flex" }}>
            <ContentContainer>
              <ContentLeft>
                <h3>Activities</h3>
                <div style={{ display: "flex" }}>
                  {ExampleActivity}
                  <p style={{ padding: "10px", width: "40%" }}>
                    When you enter a task you've done, it's displayed with an
                    activity card like the one to the left.
                    <br />
                    <br />
                    You'll see helpful information like the title, date, rating,
                    description, and time spent displayed for you to easily see.
                    <br />
                    <br />
                    With the buttons on the bottom, you can reuse the activity
                    if it's something you regularly do or delete it if it was
                    entered by mistake.
                  </p>
                </div>
              </ContentLeft>
              <ContentLeft>
                <h3>Create Account</h3>
                <p>
                  Creating an account will allow you to access and change your
                  productivity information from different devices because the
                  data you enter will be linked to your account. This means you
                  can log in on your phone and add things while you're away from
                  the computer. You won't recieve any emails from us unless it's
                  to reset a forgotten password. Click the button below to
                  create one now.
                </p>
                <Link to="/sign-up">
                  <StyledButton
                    variant="contained"
                    color="primary"
                    onClick={() => this.logUserVisited()}
                  >
                    Sign Up Now
                  </StyledButton>
                </Link>
              </ContentLeft>
            </ContentContainer>

            <ContentContainer style={{ margin: "0 3vw 0 auto" }}>
              <ContentRight>
                <h3>Scores</h3>
                <p>
                  Your productivity score is calculated from the rating you've
                  given a task and how long you've spent on it. It's up to you
                  to figure out the rating for each task you enter. The rating
                  is multiplied by the hours spent on it to get the score for
                  that activity. From there the score is added to your daily
                  total and saved to track your productivity as time goes on.
                </p>
              </ContentRight>
              <ContentRight>
                <h3>Productivity History</h3>
                <p>
                  Using the data you enter, the app tracks your productivity
                  history to show your progress and trends in your average score
                  over time. If you notice a trend of decreased efficiency on
                  certain days of the week or months of the year you'll be
                  better able to handle that downward trend in a way you see
                  fit.
                </p>
              </ContentRight>
              <ContentRight>
                <h3>Continue Without Account</h3>
                <p>
                  If you don't want to make an account yet you can still use the
                  app from your preferred device. Keep in mind that the
                  information you enter will only be saved on your browser so
                  you won't be able to update anything from another device and
                  could lose that information if you delete your browser's saved
                  data. If you change your mind later all the activities you've
                  made will be synced to your account so you won't lose any of
                  the progress that's already been entered. Click the button
                  below to use the app without an account.
                </p>
                <Link to="/">
                  <StyledButton
                    variant="contained"
                    color="primary"
                    onClick={() => this.logUserVisited()}
                  >
                    sign up later
                  </StyledButton>
                </Link>
              </ContentRight>
            </ContentContainer>
          </div>
        </MasonryContainer>
      </Container>
    );
  }
}
