import styled from "styled-components";
import { withStyles, TextField, Button } from "@material-ui/core";

export const Container = styled.div`
  border-left: 2px solid #089;
  border-right: 2px solid #089;
  // border-radius: 1vw;
  background-color: rgba(68, 68, 68, 0.75);
  // background-color: #444;
  // height: 50vh;
  width: 35vw;
  margin: 5vh auto 5vh 0;
  box-shadow: 2px 2px 10px 0px #222;
`;

export const Title = styled.h2`
  position: relative;
  bottom: 8vh;
  // text-decoration: underline;
  background-color: rgba(50, 50, 50, 0.55);
  margin: 0 auto 4vh auto;
  color: #999;
  padding: 5px 15px;
  border-left: 2px solid #089;
  border-right: 2px solid #089;
  width: fit-content;
  font-size: 1.5vw;
  font-weight: 400;
`;

export const RowDisplay = styled.div`
  display: flex;
`;

export const ColumnDisplay = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  margin: auto;
`;

export const CustomInput = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
      top: "5px"
    },
    "& label": {
      top: "5px"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#599"
      },
      "&:hover fieldset": {
        borderColor: "#3cc"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#4df"
      }
    },
    marginBottom: "4vh",
    backgroundColor: "#555"
  }
})(TextField);

export const CustomButton = withStyles({
  root: {
    color: "#599",
    width: "fit-content",
    margin: "4vh auto",
    backgroundColor: "#303030",
    fontFamily: "'Kulim Park', sans-serif",
    transition: "all 0.25s",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#555",
      color: "#3cc"
    }
  }
})(Button);
