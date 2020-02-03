import styled from "styled-components";

export const Container = styled.div`
  // border: 2px solid red;
  width: 80vw;
  min-height: 50vh;
  margin: 8vh auto;
`;

export const ActivityContainer = styled.div`
  width: 71vw;
  height: auto;
  // margin: 10vh auto;
  margin: auto;
  padding: 0.5vh 1vw 2vh 1vw;
  border-right: 3px solid #089;
  border-left: 3px solid #089;
  background-color: rgba(50, 50, 50, 0.55);
  box-shadow: 0px 0px 12px 0px #222;
  transition: max-width 0.25s;

  h2 {
    color: #999;
    padding: 5px 10px;
    border-left: 2px solid #089;
    border-right: 2px solid #089;
    width: fit-content;
    font-weight: 400;
    margin-left: 2%;
  }
`;

export const H2 = styled.h2`
  background-color: rgba(50, 50, 50, 0.55);
  width: fit-content;
  margin: auto;
  padding: 5px 10px;
  font-size: 1.5vw;
  border-left: 2px solid #089;
  border-right: 2px solid #089;
  color: #389;
  font-weight: 400;
`;

export const Score = styled.h3`
  color: #999;
  width: fit-content;
  height: fit-content;
  padding: 0 10px;
  // border-right: 2px solid #089;
  // border-left: 2px solid #089;
  margin-right: 0;
  margin-left: auto;

  @media (max-width: 1000px) {
    font-size: 75%;
    border: 1px solid #333;
  }
`;

export const Header = styled.h3`
  font-size: 170%;
  width: fit-content;
  height: fit-content;
  color: #999;
  padding: 5px 15px;
  border-right: 2px solid #089;
  border-left: 2px solid #089;
  transition: color 0.25s, background-color 0.25s, padding 0.25s,
    margin-left 0.25s;

  @media (max-width: 1000px) {
    font-size: 100%;
    border: 1px solid #333;
  }

  &:hover {
    background-color: #333;
    color: #089;
    cursor: pointer;
    padding: 5px 0px;
    margin-left: 15px;
  }
`;

export const testActivities = [
  {
    name: "Test 1",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/29/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 2",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/25/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 3",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/28/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 4",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/20/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 5",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/14/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 6",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/24/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 7",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/29/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 2",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/25/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 3",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/28/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 4",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/20/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 5",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/14/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 6",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/24/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 7",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/29/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 2",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/25/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 3",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/28/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 4",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/20/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 5",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/14/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 6",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/24/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 7",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/29/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 2",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/25/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 3",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/28/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 4",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/20/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 5",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/14/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 6",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/24/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 7",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/29/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 2",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/25/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 3",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/28/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 4",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/20/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 5",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/14/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 6",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/24/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 7",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/29/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 2",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/25/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 3",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/28/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 4",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/20/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 5",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/14/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 6",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/24/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 7",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/29/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 2",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/25/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 3",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/28/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 4",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/20/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 5",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/14/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 6",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/24/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 7",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/29/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 2",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/25/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Birfday",
    description: "Bein a boss on mah birfday",
    timeSpentDoing: 24 * 60,
    dateUsed: "02/15/2019",
    timeUsed: new Date().getTime(),
    rating: 100,
    ID: "activity-0"
  },
  {
    name: "Test 4",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/15/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 5",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/14/2019",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 6",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/24/2019",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 7",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "01/29/2019",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  }
];
