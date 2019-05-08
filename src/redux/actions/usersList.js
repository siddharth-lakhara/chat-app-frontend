import types from '../types';

export const changeSelectedUser = newSelectedUser => ({
  type: types.USER_CHANGE,
  payload: newSelectedUser,
});

export const userLogin = userName => ({
  type: types.USER_LOGIN,
  payload: {
    userName,
  },
});

export const userLoginSuccess = userName => ({
  type: types.USER_LOGIN_SUCCESS,
  payload: {
    userName,
  },
});

export const userLoginFail = userName => ({
  type: types.USER_LOGIN_FAIL,
  payload: {
    userName,
  },
});
