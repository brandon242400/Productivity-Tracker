import React from "react";
import styled, { keyframes } from "styled-components";
import {
  withStyles,
  FormControl,
  InputLabel,
  FilledInput,
  Button
} from "@material-ui/core";

//This file is used for the styles involved in the AddActivityDisplay.js component

const darkenContainer = keyframes`
from {
  background-color: rgba(40, 40, 40, 0);
}
to {
  background-color: rgba(40, 40, 40, 0.85);
}
`;

const darkenInputContainer = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 6;
  top: 0;
  left: 0;
  background-color: rgba(40, 40, 40, 0);
  animation: ${darkenContainer} 0.25s linear forwards;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  margin: 30vh auto;
  padding: 50px 0;
  border: 2px solid #089;
  border-radius: 15px;
  background-color: #333;
  box-shadow: 5px 5px 3px 2px #111;
  animation: ${darkenInputContainer} 0.25s linear forwards;

  .description-styled-input {
    width: 70%;
    margin-top: 5vh;
  }

  @media (max-width: 1200px) {
    width: 50vw;
  }

  @media (max-width: 700px) {
    margin-top: 15vh;
    width: 75vw;
  }

  @media (max-width: 400px) {
    width: 90vw;

    .description-styled-input {
      width: 90%;
    }
  }
`;

// Styled inputs from Material-UI

const StyledLabel = withStyles({
  root: {
    color: "#777"
  },
  focused: {
    color: "#777 !important"
  }
})(InputLabel);

export const StyledInput = withStyles({
  root: {
    color: "#888",
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

export const getTitleInput = input => (
  <FormControl variant="filled">
    <StyledLabel htmlFor="component-filled-entry-title">Title</StyledLabel>
    {input}
  </FormControl>
);

export const getDescriptionInput = (
  givenValue,
  doOnChange,
  doOnKeyDown = null
) => (
  <FormControl variant="filled" className="description-styled-input">
    <StyledLabel htmlFor="component-filled-entry-description">
      Description
    </StyledLabel>
    <StyledInput
      autoFocus={false}
      autoComplete="false"
      multiline={true}
      id="component-filled-entry-description"
      value={givenValue}
      onChange={doOnChange}
      onKeyDown={doOnKeyDown || doOnKeyDown}
    />
  </FormControl>
);

const NumberInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;

  .num-input-item {
    width: 150px;
    margin: 5vh 1vw;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    .item-1 {
      margin: 5vh auto;
    }

    .item-2 {
      margin: 0 auto 5vh auto;
    }
  }
`;

export const getNumberInputs = (
  givenValue,
  doOnChange,
  doOnKeyDown = null,
  givenValue2,
  doOnChange2
) => (
  <NumberInputContainer>
    <FormControl variant="filled" className="num-input-item item-1">
      <StyledLabel htmlFor="component-filled-entry-rating">Rating</StyledLabel>
      <StyledInput
        type="number"
        id="component-filled-entry-rating"
        autoComplete="false"
        placeholder="0-100"
        value={givenValue}
        onChange={doOnChange}
        onKeyDown={doOnKeyDown || doOnKeyDown}
      />
    </FormControl>
    <FormControl variant="filled" className="num-input-item item-2">
      <StyledLabel htmlFor="component-filled-entry-time">Time</StyledLabel>
      <StyledInput
        type="number"
        autoComplete="false"
        id="component-filled-entry-time"
        placeholder="Minutes"
        value={givenValue2}
        onChange={doOnChange2}
        onKeyDown={doOnKeyDown || doOnKeyDown}
      />
    </FormControl>
  </NumberInputContainer>
);

export const StyledButton = withStyles({
  root: {
    fontFamily: "'Kulim Park', sans-serif",
    fontWeight: "600",
    backgroundColor: "#444",
    color: "#29a",
    transition: "all 0.25s",
    "&:hover": {
      backgroundColor: "#555",
      color: "#3cc"
    }
  }
})(Button);
