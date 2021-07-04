import { createContext, useReducer, useContext, ReactNode } from "react";

import displayReducer from "./reducers/display";
import { typeData, clearData } from "./actions/display";

export const initialState = {
  displayData: "",
};

const DisplayContext = createContext<any>(initialState);

const DisplayProvider = ({ children }: { children: ReactNode }) => {
  const [displayState, dispatch] = useReducer(displayReducer, initialState);

  const clear = () => {
    return dispatch(clearData());
  };
  const type = (payload: string) => {
    return dispatch(typeData(payload));
  };

  return (
    <DisplayContext.Provider value={{ displayState, clear, type }}>
      {children}
    </DisplayContext.Provider>
  );
};
const useDisplay = () => useContext(DisplayContext);

export { DisplayProvider, useDisplay };
