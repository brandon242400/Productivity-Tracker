import styled from "styled-components";

export const ActivityContainer = styled.div`
  width: 71vw;
  height: auto;
  margin: auto;
  margin-bottom: 10vh;
  border-right: 3px solid #089;
  border-left: 3px solid #089;
  background-color: rgba(50, 50, 50, 0.55);
  box-shadow: 0px 0px 12px 0px #222;

  h2 {
    color: #999;
    padding: 5px 10px;
    border-left: 2px solid #089;
    border-right: 2px solid #089;
    width: fit-content;
    font-weight: 400;
    margin-left: 2%;
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

export const H2 = styled.h2`
  background-color: rgba(50, 50, 50, 0.55);
  width: fit-content;
  margin: auto;
  margin-bottom: 10vh;
  padding: 5px 10px;
  font-size: 190%;
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
  font-size: 135%;
  border-bottom: 2px solid #089;
  margin-right: 15px;
  margin-left: auto;

  @media (max-width: 1000px) {
    font-size: 100%;
  }
`;

export const Header = styled.h3`
  font-size: 170%;
  width: fit-content;
  height: fit-content;
  margin-left: 15px;
  color: #999;
  padding: 5px 15px;
  border-right: 2px solid #089;
  border-left: 2px solid #089;
  transition: color 0.25s, background-color 0.25s, padding 0.25s,
    margin-left 0.25s;

  @media (max-width: 1000px) {
    font-size: 140%;
  }

  &:hover {
    background-color: #333;
    color: #089;
    cursor: pointer;
    padding: 5px 0px;
    margin-left: 30px;
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
