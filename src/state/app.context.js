import { createContext, useReducer } from "react";
import { appReducer, INITIALSTATE } from "./app.reducer";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, INITIALSTATE);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;