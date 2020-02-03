import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "./MuiCardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ActivityContext from "../../../context/ActivityContext";

const useStyles = makeStyles(theme => ({
  card: {
    width: "9vw",
    backgroundColor: "#333",
    borderRadius: "5px",
    margin: "10px",
    border: "1px solid black",
    borderColor: "#067",
    boxShadow: "0px 0px 10px 0px #000"
  },
  avatar: {
    fontFamily: "'Kulim Park', sans-serif",
    backgroundColor: "#777",
    color: "#057",
    fontWeight: 600
    // fontSize: "155%"
  },
  title: {
    color: "#aaa",
    fontFamily: "'Kulim Park', sans-serif"
  },
  subheader: {
    color: "#888",
    fontFamily: "'Kulim Park', sans-serif"
    // marginTop: ".5vh"
  },
  typography: {
    fontFamily: "'Kulim Park', sans-serif",
    color: "#888",
    fontSize: "85%"
  },
  icons: {
    color: "#089"
  }
}));

export default function ActivityDisplayCard(props) {
  const classes = useStyles();
  const [showInstanceComponent, updateShowInstanceComponent] = React.useState(
    false
  );
  const { removeCompletedActivity } = React.useContext(ActivityContext);

  const activityScore =
    parseInt(props.activity.rating) *
    (parseInt(props.activity.timeSpentDoing) / 60);

  const showActivityInstance = () => {
    updateShowInstanceComponent(!showInstanceComponent);
  };

  return (
    <>
      <Card className={classes.card}>
        <CardHeader
          classes={{
            root: classes.cardHeader,
            title: classes.title,
            subheader: classes.subheader,
            subheader2: classes.subheader
          }}
          avatar={
            <Avatar
              classes={{
                root: classes.avatar
              }}
            >
              {props.activity.rating}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.activity.name}
          subheader={props.activity.dateUsed}
          subheader2={props.activity.timeSpentDoing}
        />
        <CardContent>
          <Typography
            variant="body1"
            component="p"
            className={classes.typography}
          >
            {props.activity.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <p
            style={{
              color: "#999",
              fontFamily: "'Kulim Park'",
              fontWeight: "600",
              // borderLeft: "2px solid #089",
              // borderRight: "2px solid #089",
              backgroundColor: "#252525",
              padding: "5px",
              borderRadius: "5px",
              width: "fit-content",
              margin: "auto",
              fontSize: "74%"
            }}
          >
            {Math.round(activityScore)} Points
          </p>
        </CardActions>
      </Card>
    </>
  );
}
