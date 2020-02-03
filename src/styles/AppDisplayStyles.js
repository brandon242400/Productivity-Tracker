import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin-top: 2vh;
  margin-left: auto;
  margin-right: auto;
  // border: 1px solid #333;
  // background-color: #888;
  // width: 110vw;
  padding: 15px;
`;

export const H1 = styled.h1`
  text-decoration: underline;
  font-size: 1.7vw;
  border-left: 3px solid #078;
  border-right: 3px solid #078;
  color: #999;
  padding: 1vw;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh;
  background-color: rgba(50, 50, 50, 0.55);

  @media (max-width: 1000px) {
    font-size: 125%;
    padding: 10px;
  }
`;

export const H1offset = styled.h1`
  // position: fixed;
  display: none;
  color: #034;
  text-decoration: underline;
  font-size: 1.2vw;
  border: 0.1vw solid #023;
  border-radius: 0.6vw;
  padding: 0.75vw;
  width: fit-content;
  // margin-left: 5vw;
  // margin-right: auto;
  // margin-top: 3vh;
  box-shadow: 2px 2px 3px 2px #222;
  background-color: #666;

  @media (max-width: 1000px) {
    font-size: 110%;
    border: 2px solid black;
    border-radius: 10px;
    padding: 10px;
  }
`;

export const OffsetContainer = styled.div`
  width: fit-content;
  margin-left: 5vw;
  margin-right: auto;
  margin-top: 5vh;
  // border: 2px solid orange;
`;

export const ButtonContainer = styled.div`
  color: #999;
  font-weight: 600;
  position: fixed;
  top: 2vh;
  right: 2vw;
  border: 1px solid black;
  border-radius: 15px;
  padding: 0 5px;
  background: #444;
  box-shadow: 0.2vh 0.2vw 3px 1px #222;
  transition: all 0.2s;
  text-decoration: underline;

  :hover {
    top: 1.8vh;
    right: 2.2vw;
    box-shadow: 0.4vh 0.4vw 4px 1px #222;
    cursor: pointer;
  }

  :active {
    color: white;
  }
`;
