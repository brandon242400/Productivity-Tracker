import styled from "styled-components";
import { makeStyles } from "@material-ui/core";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#333",
    width: "100vw",
    paddingLeft: "1vw"
  },
  tab: {
    color: "#999",
    fontFamily: "'Kulim Park', sans-serif",
    fontWeight: "600",
    zIndex: "1",
    fontSize: "100%",
    transition: "all 0.5s",
    "&.Mui-selected": {
      color: "#ccc",
      "& .MuiTab-wrapper": {
        transition: "all .5s"
      },
      "&:hover": {
        color: "#ccc"
      }
    },
    "&:hover": {
      color: "#3cc"
    }
  },
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "#333",
      height: "100%",
      borderLeft: "3px solid #089",
      borderRight: "3px solid #089"
    }
  },
  rightTab: {
    marginRight: "5vw",
    marginLeft: "auto",
    color: "#999",
    fontFamily: "'Kulim Park', sans-serif",
    fontWeight: "600",
    zIndex: "1",
    transition: "all 0.5s",
    fontSize: "100%",
    "&.Mui-selected": {
      color: "#ccc",
      "& .MuiTab-wrapper": {
        transition: "all .5s"
      },
      "&:hover": {
        color: "#ccc"
      }
    },
    "&:hover": {
      color: "#3cc"
    }
  }
});
