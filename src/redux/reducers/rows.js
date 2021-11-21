import { initialState } from "../store";

const lengthReducer = (state = { initialState }, action) => {
  switch (action.type) {
    case "GET_NO_COLS":
      return {
        ...state,
        lengthOfCols: action.payload, // THIS IS VALID
      };
    case "GET_NO_ROWS":
      return {
        ...state,
        lengthOfRows: action.payload, // THIS IS VALID
      };

    default:
      return state;
  }
};

export default lengthReducer;
