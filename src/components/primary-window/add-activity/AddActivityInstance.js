/* eslint-disable no-use-before-define */
import React from "react";
import ActivityContext from "../../../context/ActivityContext";
import {
  ClickAwayListener,
  InputLabel,
  FilledInput,
  withStyles,
  FormControl
} from "@material-ui/core";
import {
  Container,
  InputContainer,
  StyledButton
} from "./activityDisplayStyles";

export default class AddActivityInstance extends React.Component {
  static contextType = ActivityContext;

  constructor(props) {
    super(props);
    this.state = {
      timeSpent: ""
    };
  }

  handleNumberChange = e => {
    let num = parseInt(e.target.value);
    if (num > 0) {
      this.setState({ timeSpent: num });
    }
  };

  handleKeyDown = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.handleEnter();
    }
  };

  handleEnter = () => {
    let time = this.state.timeSpent;
    if (time === "") time = 0;
    this.context.addInstanceToActivity(this.props.activity, time);
    this.setState({ timeSpent: "" });
    this.props.showActivityInstance();
  };

  render() {
    return (
      <Container>
        <ClickAwayListener onClickAway={this.props.showActivityInstance}>
          <InputContainer>
            <FormControl
              variant="filled"
              style={{ width: "50%", marginTop: "5vh" }}
            >
              <StyledLabel htmlFor="activity-instance-entry-time">
                Enter Time
              </StyledLabel>
              <StyledInput
                type="number"
                autoComplete="false"
                autoFocus={true}
                id="activity-instance-entry-time"
                placeholder="Minutes"
                value={this.state.timeSpent}
                onChange={this.handleNumberChange}
                onKeyDown={this.handleKeyDown}
              />
            </FormControl>
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

const StyledLabel = withStyles({
  root: {
    color: "#777"
  },
  focused: {
    color: "#777 !important"
  }
})(InputLabel);

const StyledInput = withStyles({
  root: {
    color: "#888",
    marginBottom: "5vh",
    backgroundColor: "#252525",
    "&:hover": {
      backgroundColor: "#282828"
    }
  },
  focused: {
    backgroundColor: "#252525 !important"
  },
  underline: {
    "&:after": {
      borderBottomColor: "#3cc !important"
    },
    "&:before": {
      borderBottomColor: "rgb(125,125,125,0.6)"
    },
    "&:hover:before": {
      borderBottomColor: "rgba(145,145,145,1)"
    }
  }
})(FilledInput);
