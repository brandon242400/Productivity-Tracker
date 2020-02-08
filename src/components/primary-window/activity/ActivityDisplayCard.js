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
import { cardStyles } from "./DisplayCardStyles";

const useStyles = makeStyles(() => cardStyles);

export default function ActivityDisplayCard(props) {
  const classes = useStyles();

  const activityScore =
    parseInt(props.activity.rating) *
    (parseInt(props.activity.timeSpentDoing) / 60);

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
          <p className={classes.score}>{Math.round(activityScore)} Points</p>
        </CardActions>
      </Card>
    </>
  );
}
