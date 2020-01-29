import React from "react";
import UserContext from "../../../context/UserContext";
import fire from "../../firebase/Firebase";
import { ButtonContainer } from "../../../styles/AppDisplayStyles";
import { Link } from "react-router-dom";

// Sign-up/Login button at the top of the screen

export default function SignUpButton() {
  const userContext = React.useContext(UserContext);
  return (
    <>
      {userContext ? (
        <ButtonContainer onClick={() => fire.auth().signOut()}>
          <p>Log out</p>
        </ButtonContainer>
      ) : (
        <Link to="sign-up">
          <ButtonContainer>
            <p>Sign up/Login</p>
          </ButtonContainer>
        </Link>
      )}
    </>
  );
}
