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
    minWidth: "300px",
    overflow: "hidden",
    paddingLeft: "1vw",
    minHeight: "2vh",
    height: "fit-content",
    "& .MuiTabs-flexContainer": {
      "@media (max-width: 700px)": {
        justifyContent: "flex-start"
        // width: "200px"
      }
    }
  },
  tab: {
    color: "#999",
    fontFamily: "'Kulim Park', sans-serif",
    fontWeight: "600",
    zIndex: "1",
    fontSize: "100%",
    height: "fit-content",
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
    },
    "@media (max-width: 850px)": {
      minWidth: 130
    },
    "@media (max-width: 700px)": {
      fontSize: "75%",
      minWidth: 100
    },
    "@media (max-width: 525px)": {
      minWidth: 50
    }
  },
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "#333",
      height: "100%",
      borderLeft: "3px solid #089",
      borderRight: "3px solid #089"
    },
    height: "fit-content"
  },
  rightTab: {
    marginRight: "0",
    marginLeft: "auto",
    color: "#999",
    height: "fit-content",
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
    },
    "@media (max-width: 850px)": {
      minWidth: 130
    },
    "@media (max-width: 700px)": {
      fontSize: "75%",
      minWidth: 100,
      "& .MuiTab-wrapper": {
        width: "17vw",
        height: "fit-content"
      }
    },
    "@media (max-width: 525px)": {
      minWidth: 100,
      fontSize: "60%"
    }
  },
  link: {
    textDecoration: "none"
  },
  rightLink: {
    textDecoration: "none",
    width: "fit-content",
    margin: "auto 5vw auto auto"
  }
});
