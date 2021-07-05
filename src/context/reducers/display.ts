import { initialState } from "../display";

type ActionType = {
  type: string;
  payload?: string;
};

const nonNumbers = ["-", "/", "x", "=", "+", "0"];

const handleType = (state: typeof initialState, data?: string) => {
  if (state.displayData === "" && data && nonNumbers.includes(data)) {
    return state;
  } else {
    return {
      ...state,
      displayData: `${state.displayData}${data}`,
    };
  }
};

const displayReducer = (
  state = initialState,
  { type, payload }: ActionType
) => {
  switch (type) {
    case "TYPE_DATA":
      return handleType(state, payload);

    case "CLEAR_DATA":
      return {
        ...state,
        displayData: state.displayData.slice(0, state.displayData.length - 1),
      };
    case "RESET_DATA":
      return {
        ...state,
        displayData: "",
      };
    case "CALCULATE":
      return {
        ...state,
        // eslint-disable-next-line
        displayData: eval(payload || "0"),
      };
    default:
      return {
        ...state,
      };
  }
};

export default displayReducer;
