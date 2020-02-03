import { withStyles, TextField, Button } from "@material-ui/core";
import styled from "styled-components";

export const OutterContainer = styled.div``;

export const Container = styled.div`
  border-left: 2px solid #089;
  border-right: 2px solid #089;
  // border-radius: 1vw;
  // padding-top: 3vh;
  background-color: rgba(68, 68, 68, 0.75);
  height: fit-content;
  width: 30vw;
  margin: auto 5vw auto auto;
  // margin-top: 15vh;
  box-shadow: 2px 2px 10px 0px #222;
`;

export const ColumnDisplay = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  margin: auto;
`;

export const Title = styled.h2`
  position: relative;
  bottom: 8vh;
  background-color: rgba(50, 50, 50, 0.55);
  // text-decoration: underline;
  margin: 0 auto 4vh auto;
  color: #999;
  padding: 5px 15px;
  border-left: 2px solid #089;
  border-right: 2px solid #089;
  width: fit-content;
  font-size: 1.5vw;
  font-weight: 400;
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
