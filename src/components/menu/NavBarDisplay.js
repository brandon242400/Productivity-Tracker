import React from "react";
import { Container, useStyles } from "./NavBarStyles";
import { Paper, Tabs, Tab } from "@material-ui/core";

export default function NavBarDisplay(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(props.startingIndex);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // console.log(newValue);
    props.navigateToURL(newValue);
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
            // TabIndicatorProps={{}}
            // centered
          >
            <Tab label="Home" className={classes.tab} />
            <Tab label="History" className={classes.tab} />
            <Tab label="About" className={classes.tab} />
            <Tab label="Log in/Sign up" className={classes.rightTab} />
          </Tabs>
        </Paper>
      </Container>
    </>
  );
}
