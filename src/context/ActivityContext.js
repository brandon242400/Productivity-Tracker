// Creates Activity context to share activity information throughout the application.

import React from "react";

const ActivityContext = React.createContext({});

export const ActivityProvider = ActivityContext.Provider;
export const ActivityConsumer = ActivityContext.Consumer;
export default ActivityContext;
