import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@mdi/react";
import { mdiTrashCan, mdiPlusBox } from "@mdi/js";
import Card from "@material-ui/core/Card";
import CardHeader from "../activity/MuiCardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(theme => ({
  card: {
    width: "12vw",
    backgroundColor: "#333",
    borderRadius: "5px",
    margin: "20px",
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
    color: "#888"
  },
  icons: {
    color: "#089"
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

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
          <IconButton aria-label="delete" className={classes.icons}>
            <Icon
              path={mdiTrashCan}
              title="Delete Activity"
              size={1}
              color="#089"
            />
          </IconButton>
          <IconButton aria-label="reuse" className={classes.icons}>
            <Icon
              path={mdiPlusBox}
              title="Reuse Activity"
              size={1}
              color="#089"
            />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
