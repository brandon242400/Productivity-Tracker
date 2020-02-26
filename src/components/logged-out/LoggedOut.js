import React from "react";
import { makeStyles } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import fire from "../firebase/Firebase";

export default function LoggedOut(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert variant="filled" severity="success">
        {`Successfully logged out of ${props.name}'s account`}
      </Alert>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    width: "30vw",
    position: "fixed",
    left: "40vw",
    bottom: "10vh"
  }
}));
