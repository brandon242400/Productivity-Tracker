import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "./MuiCardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(theme => ({
  card: {
    width: "11vw",
    backgroundColor: "#333",
    borderRadius: "5px",
    margin: "10px"
  },
  avatar: {
    backgroundColor: "#555",
    color: "black",
    fontWeight: 600
  },
  cardHeader: {},
  action: {},
  title: {
    color: "#bbb",
    fontFamily: "'Kulim Park', sans-serif"
  },
  subheader: {
    color: "#888",
    fontFamily: "'Kulim Park', sans-serif",
    marginTop: ".5vh"
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{
          root: classes.cardHeader,
          title: classes.title,
          subheader: classes.subheader
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
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.activity.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
