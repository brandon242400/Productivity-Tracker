import React from "react";
// import Firebase from "../components/firebase/Firebase";

const FirebaseContext = React.createContext();

const FirebaseProvider = FirebaseContext.Provider;

const FirebaseConsumer = FirebaseContext.Consumer;

export default FirebaseContext;
export { FirebaseProvider, FirebaseConsumer };
