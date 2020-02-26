import React from "react";
import { Menu, MenuItem, withStyles } from "@material-ui/core";
import { Header } from "./HistoryStyles";

export default function TimeFrameMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleItemClick = dateLength => {
    handleClose();
    props.updateDateLength(dateLength);
  };

  return (
    <>
      <Header onClick={handleClick}>{`This ${props.dateLength}`}</Header>
      <StyledMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={() => handleItemClick("Week")}>
          Week
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleItemClick("Month")}>
          Month
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleItemClick("Year")}>
          Year
        </StyledMenuItem>
      </StyledMenu>
    </>
  );
}

const StyledMenu = withStyles({
  paper: {
    border: "2px solid #089",
    backgroundColor: "#333"
  }
})(props => (
  <Menu
    elevation={5}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    color: "#39a",
    fontFamily: "'Kulim Park', sans-serif",
    fontSize: "130%",
    "&:hover": {
      textDecoration: "underline",
      backgroundColor: "#444"
    }
  }
}))(MenuItem);
