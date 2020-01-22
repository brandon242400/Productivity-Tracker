// Handles getting and setting activity list to/from localStorage.

const ACTIVITY_LIST_SAVE_NAME = "productivity-tracker-saved-activity-list";

export const getActivityList = (fileName = ACTIVITY_LIST_SAVE_NAME) => {
  return JSON.parse(localStorage.getItem(fileName));
};

export const setActivityList = (list, fileName = ACTIVITY_LIST_SAVE_NAME) => {
  localStorage.setItem(fileName, JSON.stringify(list));
};

// Returns an activity ID that's unique from any other in the current list.
export const getValidActivityID = (activityList = getActivityList()) => {
  if (!activityList) return "activity-0";
  let currentIDs = [];
  for (let activity of activityList) {
    currentIDs.push(activity.ID);
  }
  let name = "activity-0";
  let num = 0;
  let validNameFound = false;
  while (!validNameFound) {
    if (currentIDs.includes(name)) name = "activity-" + ++num;
    else validNameFound = true;
  }
  return name;
};
