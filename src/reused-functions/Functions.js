// Returns today's date in the format mm/dd/yyyy
export const getTodaysDate = (today = new Date()) => {
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return mm + "/" + dd + "/" + yyyy;
};

// Returns the productivity score for the day.
export const getTodaysScore = list => {
  list = list.sort((a, b) => b.timeUsed - a.timeUsed);
  let [date, score] = [getTodaysDate(), 0];
  for (let activity of list) {
    if (activity.dateUsed === date)
      score += (activity.timeSpentDoing / 60) * activity.rating;
    else break;
  }
  return score;
};

// Returns a list of all activities done today.
// Creates sepereate Activity objects for each time an activity was done.
export const getTodaysActivities = list => {
  let date = getTodaysDate();
  let todaysActivities = [];
  for (let act of list) {
    if (act.dateUsed === date) {
      todaysActivities.push(act);
    }
  }
  return todaysActivities;
};
