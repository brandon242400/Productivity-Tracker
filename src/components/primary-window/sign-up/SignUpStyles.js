import styled from "styled-components";
import { withStyles, TextField, Button } from "@material-ui/core";

export const Container = styled.div`
  border: 2px solid #089;
  border-radius: 1vw;
  background: #444;
  // height: 50vh;
  width: 35vw;
  margin: 5vh auto 5vh 0;
  box-shadow: 4px 4px 5px 3px #222;
`;

export const Title = styled.h2`
  text-decoration: underline;
  margin: 3vh auto 5vh auto;
  color: #999;
  padding: 0 10px;
  border-left: 2px solid #089;
  border-right: 2px solid #089;
  width: fit-content;
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
    backgroundColor: "#333",
    fontFamily: "'Kulim Park', sans-serif",
    transition: "all 0.25s",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "#555",
      color: "#3cc"
    }
  }
})(Button);
