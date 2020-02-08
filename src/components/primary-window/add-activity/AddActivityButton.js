import React from "react";
import styled from "styled-components";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

// Floating action button used to log an activity for the day.

export default function AddActivityButton(props) {
  return (
    <Container>
      <Fab
        className="app-fab--absolute"
        color="primary"
        aria-label="add"
        title="Add New Activity"
        onClick={props.handleClick}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}

//
//
const Container = styled.div`
  .app-fab--absolute {
    position: fixed;
    z-index: 5;
    bottom: 2rem;
    right: 2rem;
    background: rgba(80, 80, 80, 0.5);
    border: 2px solid #0ab;
    color: #3cc;
    transition: all 0.25s;
  }

  .app-fab--absolute:hover {
    background-color: rgba(80, 80, 80, 1);
    color: #3ff;
    box-shadow: 0px 0px 18px 0px #888;
  }

  @media (min-width: 1024px) {
    .app-fab--absolute {
      bottom: 3rem;
      right: 3rem;
    }

    .app-fab--absolute:hover {
      // box-shadow: 0px 0px 8px 2px #222;
    }
  }

  @media (max-width: 800px) {
    .app-fab--absolute {
      transform: scale(0.75);
    }
  }
`;
