import { getTodaysDate } from "../../../reused-functions/Functions";

export const formatWeekData = data => {
  let shortData = [];
  shortData = data.map(item => ({
    date: item.date.substring(0, 5),
    score: item.score
  }));
  return shortData;
};

export const formatMonthData = data => {
  let shortData = [];
  data = data.reverse();
  for (let x = 0; x < data.length; x++) {
    if (x % 3 === 0) {
      shortData.unshift(JSON.parse(JSON.stringify(data[x])));
      shortData[0].date = shortData[0].date.substring(0, 5);
    } else
      shortData[0] = {
        date: shortData[0].date,
        score: shortData[0].score + data[x].score
      };
  }
  return shortData;
};

// Formats data up to a year
export const formatYearData = data => {
  let shortData = [];
  let currentMonthInt = parseInt(data[data.length - 1].date.substring(0, 2));
  let lastYearBool = false;
  let lastYearString = (parseInt(getTodaysDate().substring(6)) - 1).toString();

  // Filling the new data list with the correct months to display on the graph
  for (let x = 0; x < 13; x++) {
    shortData.unshift({
      date:
        monthList[currentMonthInt--] +
        (lastYearBool ? ` ${lastYearString}` : ""),
      score: 0
    });
    if (currentMonthInt <= 0) {
      currentMonthInt = 12;
      lastYearBool = true;
    }
  }

  // Putting the info from 'data' into 'shortData'
  // data = data.reverse();
  data.map(el => {
    let targetDate = monthList[el.date.substring(0, 2)];
    if (el.date.substring(6) === lastYearString)
      targetDate += ` ${lastYearString}`;
    for (let x = 0; x < shortData.length; x++) {
      if (shortData[x].date === targetDate) {
        shortData[x].score += el.score;
        break;
      }
    }
  });

  // console.log(shortData);
  // console.log(data);
  return shortData;
};

export const monthList = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "June",
  "07": "Jul",
  "08": "Aug",
  "09": "Sept",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "June",
  7: "Jul",
  8: "Aug",
  9: "Sept",
  10: "Oct",
  11: "Nov",
  12: "Dec"
};

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
    dateUsed: "02/06/2020",
    timeUsed: new Date().getTime(),
    rating: 55,
    ID: "activity-0"
  },
  {
    name: "Test 5",
    description: "Test Activity Description",
    timeSpentDoing: 10,
    dateUsed: "02/07/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 6",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "02/08/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 7",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "02/05/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 2",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "02/04/2020",
    timeUsed: new Date().getTime(),
    rating: 35,
    ID: "activity-0"
  },
  {
    name: "Test 3",
    description: "Test Activity Description",
    timeSpentDoing: 48,
    dateUsed: "02/03/2020",
    timeUsed: new Date().getTime(),
    rating: 75,
    ID: "activity-0"
  },
  {
    name: "Test 4",
    description: "Test Activity Description",
    timeSpentDoing: 20,
    dateUsed: "02/01/2020",
    timeUsed: new Date().getTime(),
    rating: 90,
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
