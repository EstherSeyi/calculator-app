import { initialState } from "../display";

type ActionType = {
  type: string;
  payload?: string;
};

const displayReducer = (
  state = initialState,
  { type, payload }: ActionType
) => {
  switch (type) {
    case "TYPE_DATA":
      return {
        ...state,
        displayData: `${state.displayData}${payload}`,
      };
    case "RESET_DATA":
      return {
        ...state,
        displayData: "",
      };
    default:
      return {
        ...state,
      };
  }
};

export default displayReducer;
