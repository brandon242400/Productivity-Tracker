// Handles getting and setting activity list to/from localStorage.
// This is temporary for development until the site is set up on a server that can be used to set/get data. All methods will be converted to use storage once the app is migrated.

//
// Everything below here has to do with setting and getting past used activities for the sake of making it easier for the user to select them in the future.
const ACTIVITY_LIST_SAVE_NAME = "productivity-tracker-saved-activity-list";

export const getActivityList = (fileName = ACTIVITY_LIST_SAVE_NAME) => {
  return JSON.parse(localStorage.getItem(fileName));
};

export const setActivityList = (list, fileName = ACTIVITY_LIST_SAVE_NAME) => {
  localStorage.setItem(fileName, JSON.stringify(list));
};
