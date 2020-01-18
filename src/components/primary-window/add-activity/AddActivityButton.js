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
const FabButton = withStyles({
  root: {
    backgroundColor: "#333",
    color: "#3cc",
    "&:hover": {
      backgroundColor: "#444",
      color: "#3ff"
    }
  }
})(Fab);

const Container = styled.div`
  .app-fab--absolute {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    transition: all 0.2s;
  }

  .app-fab--absolute:hover {
    bottom: 2.2rem;
    right: 2.2rem;
    box-shadow: 5px 5px 4px 2px #222;
  }

  @media (min-width: 1024px) {
    .app-fab--absolute {
      bottom: 3rem;
      right: 3rem;
    }

    .app-fab--absolute:hover {
      bottom: 3.1rem;
      right: 3.1rem;
      // box-shadow: 3px 3px 5px 2px #222;
    }
  }
`;
