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
