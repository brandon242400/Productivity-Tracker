import styled from "styled-components";

export const ActivityContainer = styled.div`
  width: 71vw;
  height: auto;
  margin: 10vh auto;
  // padding: 0.5vh 1vw 2vh 1vw;
  border-right: 2px solid #089;
  border-left: 2px solid #089;
  background-color: rgba(60, 60, 60, 0.75);
  box-shadow: 0px 0px 12px 0px #222;

  .home-page-text {
    color: #999;
    width: 50%;
    margin: auto;
    padding-bottom: 50px;

    @media (max-width: 1000px) {
      font-size: 80%;
    }
  }

  @media (max-width: 1350px) {
    width: 81vw;
  }

  @media (max-width: 1100px) {
    width: 81vw;
  }

  @media (max-width: 800px) {
    width: 79vw;
  }

  @media (max-width: 600px) {
    width: 85vw;
  }
`;

export const Score = styled.h3`
  color: #999;
  width: fit-content;
  height: fit-content;
  padding: 0 10px;
  border-bottom: 2px solid #089;
  margin-right: 2vw;
  margin-left: auto;

  @media (max-width: 1000px) {
    font-size: 85%;
  }
`;

export const Header = styled.h3`
  font-size: 170%;
  width: fit-content;
  height: fit-content;
  color: #999;
  padding: 5px 10px;
  border-right: 2px solid #089;
  border-left: 2px solid #089;
  margin-left: 2vw;
  margin-right: auto;

  @media (max-width: 1000px) {
    font-size: 125%;
    padding: 2.5px 5px;
  }
`;

export const MainTitle = styled.h1`
  text-decoration: underline;
  font-size: 200%;
  border-left: 3px solid #078;
  border-right: 3px solid #078;
  color: #999;
  padding: 10px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh;
  background-color: rgba(50, 50, 50, 0.55);

  @media (max-width: 1000px) {
    font-size: 150%;
    padding: 10px;
  }
`;
