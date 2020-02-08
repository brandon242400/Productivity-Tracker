export const cardStyles = {
  card: {
    width: "12vw",
    backgroundColor: "#333",
    borderRadius: "5px",
    margin: "1vw",
    border: "0.1vw solid black",
    borderColor: "#067",
    boxShadow: "0px 0px 10px 0px #000",
    "@media (max-width: 1350px)": {
      width: "14vw"
    },
    "@media (max-width: 1100px)": {
      width: "18vw"
    },
    "@media (max-width: 800px)": {
      width: "24vw"
    },
    "@media (max-width: 600px)": {
      width: "32vw",
      marginLeft: "5vw",
      marginRight: "5vw",
      border: "1px solid #067"
    },
    "@media (max-width: 400px)": {
      width: "36vw",
      marginLeft: "3vw",
      marginRight: "3vw"
    },
    "@media (max-width: 330px)": {
      width: "60vw",
      marginLeft: "7vw"
    }
  },
  avatar: {
    fontFamily: "'Kulim Park', sans-serif",
    backgroundColor: "#777",
    color: "#057",
    fontWeight: 600,
    "@media (max-width: 1100px)": {
      transform: "scale(0.75)"
    }
  },
  title: {
    color: "#aaa",
    fontFamily: "'Kulim Park', sans-serif",
    "@media (max-width: 1100px)": {
      fontSize: "85%"
    }
  },
  subheader: {
    color: "#888",
    fontFamily: "'Kulim Park', sans-serif",
    "@media (max-width: 1100px)": {
      fontSize: "75%"
    }
  },
  typography: {
    fontFamily: "'Kulim Park', sans-serif",
    color: "#888",
    "@media (max-width: 1100px)": {
      fontSize: "75%"
    }
  },
  icons: {
    color: "#089",
    "@media (max-width: 1100px)": {
      // transform: "scale(0.9)",
      marginLeft: "-5px",
      marginRight: "-5px"
    },
    "@media (max-width: 700px)": {
      transform: "scale(0.85)",
      marginLeft: "-5px",
      marginRight: "-10px"
    }
  },
  iconButton: {
    width: "fit-content",
    height: "fit-content"
  },
  cardActions: {
    "@media (max-width: 700px)": {
      padding: "0",
      alignItems: "flex-start"
    }
  },
  score: {
    color: "#999",
    fontFamily: "'Kulim Park'",
    fontWeight: "600",
    backgroundColor: "#252525",
    padding: "7px",
    borderRadius: "5px",
    width: "fit-content",
    margin: "auto",
    "@media (max-width: 1200px)": {
      fontSize: "85%",
      padding: "5px"
    },
    "@media (max-width: 700px)": {
      fontSize: "75%",
      padding: "3px"
    }
  }
};
