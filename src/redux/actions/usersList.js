import types from "../types";

export const usersList = (newUserList) => ({
  type: types.USERS_UPDATE,
  payload: newUserList,
});

export const changeSelectedUser = (newSelectedUser) => {
  return {
    type: types.USER_CHANGE,
    payload: newSelectedUser,
  };
}