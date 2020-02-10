import { createContext } from "react";

const UserVisitedContext = createContext();

const UserVisitedProvider = UserVisitedContext.Provider;

const UserVisitedConsumer = UserVisitedContext.Consumer;

export default UserVisitedContext;
export { UserVisitedProvider, UserVisitedConsumer };
