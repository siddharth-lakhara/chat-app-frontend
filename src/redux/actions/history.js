import types from "../types";

export const updateHistory = () => {
  return {
    type: types.UPDATE_HISTORY,
  };
}

export const updateText = (e) => {
  const {value} = e.target;
  return {
  type: types.TEXT_UPDATE,
  payload: value,
  };
};