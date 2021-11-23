import { initialState } from "../store";

const lengthReducer = (state = { initialState }, action) => {
  switch (action.type) {
    case "GET_NO_COLS":
      return {
        ...state,
        lengthOfCols: action.payload,
      };
    case "GET_NO_ROWS":
      return {
        ...state,
        lengthOfRows: action.payload,
      };
    case "GET_LONGEST_COL_LABEL":
      return {
        ...state,
        longestColLabel: action.payload,
      };
    case "GET_LONGEST_ROW_LABEL":
      return {
        ...state,
        longestRowLabel: action.payload,
      };

    default:
      return state;
  }
};

export default lengthReducer;
