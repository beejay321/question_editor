export const getNoOfColumns = (col) => {
  return {
    type: "GET_NO_COLS",
    payload: col.length,
  };
};

export const getNoOfRows = (row) => {
  return {
    type: "GET_NO_ROWS",
    payload: row.length - 1,
  };
};
export const getLongestColLabel = (label) => {
  return {
    type: "GET_LONGEST_COL_LABEL",
    payload: label,
  };
};
export const getLongestRowLabel = (label) => {
  return {
    type: "GET_LONGEST_ROW_LABEL",
    payload: label,
  };
};
