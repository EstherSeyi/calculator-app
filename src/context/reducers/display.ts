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
    case "CLEAR_DATA":
      return {
        ...state,
        displayData: state.displayData.slice(0, state.displayData.length - 1),
      };
    default:
      return {
        ...state,
      };
  }
};

export default displayReducer;
