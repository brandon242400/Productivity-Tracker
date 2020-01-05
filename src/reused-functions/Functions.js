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
  list = list.sort((a, b) => b.lastUsedTime - a.lastUsedTime);
  let [date, score] = [getTodaysDate(), 0];
  for (let activity of list) {
    if (activity.lastUsedDate === date)
      for (let instance of activity.timeSpentDoing) {
        if (instance.date === date)
          score += (instance.duration / 60) * activity.rating;
        else break;
      }
  }
  return score;
};

// Returns a list of all activities done today.
// Creates sepereate Activity objects for each time an activity was done.
export const getTodaysActivities = list => {
  let date = getTodaysDate();
  let todaysActivities = [];
  for (let act of list) {
    if (act.lastUsedDate === date) {
      if (act.timeSpentDoing.length > 1) {
        for (let instance of act.timeSpentDoing) {
          if (instance.date === date)
            todaysActivities.push({
              name: act.name,
              description: act.description,
              timeSpentDoing: [
                {
                  date: instance.date,
                  duration: instance.duration
                }
              ],
              lastUsedDate: instance.date,
              lastUsedTime: act.lastUsedTime,
              rating: act.rating
            });
        }
      } else todaysActivities.push(act);
    }
  }
  return todaysActivities;
};
