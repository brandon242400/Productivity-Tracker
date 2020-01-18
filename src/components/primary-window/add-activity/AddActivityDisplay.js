/* eslint-disable no-use-before-define */
import React from "react";
import { ClickAwayListener, Button } from "@material-ui/core";
import {
  Container,
  InputContainer,
  getTitleInput,
  getDescriptionInput,
  getNumberInputs,
  StyledButton
} from "./activityDisplayStyles";

export default class AddActivityDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInput: "",
      descriptionInput: "",
      rating: "",
      timeSpent: ""
    };
  }

  handleNumberChange = e => {
    let num = parseInt(e.target.value);
    if (!(num > 100 || num < 0)) {
      this.setState({ rating: num });
    }
  };

  handleEnter = () => {
    this.props.createActivity(
      this.state.titleInput,
      this.state.descriptionInput,
      this.state.rating,
      this.state.timeSpent
    );
    this.setState({
      titleInput: "",
      descriptionInput: "",
      rating: "",
      timeSpent: ""
    });
  };

  render() {
    return (
      <Container>
        <ClickAwayListener onClickAway={this.props.handleClickAway}>
          <InputContainer>
            {getTitleInput(
              this.state.titleInput,
              e => this.setState({ titleInput: e.target.value }),
              e => (e.keyCode === 13 ? this.handleEnter() : null)
            )}
            {getDescriptionInput(
              this.state.descriptionInput,
              e => this.setState({ descriptionInput: e.target.value }),
              e => (e.keyCode === 13 ? this.handleEnter() : null)
            )}
            {getNumberInputs(
              this.state.rating,
              this.handleNumberChange,
              e => (e.keyCode === 13 ? this.handleEnter() : null),
              this.state.timeSpent,
              e =>
                parseInt(e.target.value) >= 0
                  ? this.setState({ timeSpent: e.target.value })
                  : this.setState({ timeSpent: 0 })
            )}
            <StyledButton
              variant="contained"
              color="primary"
              onClick={this.handleEnter}
              size="large"
            >
              Add Activity
            </StyledButton>
          </InputContainer>
        </ClickAwayListener>
      </Container>
    );
  }
}
