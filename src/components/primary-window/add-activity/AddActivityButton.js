import React from "react";
import styled from "styled-components";
import { Fab, withStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

// Floating action button used to log an activity for the day.

export default function AddActivityButton(props) {
  return (
    <Container>
      <FabButton
        className="app-fab--absolute"
        color="primary"
        aria-label="add"
        onClick={props.handleClick}
      >
        <AddIcon />
      </FabButton>
    </Container>
  );
}

//
//
const FabButton = withStyles({})(Fab);

const Container = styled.div`
  .app-fab--absolute {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
  }

  @media (min-width: 1024px) {
    .app-fab--absolute {
      bottom: 3rem;
      right: 3rem;
    }
  }
`;
