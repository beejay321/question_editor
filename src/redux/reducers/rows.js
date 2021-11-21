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

    default:
      return state;
  }
};

export default lengthReducer;
