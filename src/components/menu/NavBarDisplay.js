import React from "react";
import { Container, useStyles } from "./NavBarStyles";
import { Paper, Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";
import * as Routes from "../../constants/routes";

export default function NavBarDisplay(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(props.startingIndex);
  const urls = [Routes.HOME, Routes.HISTORY, Routes.WELCOME, Routes.SIGN_UP];

  const handleChange = (event, newValue) => {
    // event.preventDefault();
    setValue(newValue);
    console.log(newValue);
    props.navigateToURL(newValue);
  };

  // Keeps the indicator on the correct tab when the user navigates their site history.
  window.onpopstate = () => {
    let URL = document.location.href;
    URL = URL.split("/");
    URL = "/" + URL[URL.length - 1];
    setValue(urls.indexOf(URL));
  };

  return (
    <>
      <Container>
        <Paper className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            className={classes.tabs}
            variant="standard"
          >
            <Link
              to="/"
              onClick={e => handleChange(e, 0)}
              className={classes.link}
            >
              <Tab label="Home" className={classes.tab} />
            </Link>
            <Link
              to="/activity-history"
              onClick={e => handleChange(e, 1)}
              className={classes.link}
            >
              <Tab label="History" className={classes.tab} />
            </Link>
            <Link
              to="/welcome"
              onClick={e => handleChange(e, 2)}
              className={classes.link}
            >
              <Tab label="About" className={classes.tab} />
            </Link>
            <Link
              to="/sign-up"
              onClick={e => handleChange(e, 3)}
              className={classes.rightLink}
            >
              <Tab label="Log in/Sign up" className={classes.rightTab} />
            </Link>
          </Tabs>
        </Paper>
      </Container>
    </>
  );
}
