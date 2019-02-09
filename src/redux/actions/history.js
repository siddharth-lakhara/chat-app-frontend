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

export const sendMsg = (selectedUser, currentText) => {
  return {
    type: types.SEND_MSG,
    payload: {
      selectedUser,
      currentText
    },
  };
}

export const receiveMessage = (payload) => ({
  type: types.RCV_MSG,
  payload,
});

export const usersUpdate = (newUsersList) => {
  return {
    type: types.USERS_UPDATE,
    payload: newUsersList
  }
}