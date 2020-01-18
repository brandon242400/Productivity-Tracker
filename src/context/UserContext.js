import { createContext } from "react";

const UserContext = createContext();

const UserProvider = UserContext.Provider;

const UserConsumer = UserContext.Consumer;

export default UserContext;
export { UserProvider, UserConsumer };
