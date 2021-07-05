import { createContext, useReducer, useContext, ReactNode } from "react";

import displayReducer from "./reducers/display";
import {
  typeData,
  clearData,
  resetData,
  calculateData,
} from "./actions/display";

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
  const reset = () => {
    return dispatch(resetData());
  };
  const calculate = (payload: string) => {
    return dispatch(calculateData(payload));
  };

  return (
    <DisplayContext.Provider
      value={{ displayState, clear, type, reset, calculate }}
    >
      {children}
    </DisplayContext.Provider>
  );
};
const useDisplay = () => useContext(DisplayContext);

export { DisplayProvider, useDisplay };
