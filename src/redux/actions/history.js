import types from "../types";

export const sendMsg = () => ({
  type: types.SEND_MSG,
});

export const updateText = (e) => {
  const {value} = e.target;
  return {
  type: types.TEXT_UPDATE,
  payload: value,
  };
};